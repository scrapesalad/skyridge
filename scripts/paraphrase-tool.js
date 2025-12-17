#!/usr/bin/env node

/**
 * Paraphrase Tool
 *
 * Standalone CLI to repurpose an existing Next.js app's copy
 * for a new brand / service using a local Ollama model.
 *
 * Usage:
 *   From root: node scripts/paraphrase-tool.js [site-directory]
 *   From site: node ../scripts/paraphrase-tool.js
 *              (auto-detects current directory if it has an 'app' folder)
 */

const inquirer = require('inquirer');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const http = require('http');

// --------- Ollama LLM helper ------------------------------------

async function callLlm(prompt) {
  const host = process.env.OLLAMA_HOST || 'localhost';
  const port = parseInt(process.env.OLLAMA_PORT || '11434', 10);
  const model = process.env.OLLAMA_MODEL || 'llama3';

  const body = JSON.stringify({
    model,
    stream: false,
    messages: [
      {
        role: 'system',
        content:
          'You are a precise code editor that ONLY rewrites user-facing text while preserving all code structure.'
      },
      { role: 'user', content: prompt }
    ]
  });

  const options = {
    hostname: host,
    port,
    path: '/api/chat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body)
    },
    timeout: 600000 // 10 minutes
  };

  return await new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode && res.statusCode >= 400) {
          return reject(
            new Error(`Ollama HTTP ${res.statusCode}: ${data.slice(0, 300)}`)
          );
        }

        try {
          const json = JSON.parse(data);
          const content = json?.message?.content;
          if (!content) {
            return reject(
              new Error('Ollama response missing message.content field')
            );
          }
          resolve(content);
        } catch (err) {
          reject(
            new Error(
              `Failed to parse Ollama response as JSON: ${err.message}. Raw: ${data.slice(
                0,
                500
              )}`
            )
          );
        }
      });
    });

    req.on('error', (err) => {
      reject(
        new Error(
          `Error calling Ollama at http://${host}:${port}/api/chat: ${err.message}`
        )
      );
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Ollama request timed out'));
    });

    req.write(body);
    req.end();
  });
}

// Build a prompt that rewrites only user-facing copy in a TSX/TS file
function buildFileParaphrasePrompt({
  brandName,
  category,
  serviceDescription,
  filePath,
  fileContent
}) {
  return `
You are refactoring the COPY (not the code) in a production Next.js codebase.

Goal:
- Rewrite all user-facing text in this file so it fits the new brand and service.

New brand:
- Brand name: ${brandName}
- Service category: ${category}
- Service description: ${serviceDescription || category}

Critical rules:
- KEEP all code structure exactly the same:
  - Do NOT change imports, exports, component names, function names, props, hooks, or types.
  - Do NOT change route segments, file names, or dynamic route params.
- ONLY change user-visible text:
  - Headings, paragraphs, button labels, link text, meta titles/descriptions, SEO copy, etc.
- Do NOT add or remove JSX elements unless absolutely necessary for wording.
- Keep TypeScript/TSX syntax valid.
- Do NOT wrap the answer in Markdown or backticks.
- Return ONLY the full updated file contents as plain text.

File path (for your context only): ${filePath}

Here is the current file:

-----FILE START-----
${fileContent}
-----FILE END-----
`;
}

async function findCodeFiles(rootDir) {
  const results = [];

  async function walk(dir) {
    let entries;
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip common heavy directories
        if (
          ['node_modules', '.next', '.git', 'dist', 'build', '.cache'].includes(
            entry.name
          )
        ) {
          continue;
        }
        await walk(fullPath);
      } else if (entry.isFile()) {
        if (/\.(tsx|jsx|ts|js)$/i.test(entry.name)) {
          results.push(fullPath);
        }
      }
    }
  }

  await walk(rootDir);
  return results;
}

async function run() {
  console.log('\n🧠 Paraphrase Tool – Repurpose a Next.js app with Ollama\n');

  // Check for command-line argument or auto-detect current directory
  let defaultTargetDir = null;
  let isAutoDetected = false;
  const args = process.argv.slice(2);
  
  if (args.length > 0) {
    // Use command-line argument if provided
    defaultTargetDir = args[0];
  } else {
    // Auto-detect: if we're in a directory with an 'app' folder, use current directory
    const currentDir = process.cwd();
    const appDir = path.join(currentDir, 'app');
    if (fs.existsSync(appDir)) {
      defaultTargetDir = '.'; // Use '.' to indicate current directory
      isAutoDetected = true;
      console.log(`   ℹ️  Auto-detected target directory: ${path.basename(currentDir)}`);
    }
  }

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'targetDir',
      message: 'Path to the Next.js app you want to repurpose:',
      default: defaultTargetDir || 'johnny-5',
      validate: (v) => {
        // If auto-detected and user confirms with '.', use current directory
        const input = v.trim();
        const p = (isAutoDetected && input === '.') 
          ? process.cwd()
          : path.resolve(process.cwd(), input);
        return fs.existsSync(p)
          ? true
          : `Directory not found: ${p}`;
      }
    },
    {
      type: 'input',
      name: 'brandName',
      message: 'New brand name:',
      validate: (v) => (v.trim() ? true : 'Please enter a brand name.')
    },
    {
      type: 'input',
      name: 'category',
      message: 'New primary service/category (e.g. landscaping, roofing, dumpster rental):',
      validate: (v) => (v.trim() ? true : 'Please enter a service/category.')
    },
    {
      type: 'input',
      name: 'serviceDescription',
      message: 'Short description of what this brand does (optional, helps guide tone):',
      default: ''
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: (ans) =>
        `Repurpose "${ans.targetDir}" to brand "${ans.brandName}" for "${ans.category}" using Ollama?`,
      default: true
    }
  ]);

  if (!answers.confirm) {
    console.log('Cancelled. No changes made.');
    process.exit(0);
  }

  // Resolve target directory (handle '.' for current directory)
  const targetDirInput = answers.targetDir.trim();
  const targetDir = (targetDirInput === '.')
    ? process.cwd()
    : path.resolve(process.cwd(), targetDirInput);
  const appDir = path.join(targetDir, 'app');

  if (!fs.existsSync(appDir)) {
    console.error(`❌ Could not find app directory at: ${appDir}`);
    process.exit(1);
  }

  console.log(`\n🔍 Scanning for Next.js files under: ${appDir}`);
  const files = await findCodeFiles(appDir);
  if (files.length === 0) {
    console.warn('⚠️ No TSX/TS/JSX/JS files found to process.');
    process.exit(0);
  }

  console.log(`   Found ${files.length} code file(s) to consider.`);

  const { confirmProcess } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmProcess',
      message: 'Proceed to paraphrase all these files with Ollama (this may take a while)?',
      default: true
    }
  ]);

  if (!confirmProcess) {
    console.log('Cancelled. No changes made.');
    process.exit(0);
  }

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const filePath of files) {
    const rel = path.relative(targetDir, filePath);

    // Skip obvious non-UX code helpers by heuristic (config, lib, utils, api, middleware)
    if (
      /(^|[\\/])(api|config|lib|utils|middleware)\b/i.test(rel) &&
      !/page\.(tsx|jsx|ts|js)$/i.test(rel)
    ) {
      skipped++;
      continue;
    }

    let content;
    try {
      content = await fsp.readFile(filePath, 'utf-8');
    } catch {
      skipped++;
      continue;
    }

    // Very large files might exceed context; skip > 40k chars
    if (content.length > 40000) {
      console.warn(`   ⚠️ Skipping large file (>40k chars): ${rel}`);
      skipped++;
      continue;
    }

    console.log(`\n✏️  Paraphrasing ${rel} ...`);

    const prompt = buildFileParaphrasePrompt({
      brandName: answers.brandName.trim(),
      category: answers.category.trim(),
      serviceDescription: answers.serviceDescription.trim(),
      filePath: rel,
      fileContent: content
    });

    try {
      const raw = await callLlm(prompt);
      // We expect the model to return JUST the updated file text.
      const updated = raw.trim();

      if (!updated || updated === content.trim()) {
        console.log('   ℹ️  No meaningful changes detected, leaving file as-is.');
        skipped++;
        continue;
      }

      await fsp.writeFile(filePath, updated, 'utf-8');
      console.log('   ✅ File updated');
      processed++;
    } catch (err) {
      console.warn(`   ⚠️ Failed to paraphrase ${rel}: ${err.message}`);
      failed++;
    }
  }

  console.log('\n✅ Paraphrasing run complete.');
  console.log(`   Updated files: ${processed}`);
  console.log(`   Skipped files: ${skipped}`);
  console.log(`   Failed files:  ${failed}`);
}

run().catch((err) => {
  console.error('❌ Fatal error in paraphrase-tool:', err);
  process.exit(1);
});


