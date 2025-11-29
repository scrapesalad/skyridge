# PowerShell script to create city pages
$template = Get-Content "pages/cities/denver-co.html" -Raw

$cities = @(
    @{name="Phoenix"; state="AZ"; slug="phoenix-az"; region="Desert Southwest"},
    @{name="Austin"; state="TX"; slug="austin-tx"; region="Texas Hill Country"},
    @{name="Atlanta"; state="GA"; slug="atlanta-ga"; region="Southeast"},
    @{name="Charlotte"; state="NC"; slug="charlotte-nc"; region="Carolina"},
    @{name="Nashville"; state="TN"; slug="nashville-tn"; region="Tennessee"},
    @{name="Raleigh"; state="NC"; slug="raleigh-nc"; region="Research Triangle"},
    @{name="Portland"; state="OR"; slug="portland-or"; region="Pacific Northwest"},
    @{name="Seattle"; state="WA"; slug="seattle-wa"; region="Washington"},
    @{name="Minneapolis"; state="MN"; slug="minneapolis-mn"; region="Midwest"},
    @{name="Chicago"; state="IL"; slug="chicago-il"; region="Illinois"},
    @{name="Dallas"; state="TX"; slug="dallas-tx"; region="North Texas"},
    @{name="Houston"; state="TX"; slug="houston-tx"; region="Gulf Coast"},
    @{name="San Antonio"; state="TX"; slug="san-antonio-tx"; region="South Texas"},
    @{name="Miami"; state="FL"; slug="miami-fl"; region="South Florida"},
    @{name="Tampa"; state="FL"; slug="tampa-fl"; region="Gulf Coast Florida"},
    @{name="Orlando"; state="FL"; slug="orlando-fl"; region="Central Florida"},
    @{name="Jacksonville"; state="FL"; slug="jacksonville-fl"; region="Northeast Florida"},
    @{name="Las Vegas"; state="NV"; slug="las-vegas-nv"; region="Desert Southwest"},
    @{name="San Diego"; state="CA"; slug="san-diego-ca"; region="Southern California"},
    @{name="Los Angeles"; state="CA"; slug="los-angeles-ca"; region="LA Metro"},
    @{name="Sacramento"; state="CA"; slug="sacramento-ca"; region="Central California"},
    @{name="San Francisco"; state="CA"; slug="san-francisco-ca"; region="Bay Area"},
    @{name="Boston"; state="MA"; slug="boston-ma"; region="New England"},
    @{name="New York"; state="NY"; slug="new-york-ny"; region="NYC Metro"},
    @{name="Philadelphia"; state="PA"; slug="philadelphia-pa"; region="Pennsylvania"},
    @{name="Washington"; state="DC"; slug="washington-dc"; region="DC Metro"},
    @{name="Baltimore"; state="MD"; slug="baltimore-md"; region="Maryland"},
    @{name="Columbus"; state="OH"; slug="columbus-oh"; region="Ohio"},
    @{name="Indianapolis"; state="IN"; slug="indianapolis-in"; region="Indiana"},
    @{name="Detroit"; state="MI"; slug="detroit-mi"; region="Michigan"},
    @{name="Milwaukee"; state="WI"; slug="milwaukee-wi"; region="Wisconsin"},
    @{name="Kansas City"; state="MO"; slug="kansas-city-mo"; region="Missouri"},
    @{name="St. Louis"; state="MO"; slug="st-louis-mo"; region="Missouri"},
    @{name="Oklahoma City"; state="OK"; slug="oklahoma-city-ok"; region="Oklahoma"},
    @{name="Tulsa"; state="OK"; slug="tulsa-ok"; region="Oklahoma"},
    @{name="Memphis"; state="TN"; slug="memphis-tn"; region="Tennessee"},
    @{name="Louisville"; state="KY"; slug="louisville-ky"; region="Kentucky"},
    @{name="New Orleans"; state="LA"; slug="new-orleans-la"; region="Louisiana"},
    @{name="Fort Worth"; state="TX"; slug="fort-worth-tx"; region="North Texas"},
    @{name="Arlington"; state="TX"; slug="arlington-tx"; region="Dallas-Fort Worth"},
    @{name="Mesa"; state="AZ"; slug="mesa-az"; region="Phoenix Metro"},
    @{name="Colorado Springs"; state="CO"; slug="colorado-springs-co"; region="Mountain Region"},
    @{name="Omaha"; state="NE"; slug="omaha-ne"; region="Nebraska"},
    @{name="Oakland"; state="CA"; slug="oakland-ca"; region="Bay Area"},
    @{name="Cleveland"; state="OH"; slug="cleveland-oh"; region="Ohio"},
    @{name="Wichita"; state="KS"; slug="wichita-ks"; region="Kansas"},
    @{name="Arlington"; state="VA"; slug="arlington-va"; region="DC Metro"},
    @{name="Bakersfield"; state="CA"; slug="bakersfield-ca"; region="Central California"},
    @{name="Aurora"; state="CO"; slug="aurora-co"; region="Denver Metro"},
    @{name="Anaheim"; state="CA"; slug="anaheim-ca"; region="Orange County"},
    @{name="Santa Ana"; state="CA"; slug="santa-ana-ca"; region="Orange County"},
    @{name="St. Paul"; state="MN"; slug="st-paul-mn"; region="Twin Cities"},
    @{name="Corpus Christi"; state="TX"; slug="corpus-christi-tx"; region="Gulf Coast Texas"},
    @{name="Riverside"; state="CA"; slug="riverside-ca"; region="Inland Empire"},
    @{name="Lexington"; state="KY"; slug="lexington-ky"; region="Kentucky"},
    @{name="Pittsburgh"; state="PA"; slug="pittsburgh-pa"; region="Western Pennsylvania"},
    @{name="Anchorage"; state="AK"; slug="anchorage-ak"; region="Alaska"},
    @{name="Stockton"; state="CA"; slug="stockton-ca"; region="Central Valley"},
    @{name="Cincinnati"; state="OH"; slug="cincinnati-oh"; region="Ohio"},
    @{name="Toledo"; state="OH"; slug="toledo-oh"; region="Northwest Ohio"},
    @{name="Greensboro"; state="NC"; slug="greensboro-nc"; region="North Carolina"},
    @{name="Plano"; state="TX"; slug="plano-tx"; region="Dallas Metro"},
    @{name="Lincoln"; state="NE"; slug="lincoln-ne"; region="Nebraska"},
    @{name="Henderson"; state="NV"; slug="henderson-nv"; region="Las Vegas Metro"},
    @{name="Buffalo"; state="NY"; slug="buffalo-ny"; region="Western New York"},
    @{name="Jersey City"; state="NJ"; slug="jersey-city-nj"; region="New Jersey"},
    @{name="Chula Vista"; state="CA"; slug="chula-vista-ca"; region="San Diego Metro"},
    @{name="Norfolk"; state="VA"; slug="norfolk-va"; region="Hampton Roads"}
)

foreach ($city in $cities) {
    $cityNameLower = $city.name.ToLower().Replace(" ", "").Replace(".", "")
    $content = $template -replace "Denver, CO", "$($city.name), $($city.state)" `
                         -replace "denver-co", $city.slug `
                         -replace "Denver", $city.name `
                         -replace "Colorado", $city.state `
                         -replace "Front Range", $city.region `
                         -replace "Rocky Mountain", $city.region `
                         -replace "denver", $cityNameLower `
                         -replace "Denver", $city.name
    
    $filePath = "pages/cities/$($city.slug).html"
    $content | Out-File -FilePath $filePath -Encoding UTF8
    Write-Host "Created: $filePath"
}

Write-Host "`nDone! Created $($cities.Count) city pages."

