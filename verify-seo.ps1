# Script to verify all pages have canonical URLs
$missingCanonical = @()
$pages = Get-ChildItem -Path "pages" -Recurse -Filter "*.html" | Where-Object { $_.FullName -notlike "*node_modules*" }

foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw
    if ($content -notmatch 'rel="canonical"') {
        $missingCanonical += $page.FullName
    }
}

if ($missingCanonical.Count -eq 0) {
    Write-Host "✅ All pages have canonical URLs!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Pages missing canonical URLs:" -ForegroundColor Yellow
    $missingCanonical | ForEach-Object { Write-Host "  - $_" }
}

# Check for pondauthority.com in canonical URLs
$wrongCanonical = @()
foreach ($page in $pages) {
    $content = Get-Content $page.FullName -Raw
    if ($content -match 'rel="canonical" href="([^"]+)"') {
        $canonical = $matches[1]
        if ($canonical -notlike "https://pondauthority.com*") {
            $wrongCanonical += "$($page.Name): $canonical"
        }
    }
}

if ($wrongCanonical.Count -eq 0) {
    Write-Host "✅ All canonical URLs point to pondauthority.com!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Canonical URLs not pointing to pondauthority.com:" -ForegroundColor Yellow
    $wrongCanonical | ForEach-Object { Write-Host "  - $_" }
}

Write-Host "`nTotal pages checked: $($pages.Count)" -ForegroundColor Cyan

