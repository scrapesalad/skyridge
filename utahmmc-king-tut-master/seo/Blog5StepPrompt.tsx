import React from 'react'

export default function Blog5StepPrompt() {
  return (
    <section className="prose prose-lg max-w-none">
      <header>
        <h1>5-Step SEO Blog Post Prompt</h1>
        <p>Reusable prompt to consistently generate high-quality, SEO-optimized blog posts.</p>
      </header>

      <h2>How to Use</h2>
      <p>Use this exact 5-step prompt whenever creating a new blog post. Replace bracketed values.</p>

      <h2>1) Context and Goal</h2>
      <ul>
        <li>Topic: [insert topic]</li>
        <li>Primary target keyword: [insert keyword]</li>
        <li>Audience: [insert audience]</li>
        <li>Intent: [informational / commercial investigation]</li>
        <li>Constraints: [brand tone, word count range, internal links to include]</li>
      </ul>

      <h2>2) SEO Outline Requirements</h2>
      <p>Create a detailed outline that includes:</p>
      <ul>
        <li>Title (H1) incorporating the target keyword</li>
        <li>Meta description (≤ 155 chars) including the keyword</li>
        <li>Introduction with a compelling hook</li>
        <li>Main headings (H2) and subheadings (H3) using semantic keywords</li>
        <li>Bulleted key takeaways per H2 (1–3 bullets)</li>
        <li>Conclusion with call-to-action and next steps</li>
        <li>List of 10–15 semantic keywords to naturally incorporate</li>
        <li>FAQ section (3–5 questions) based on People Also Ask</li>
      </ul>

      <h2>3) Writing Instructions (Human, Helpful, E-E-A-T)</h2>
      <ul>
        <li>Write like a knowledgeable friend; clear, specific, and practical.</li>
        <li>Use short and long sentences; keep paragraphs ≤ 3 sentences.</li>
        <li>Include concrete tips, examples, numbers, and mistakes to avoid.</li>
        <li>Naturally weave in semantic keywords; avoid keyword stuffing.</li>
        <li>Prefer active voice; allow a few passive constructions for variety.</li>
        <li>Keep reading level accessible (approx. 8th–9th grade) while precise.</li>
        <li>Cite stats or standards when helpful; avoid vague generalities.</li>
      </ul>

      <h2>4) Content Draft Generation</h2>
      <ul>
        <li>Generate the full article (1200–1800 words unless otherwise specified) following the outline.</li>
        <li>Add internal link suggestions to relevant pages on this site where appropriate.</li>
        <li>Provide one-sentence TL;DR.</li>
        <li>Provide a social caption (≤ 120 chars) and 3–5 hashtags.</li>
        <li>Provide a suggested featured image prompt.</li>
      </ul>

      <h2>5) Final SEO Pack</h2>
      <ul>
        <li>Title tag (≤ 60 chars) and Meta description (≤ 155 chars)</li>
        <li>URL slug suggestion</li>
        <li>H1 (should match or closely mirror the title)</li>
        <li>List of semantic keywords actually used</li>
        <li>Schema.org recommendation (Article or BlogPosting JSON-LD fields to include)</li>
        <li>3–5 internally linkable anchor text ideas</li>
      </ul>

      <h2>Output Format</h2>
      <ul>
        <li>Section 1: Final Outline</li>
        <li>Section 2: Article Draft</li>
        <li>Section 3: SEO Pack</li>
        <li>Section 4: Internal Links</li>
      </ul>

      <h2>Quality Gates (check before finishing)</h2>
      <ul>
        <li>Does every H2 map to search intent and include actionable value?</li>
        <li>Are claims specific, sourced, or demonstrably practical?</li>
        <li>Is the meta description compelling and accurate?</li>
        <li>Are there zero fluff paragraphs?</li>
        <li>Are internal links contextually relevant?</li>
      </ul>
    </section>
  )
}


