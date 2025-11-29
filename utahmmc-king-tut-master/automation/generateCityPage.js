const fs = require('fs');
const path = require('path');

function generateCityPage(cityName, stateCode) {
  const citySlug = cityName.toLowerCase().replace(/\s+/g, '-');
  const pageDir = path.join(__dirname, '..', 'app', `dumpster-rental-${citySlug}-ut`);
  const pageFile = path.join(pageDir, 'page.tsx');

  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const pageContent = `import { Metadata } from 'next'
import CityPageTemplate from '@/components/CityPageTemplate'
import { generateCityMetadata } from '@/lib/cityMetadata'

export const metadata: Metadata = generateCityMetadata('${cityName}', '${stateCode}')

export default function ${cityName.replace(/\s+/g, '')}Page() {
  return <CityPageTemplate city="${cityName}" state="${stateCode}" />
}
`;

  fs.writeFileSync(pageFile, pageContent);
  console.log(`✅ Created city page for ${cityName}, ${stateCode} at: ${pageFile}`);
}

// Example usage:
// node scripts/generateCityPage.js "Provo" "UT"
// node scripts/generateCityPage.js "Orem" "UT"
// node scripts/generateCityPage.js "Sandy" "UT"

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.log('Usage: node scripts/generateCityPage.js "City Name" "State Code"');
    console.log('Example: node scripts/generateCityPage.js "Provo" "UT"');
    process.exit(1);
  }

  const [cityName, stateCode] = args;
  generateCityPage(cityName, stateCode);
}

module.exports = { generateCityPage };
