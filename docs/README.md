# Documentation Folder

This folder contains comprehensive build documentation for the King Tut Template.

## Files

### COMPLETE-BUILD-GUIDE.md
A complete step-by-step guide that documents how to build the entire site from scratch, including:
- All prompts used
- File-by-file creation instructions
- Complete code examples
- Best practices
- Troubleshooting

### Site Generator

The King Tut template now includes a **Site Generator** that automates the entire site creation process. See `SITE-GENERATOR-README.md` in the root directory for complete documentation.

**Quick Start:**
```bash
npm install
npm run create-site
```

The generator will:
- Prompt for business information
- Let you choose from 5 distinct Avada-style templates
- Apply your chosen color scheme
- Generate all 80+ pages with tokens replaced
- Create a ready-to-use website in minutes

**Templates Available:**
1. **King Tut Classic** - Service business template
2. **Corporate Split** - Split-screen hero with icon boxes
3. **One Page Parallax** - Single-page scrolling layout
4. **Portfolio Grid** - Masonry grid with filterable projects
5. **Agency Modern** - Full-width slider with overlapping cards

## Converting to PDF

### Option 1: Using Pandoc (Recommended)

1. **Install Pandoc:**
   - Download from: https://pandoc.org/installing.html
   - Or via package manager: `choco install pandoc` (Windows) or `brew install pandoc` (Mac)

2. **Convert to PDF:**
   ```bash
   pandoc docs/COMPLETE-BUILD-GUIDE.md -o docs/COMPLETE-BUILD-GUIDE.pdf --pdf-engine=wkhtmltopdf
   ```
   
   Or with better formatting:
   ```bash
   pandoc docs/COMPLETE-BUILD-GUIDE.md -o docs/COMPLETE-BUILD-GUIDE.pdf --pdf-engine=xelatex -V geometry:margin=1in
   ```

### Option 2: Using Markdown to PDF Tools

**Online Tools:**
- https://www.markdowntopdf.com/
- https://md2pdf.netlify.app/
- https://dillinger.io/ (has export to PDF)

**VS Code Extension:**
- Install "Markdown PDF" extension
- Open COMPLETE-BUILD-GUIDE.md
- Right-click → "Markdown PDF: Export (pdf)"

### Option 3: Using Browser Print

1. Open COMPLETE-BUILD-GUIDE.md in a markdown viewer
2. Use browser's Print function (Ctrl+P / Cmd+P)
3. Save as PDF

### Option 4: Using Node.js (md-to-pdf)

1. **Install:**
   ```bash
   npm install -g md-to-pdf
   ```

2. **Convert:**
   ```bash
   md-to-pdf docs/COMPLETE-BUILD-GUIDE.md
   ```

### Option 5: Using Python (markdown2pdf)

1. **Install:**
   ```bash
   pip install markdown2pdf
   ```

2. **Convert:**
   ```bash
   markdown2pdf docs/COMPLETE-BUILD-GUIDE.md
   ```

## Recommended: Pandoc with LaTeX

For the best PDF output with proper formatting:

1. **Install Pandoc and LaTeX:**
   - Pandoc: https://pandoc.org/installing.html
   - MiKTeX (Windows): https://miktex.org/download
   - MacTeX (Mac): https://www.tug.org/mactex/

2. **Convert:**
   ```bash
   pandoc docs/COMPLETE-BUILD-GUIDE.md -o docs/COMPLETE-BUILD-GUIDE.pdf \
     --pdf-engine=xelatex \
     -V geometry:margin=1in \
     -V fontsize=11pt \
     -V documentclass=article \
     --toc \
     --toc-depth=3
   ```

This will create a PDF with:
- Table of contents
- Proper page breaks
- Professional formatting
- All code blocks preserved

## Quick Conversion Script

Create a PowerShell script `docs/convert-to-pdf.ps1`:

```powershell
# Check if pandoc is installed
if (Get-Command pandoc -ErrorAction SilentlyContinue) {
    Write-Host "Converting to PDF using Pandoc..."
    pandoc "COMPLETE-BUILD-GUIDE.md" -o "COMPLETE-BUILD-GUIDE.pdf" `
        --pdf-engine=xelatex `
        -V geometry:margin=1in `
        -V fontsize=11pt `
        -V documentclass=article `
        --toc `
        --toc-depth=3
    Write-Host "PDF created: COMPLETE-BUILD-GUIDE.pdf"
} else {
    Write-Host "Pandoc not found. Please install Pandoc first."
    Write-Host "Download from: https://pandoc.org/installing.html"
}
```

Run with:
```powershell
cd docs
.\convert-to-pdf.ps1
```

## PDF Features

The generated PDF will include:
- ✅ Complete table of contents
- ✅ All code examples formatted
- ✅ Step-by-step instructions
- ✅ All prompts documented
- ✅ File structure diagrams
- ✅ Best practices section
- ✅ Troubleshooting guide

## Notes

- The markdown file is optimized for PDF conversion
- Code blocks use proper syntax highlighting
- Headers are structured for TOC generation
- Page breaks are suggested with horizontal rules

