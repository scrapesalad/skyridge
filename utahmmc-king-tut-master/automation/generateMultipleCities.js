const { generateCityPage } = require('./generateCityPage');

const utahCities = [
  'Salt Lake City',
  'West Jordan',
  'Provo',
  'Orem', 
  'Sandy',
  'West Valley City',
  'Ogden',
  'Layton',
  'Taylorsville',
  'South Jordan',
  'Lehi',
  'Murray',
  'Draper',
  'Riverton',
  'Herriman',
  'Bountiful',
  'Clearfield',
  'Midvale',
  'American Fork',
  'Kaysville',
  'Pleasant Grove',
  'Roy',
  'Centerville',
  'Farmington',
  'North Salt Lake',
  'Woods Cross',
  'Syracuse',
  'Clinton',
  'West Point',
  'Hooper',
  'Riverdale'
];

function generateAllCities() {
  console.log('🚀 Generating city pages for Utah cities...\n');
  
  utahCities.forEach((city, index) => {
    console.log(`${index + 1}. Generating page for ${city}...`);
    generateCityPage(city, 'UT');
  });
  
  console.log(`\n✅ Successfully generated ${utahCities.length} city pages!`);
  console.log('\n📁 Pages created in: app/dumpster-rental-[city-name]-ut/page.tsx');
  console.log('\n🌐 Each page will have:');
  console.log('   • Randomized content variations');
  console.log('   • Different background images');
  console.log('   • Unique service feature lists');
  console.log('   • City-specific metadata');
  console.log('   • SEO-optimized URLs');
  console.log('   • Historical and cultural context');
}

if (require.main === module) {
  generateAllCities();
}

module.exports = { generateAllCities, utahCities };
