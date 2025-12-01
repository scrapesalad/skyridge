import { NextRequest, NextResponse } from 'next/server';

// IndexNow API endpoint for submitting URLs to search engines
// Streaming mode: submit one URL at a time to avoid batch-mode warnings in Bing
export async function POST(request: NextRequest) {
  try {
    const { urls, action = 'update' } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // IndexNow configuration (Bing-issued key)
    const apiKey = '49e648308334459fb8dba2e49d20b199';
    const host = 'icondumpsters.com';
    const keyLocation = 'https://icondumpsters.com/49e648308334459fb8dba2e49d20b199.txt';

    // Validate URLs are from our domain
    const validUrls = urls.filter((url) =>
      typeof url === 'string' && url.startsWith('https://icondumpsters.com/')
    );

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'No valid URLs provided' },
        { status: 400 }
      );
    }

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow'
    ];

    async function submitSingle(url: string, endpoint: string) {
      const payload = {
        host,
        key: apiKey,
        keyLocation,
        urlList: [url]
      };

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'IconDumpsters-IndexNow/1.0'
          },
          body: JSON.stringify(payload)
        });

        return {
          url,
          endpoint: endpoint.replace('https://', '').replace('/indexnow', ''),
          status: response.status,
          success: response.status === 200 || response.status === 202
        };
      } catch {
        return {
          url,
          endpoint: endpoint.replace('https://', '').replace('/indexnow', ''),
          status: 0,
          success: false
        };
      }
    }

    // Stream submissions: per-URL fan-out to all endpoints with gentle concurrency
    const concurrency = 5;
    const queue = [...validUrls];
    const results: Array<{ url: string; endpoint: string; status: number; success: boolean }> = [];

    async function worker() {
      while (queue.length) {
        const url = queue.shift();
        if (!url) break;
        const perUrlResults = await Promise.all(endpoints.map((e) => submitSingle(url, e)));
        results.push(...perUrlResults);
        await new Promise((r) => setTimeout(r, 150)); // small pacing
      }
    }

    await Promise.all(Array.from({ length: Math.min(concurrency, validUrls.length) }, worker));

    return NextResponse.json({
      success: true,
      mode: 'streaming',
      submittedUrls: validUrls.length,
      results
    });
  } catch (error) {
    console.error('IndexNow API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET endpoint to check IndexNow status
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    status: 'active',
    key: '49e648308334459fb8dba2e49d20b199',
    keyLocation: 'https://icondumpsters.com/49e648308334459fb8dba2e49d20b199.txt',
    endpoints: [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow'
    ],
    instructions: [
      '1. Ensure indexnow-key.txt is accessible at https://icondumpsters.com/indexnow-key.txt',
      '2. Use POST /api/indexnow with {"urls": ["https://icondumpsters.com/page1", "https://icondumpsters.com/page2"]}',
      '3. Monitor results in Google Search Console and Bing Webmaster Tools'
    ]
  });
}
