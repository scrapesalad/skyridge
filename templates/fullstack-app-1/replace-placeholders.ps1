# Script to replace hardcoded content with placeholders
# Run this after copying files to replace brand-specific content

$files = Get-ChildItem -Path "." -Recurse -Include *.tsx,*.ts,*.jsx,*.js -Exclude node_modules,*.next

Write-Host "Replacing hardcoded content with placeholders..."

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    if ($content) {
        $original = $content
        
        # Replace common brand references (be careful with these)
        # Note: This is a template - you may want to review replacements manually
        
        $content = $content -replace 'https://icondumpsters\.com', '{{siteUrl}}'
        $content = $content -replace 'icondumpsters\.com', '{{siteUrl}}'
        $content = $content -replace 'Icon Dumpsters', '{{siteTitle}}'
        $content = $content -replace '\(801\) 918-6000', '{{phoneNumber}}'
        $content = $content -replace '801-918-6000', '{{phoneNumber}}'
        $content = $content -replace 'tel:\+18019186000', '{{phoneLink}}'
        $content = $content -replace 'icondumpsters@gmail\.com', '{{email}}'
        
        if ($content -ne $original) {
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "Updated: $($file.FullName)"
        }
    }
}

Write-Host "Placeholder replacement complete!"

