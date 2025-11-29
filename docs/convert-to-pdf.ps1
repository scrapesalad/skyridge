# Convert COMPLETE-BUILD-GUIDE.md to PDF
# Requires Pandoc and LaTeX (XeLaTeX)

$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$mdFile = Join-Path $scriptPath "COMPLETE-BUILD-GUIDE.md"
$pdfFile = Join-Path $scriptPath "COMPLETE-BUILD-GUIDE.pdf"

# Check if pandoc is installed
if (-not (Get-Command pandoc -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Pandoc is not installed." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Pandoc first:" -ForegroundColor Yellow
    Write-Host "  Windows: choco install pandoc" -ForegroundColor Cyan
    Write-Host "  Or download from: https://pandoc.org/installing.html" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "You also need LaTeX (XeLaTeX):" -ForegroundColor Yellow
    Write-Host "  Windows: https://miktex.org/download" -ForegroundColor Cyan
    Write-Host "  Mac: https://www.tug.org/mactex/" -ForegroundColor Cyan
    exit 1
}

# Check if markdown file exists
if (-not (Test-Path $mdFile)) {
    Write-Host "ERROR: Markdown file not found: $mdFile" -ForegroundColor Red
    exit 1
}

Write-Host "Converting to PDF..." -ForegroundColor Green
Write-Host "  Input:  $mdFile" -ForegroundColor Gray
Write-Host "  Output: $pdfFile" -ForegroundColor Gray
Write-Host ""

try {
    pandoc $mdFile -o $pdfFile `
        --pdf-engine=xelatex `
        -V geometry:margin=1in `
        -V fontsize=11pt `
        -V documentclass=article `
        --toc `
        --toc-depth=3 `
        -V colorlinks=true `
        -V linkcolor=blue `
        -V urlcolor=blue `
        -V toccolor=gray
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "SUCCESS: PDF created!" -ForegroundColor Green
        Write-Host "  Location: $pdfFile" -ForegroundColor Cyan
        
        # Open PDF if possible
        if (Get-Command start -ErrorAction SilentlyContinue) {
            Write-Host ""
            Write-Host "Opening PDF..." -ForegroundColor Yellow
            Start-Process $pdfFile
        }
    } else {
        Write-Host "ERROR: PDF conversion failed." -ForegroundColor Red
        Write-Host "Exit code: $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

