"use client";

import Link from "next/link";
import FAQSchema from "../../components/FAQSchema";
import { useMemo, useState } from "react";

export default function LocationsClient() {
  const utahCities = {
    "Salt Lake Valley": [
      { name: "Salt Lake City", url: "/dumpster-rental-salt-lake-city-ut", guideUrl: "/salt-lake-city-dumpster-rental-guide-2025" },
      { name: "West Valley City", url: "/dumpster-rental-west-valley-city-ut", guideUrl: "/west-valley-city-dumpster-rental-guide-2025" },
      { name: "Sandy", url: "/dumpster-rental-sandy-ut", guideUrl: "/sandy-dumpster-rental-guide-2025" },
      { name: "West Jordan", url: "/dumpster-rental-west-jordan-ut", guideUrl: "/west-jordan-dumpster-rental-guide-2025" },
      { name: "Murray", url: "/dumpster-rental-murray-ut", guideUrl: "/murray-dumpster-rental-guide-2025" },
      { name: "Taylorsville", url: "/dumpster-rental-taylorsville-ut", guideUrl: "/taylorsville-dumpster-rental-guide-2025" },
      { name: "South Jordan", url: "/dumpster-rental-south-jordan-ut", guideUrl: "/south-jordan-dumpster-rental-guide-2025" },
      { name: "Riverton", url: "/dumpster-rental-riverton-ut", guideUrl: "/riverton-dumpster-rental-guide-2025" },
      { name: "Draper", url: "/dumpster-rental-draper-ut", guideUrl: "/draper-dumpster-rental-guide-2025" },
      { name: "Midvale", url: "/dumpster-rental-midvale-ut", guideUrl: "/midvale-dumpster-rental-guide-2025" },
      { name: "Cottonwood Heights", url: "/dumpster-rental-cottonwood-heights-ut", guideUrl: "/cottonwood-heights-dumpster-rental-guide-2025" },
      { name: "Holladay", url: "/dumpster-rental-holladay-ut", guideUrl: "/holladay-dumpster-rental-guide-2025" },
      { name: "South Salt Lake", url: "/dumpster-rental-south-salt-lake-ut", guideUrl: "/south-salt-lake-dumpster-rental-guide-2025" },
      { name: "Sugar House", url: "/dumpster-rental-sugar-house-ut", guideUrl: "/sugar-house-dumpster-rental-guide-2025" },
      { name: "Millcreek", url: "/dumpster-rental-millcreek-ut", guideUrl: "/millcreek-dumpster-rental-guide-2025" },
      { name: "Kearns", url: "/dumpster-rental-kearns-ut", guideUrl: "/kearns-dumpster-rental-guide-2025" },
      { name: "Magna", url: "/dumpster-rental-magna-ut", guideUrl: "/magna-dumpster-rental-guide-2025" },
      { name: "Fairpark", url: "/dumpster-rental-fairpark-ut", guideUrl: "/fairpark-dumpster-rental-guide-2025" },
      { name: "Downtown Salt Lake", url: "/dumpster-rental-downtown-salt-lake-ut", guideUrl: "/downtown-salt-lake-dumpster-rental-guide-2025" },
      { name: "Poplar Grove", url: "/dumpster-rental-poplar-grove-ut", guideUrl: "/poplar-grove-dumpster-rental-guide-2025" },
      { name: "Glendale", url: "/dumpster-rental-glendale-ut", guideUrl: "/glendale-dumpster-rental-guide-2025" },
      { name: "Rose Park", url: "/dumpster-rental-rose-park-ut" },
      { name: "Granger", url: "/dumpster-rental-granger-ut" },
      { name: "Emigration Canyon", url: "/dumpster-rental-emigration-canyon-ut" },
      { name: "White City", url: "/dumpster-rental-white-city-ut" },
      { name: "Brighton", url: "/dumpster-rental-brighton-ut" },
      { name: "Copperton", url: "/dumpster-rental-copperton-ut" },
      { name: "Alta", url: "/dumpster-rental-alta-ut" },
      { name: "Woodland Hills", url: "/dumpster-rental-woodland-hills-ut" }
    ],
    "Utah County": [
      { name: "Provo", url: "/dumpster-rental-provo-ut", guideUrl: "/provo-dumpster-rental-guide-2025" },
      { name: "Orem", url: "/dumpster-rental-orem-ut", guideUrl: "/orem-dumpster-rental-guide-2025" },
      { name: "Lehi", url: "/dumpster-rental-lehi-ut", guideUrl: "/lehi-dumpster-rental-guide-2025" },
      { name: "American Fork", url: "/dumpster-rental-american-fork-ut", guideUrl: "/american-fork-dumpster-rental-guide-2025" },
      { name: "Pleasant Grove", url: "/dumpster-rental-pleasant-grove-ut", guideUrl: "/pleasant-grove-dumpster-rental-guide-2025" },
      { name: "Eagle Mountain", url: "/dumpster-rental-eagle-mountain-ut", guideUrl: "/eagle-mountain-dumpster-rental-guide-2025" },
      { name: "Saratoga Springs", url: "/dumpster-rental-saratoga-springs-ut", guideUrl: "/saratoga-springs-dumpster-rental-guide-2025" },
      { name: "Bluffdale", url: "/dumpster-rental-bluffdale-ut", guideUrl: "/bluffdale-dumpster-rental-guide-2025" },
      { name: "Herriman", url: "/dumpster-rental-herriman-ut", guideUrl: "/herriman-dumpster-rental-guide-2025" },
      { name: "Vineyard", url: "/dumpster-rental-vineyard-ut" },
      { name: "Santaquin", url: "/dumpster-rental-santaquin-ut" },
      { name: "Lindon", url: "/dumpster-rental-lindon-ut" },
      { name: "Springville", url: "/dumpster-rental-springville-ut" },
      { name: "Spanish Fork", url: "/dumpster-rental-spanish-fork-ut" },
      { name: "Cedar Hills", url: "/dumpster-rental-cedar-hills-ut" },
      { name: "Highland", url: "/dumpster-rental-highland-ut" },
      { name: "Payson", url: "/dumpster-rental-payson-ut" },
      { name: "Mapleton", url: "/dumpster-rental-mapleton-ut" }
    ],
    "Davis County": [
      { name: "Layton", url: "/dumpster-rental-layton-ut", guideUrl: "/layton-dumpster-rental-guide-2025" },
      { name: "Bountiful", url: "/dumpster-rental-bountiful-ut", guideUrl: "/bountiful-dumpster-rental-guide-2025" },
      { name: "Clearfield", url: "/dumpster-rental-clearfield-ut", guideUrl: "/clearfield-dumpster-rental-guide-2025" },
      { name: "Centerville", url: "/dumpster-rental-centerville-ut", guideUrl: "/centerville-dumpster-rental-guide-2025" },
      { name: "Kaysville", url: "/dumpster-rental-kaysville-ut", guideUrl: "/kaysville-dumpster-rental-guide-2025" },
      { name: "Syracuse", url: "/dumpster-rental-syracuse-ut", guideUrl: "/syracuse-dumpster-rental-guide-2025" },
      { name: "North Salt Lake", url: "/dumpster-rental-north-salt-lake-ut", guideUrl: "/north-salt-lake-dumpster-rental-guide-2025" },
      { name: "Farmington", url: "/dumpster-rental-farmington-ut", guideUrl: "/farmington-dumpster-rental-guide-2025" },
      { name: "Woods Cross", url: "/dumpster-rental-woods-cross-ut", guideUrl: "/woods-cross-dumpster-rental-guide-2025" },
      { name: "Roy", url: "/dumpster-rental-roy-ut", guideUrl: "/roy-dumpster-rental-guide-2025" },
      { name: "West Bountiful", url: "/dumpster-rental-west-bountiful-ut" },
      { name: "Clinton", url: "/dumpster-rental-clinton-ut" }
    ],
    "Weber County": [
      { name: "Ogden", url: "/dumpster-rental-ogden-ut", guideUrl: "/ogden-dumpster-rental-guide-2025" },
      { name: "West Haven", url: "/dumpster-rental-west-haven-ut" }
    ],
    "Summit County": [
      { name: "Park City", url: "/dumpster-rental-park-city-ut", guideUrl: "/park-city-dumpster-rental-guide-2025" }
    ],
    "Tooele County": [
      { name: "Tooele", url: "/dumpster-rental-tooele-ut", guideUrl: "/tooel-dumpster-rental-guide-2025" }
    ],
    "Box Elder County": [
      { name: "Brigham City", url: "/dumpster-rental-brigham-city-ut" }
    ],
    "Sevier County": [
      { name: "Richfield", url: "/dumpster-rental-richfield-ut" }
    ],
    "Grand County": [
      { name: "Moab", url: "/dumpster-rental-moab-ut" }
    ],
    "Washington County": [
      { name: "St. George", url: "/dumpster-rental-st-george-ut" }
    ],
    "Carbon County": [
      { name: "Price", url: "/dumpster-rental-price-ut" }
    ],
    "Juab County": [
      { name: "Nephi", url: "/dumpster-rental-nephi-ut" }
    ],
    "Wasatch County": [
      { name: "Heber City", url: "/dumpster-rental-heber-city-ut" }
    ],
    "Cache County": [
      { name: "Logan", url: "/dumpster-rental-logan-ut" }
    ],
    "Uintah County": [
      { name: "Vernal", url: "/dumpster-rental-vernal-ut" }
    ],
    "Iron County": [
      { name: "Cedar City", url: "/dumpster-rental-cedar-city-ut" }
    ],
    "Utah County (Additional)": [
      { name: "Genola", url: "/dumpster-rental-genola-ut" }
    ]
  };

  // Type for cities with optional guideUrl
  type CityWithOptionalGuide = {
    name: string;
    url: string;
    guideUrl?: string;
  };

  // Type for the cities object
  type UtahCitiesType = {
    [key: string]: CityWithOptionalGuide[];
  };

  const utahCitiesTyped: UtahCitiesType = utahCities;

  const [search, setSearch] = useState<string>("");
  const [callbackPhone, setCallbackPhone] = useState<string>("");
  const [callbackStatus, setCallbackStatus] = useState<'idle' | 'sent' | 'error'>("idle");

  const zipMatchedCityNames = useMemo(() => {
    return new Set<string>();
  }, [search]);

  const unknownZip = useMemo(() => {
    return false;
  }, [search]);

  async function submitZipCallback() {
    try {
      const z = search.trim();
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: callbackPhone,
          zipCode: z,
          source: 'locations-zip-callback',
          subject: `Callback request for ZIP ${z}`,
        }),
      });
      setCallbackStatus('sent');
      setCallbackPhone('');
    } catch {
      setCallbackStatus('error');
    }
  }

  function cityMatches(name: string): boolean {
    const term = search.trim().toLowerCase();
    if (!term) return true;
    if (name.toLowerCase().includes(term)) return true;
    if (zipMatchedCityNames.has(name.toLowerCase())) return true;
    return false;
  }

  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <section className="bg-gradient-to-r from-[#0d9488] to-teal-700 rounded-2xl p-8 text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Your Location</h2>
          <p className="text-purple-100 mb-6">Search by city name or ZIP code to find dumpster rental services in your area.</p>
          
          <div className="max-w-md">
            <input
              type="text"
              placeholder="Enter city name or ZIP code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {unknownZip && (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-lg">
              <p className="font-semibold mb-2">We don't currently serve this ZIP code, but we're expanding!</p>
              <p className="text-sm mb-3">Enter your phone number and we'll notify you when we start serving your area.</p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Your phone number"
                  value={callbackPhone}
                  onChange={(e) => setCallbackPhone(e.target.value)}
                  className="flex-1 px-3 py-2 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button
                  onClick={submitZipCallback}
                  disabled={callbackStatus === 'sent' || !callbackPhone.trim()}
                  className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 disabled:opacity-50"
                >
                  {callbackStatus === 'sent' ? 'Submitted!' : 'Notify Me'}
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Cities by Region */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">Dumpster Rental Salt Lake City & Utah Locations</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Utah Dumpster Rental Locations</h2>
          
          {Object.entries(utahCitiesTyped).map(([region, cities]) => {
            const filteredCities = cities.filter(city => cityMatches(city.name));
            if (filteredCities.length === 0) return null;
            
            return (
              <div key={region} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">{region}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredCities.map((city) => (
                    <div key={city.name} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <Link href={city.url} className="block mb-3">
                        <h4 className="text-lg font-semibold text-[#0d9488] hover:text-teal-700 mb-2">
                          {city.name}
                        </h4>
                        <p className="text-gray-600 text-sm">Dumpster rental services in {city.name}</p>
                      </Link>
                      <div className="flex gap-2">
                        <Link 
                          href={city.url}
                          className="text-sm bg-[#0d9488] text-white px-3 py-1 rounded hover:bg-teal-700 transition-colors"
                        >
                          Get Quote
                        </Link>
                        <Link 
                          href="/dumpster-rental-guide-2025"
                          className="text-sm border border-[#0d9488] text-[#0d9488] px-3 py-1 rounded hover:bg-[#0d9488] hover:text-white transition-colors"
                        >
                          Guide
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Service Coverage */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Coverage Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Service Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Salt Lake Valley:</strong> Salt Lake City, West Valley City, Sandy, West Jordan, Murray</li>
                <li>• <strong>Utah County:</strong> Provo, Orem, Lehi, American Fork, Pleasant Grove</li>
                <li>• <strong>Davis County:</strong> Layton, Bountiful, Clearfield, Centerville, Kaysville</li>
                <li>• <strong>Weber County:</strong> Ogden and surrounding areas</li>
                <li>• <strong>Summit County:</strong> Park City and nearby communities</li>
                <li>• <strong>Tooele County:</strong> Tooele and surrounding areas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Features</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Same-Day Delivery:</strong> Available in most areas when ordered before 2 PM</li>
                <li>• <strong>Flexible Scheduling:</strong> Choose delivery and pickup times that work for you</li>
                <li>• <strong>Multiple Sizes:</strong> 10, 15, 20, and 30-yard dumpsters available</li>
                <li>• <strong>Transparent Pricing:</strong> No hidden fees, clear bundle pricing</li>
                <li>• <strong>Local Expertise:</strong> Knowledge of local regulations and permit requirements</li>
                <li>• <strong>Responsive Support:</strong> Quick response times for all service areas</li>
              </ul>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}


