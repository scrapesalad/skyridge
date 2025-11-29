# SEO Verification Script
# Checks all HTML pages for proper SEO elements

Write-Host "=== SEO Verification ===" -ForegroundColor Cyan
Write-Host ""

# Get all HTML files
$htmlFiles = Get-ChildItem -Path . -Include *.html -Recurse -File | Where-Object { 
    $_.FullName -notmatch '\\node_modules\\' 
}

$totalFiles = $htmlFiles.Count
$issuesFound = 0
$filesWithIssues = @()

foreach ($file in $htmlFiles) {
    $relativePath = $file.FullName.Replace((Get-Location).Path, "").TrimStart('\')
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $fileIssues = @()
    
    # Check for canonical URL
    if ($content -notmatch '<link rel="canonical"') {
        $fileIssues += "Missing canonical URL"
    }
    # Check if canonical uses placeholder
    elseif ($content -match '<link rel="canonical" href="https://(pondauthority|pondcleanup|yoursite|yourdomain)\.com') {
        $fileIssues += "Canonical URL contains hardcoded domain - should use placeholder"
    }
    
    # Check for meta title
    if ($content -notmatch '<title>') {
        $fileIssues += "Missing title tag"
    }
    
    # Check for meta description
    if ($content -notmatch '<meta name="description"') {
        $fileIssues += "Missing meta description"
    }
    
    # Check for viewport meta
    if ($content -notmatch '<meta name="viewport"') {
        $fileIssues += "Missing viewport meta tag"
    }
    
    # Check for Google Analytics
    if ($content -notmatch 'gtag\(') {
        $fileIssues += "Missing Google Analytics"
    }
    
    # Check for favicon
    if ($content -notmatch 'favicon') {
        $fileIssues += "Missing favicon reference"
    }
    
    # Check for proper HTML lang attribute
    if ($content -notmatch '<html lang="en"') {
        $fileIssues += "Missing or incorrect HTML lang attribute"
    }
    
    if ($fileIssues.Count -gt 0) {
        $issuesFound += $fileIssues.Count
        $filesWithIssues += $relativePath
        Write-Host "❌ $relativePath" -ForegroundColor Red
        foreach ($issue in $fileIssues) {
            Write-Host "   - $issue" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✅ $relativePath" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "=== Summary ===" -ForegroundColor Cyan
Write-Host "Total HTML files checked: $totalFiles"
Write-Host "Files with issues: $($filesWithIssues.Count)" -ForegroundColor $(if ($filesWithIssues.Count -eq 0) { "Green" } else { "Yellow" })
Write-Host "Total issues found: $issuesFound" -ForegroundColor $(if ($issuesFound -eq 0) { "Green" } else { "Yellow" })

if ($issuesFound -eq 0) {
    Write-Host ""
    Write-Host "🎉 All SEO checks passed!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "⚠️  Please fix the issues listed above." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Sitemap check:" -ForegroundColor Cyan
if (Test-Path "sitemap.xml") {
    $sitemap = Get-Content "sitemap.xml" -Raw
    $urlCount = ([regex]::Matches($sitemap, "<loc>")).Count
    Write-Host "✅ sitemap.xml found with $urlCount URLs" -ForegroundColor Green
    
    if ($sitemap -match '(pondauthority|pondcleanup|yoursite|yourdomain)\.com') {
        Write-Host "❌ Sitemap contains hardcoded domain references" -ForegroundColor Red
    } else {
        Write-Host "✅ All sitemap URLs use placeholder domain" -ForegroundColor Green
    }
} else {
    Write-Host "❌ sitemap.xml not found" -ForegroundColor Red
}

Write-Host ""
Write-Host "Robots.txt check:" -ForegroundColor Cyan
if (Test-Path "robots.txt") {
    $robots = Get-Content "robots.txt" -Raw
    Write-Host "✅ robots.txt found" -ForegroundColor Green
    
    if ($robots -match '(pondauthority|pondcleanup|yoursite|yourdomain)\.com') {
        Write-Host "❌ robots.txt contains hardcoded domain references" -ForegroundColor Red
    } else {
        Write-Host "✅ robots.txt uses placeholder domain" -ForegroundColor Green
    }
} else {
    Write-Host "❌ robots.txt not found" -ForegroundColor Red
}

Write-Host ""
