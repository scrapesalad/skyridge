import { ImageResponse } from 'next/og';
import { BUSINESS } from '@/lib/site';

export const runtime = 'edge';

export const alt = `${BUSINESS.name} - Utah Roofing`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0b1f5a 0%, #1e40af 60%, #3b82f6 100%)',
          color: 'white',
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
          padding: 64,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 980 }}>
          <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>{BUSINESS.name}</div>
          <div style={{ fontSize: 34, fontWeight: 700, opacity: 0.95 }}>Roof Repair • Roof Replacement • Roof Installation</div>
          <div style={{ fontSize: 26, fontWeight: 600, opacity: 0.9 }}>Serving Utah • Licensed & Insured</div>
        </div>
      </div>
    ),
    size
  );
}

