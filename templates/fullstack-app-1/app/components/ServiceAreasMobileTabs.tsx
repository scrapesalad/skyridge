'use client';

import { useState } from 'react';

export default function ServiceAreasMobileTabs() {
  const [activeTab, setActiveTab] = useState('popular');

  const serviceAreas = {
    popular: {
      title: 'Popular Cities',
      cities: [
        { name: 'Salt Lake City', url: '/dumpster-rental-salt-lake-city-ut' },
        { name: 'West Jordan', url: '/dumpster-rental-west-jordan-ut' },
        { name: 'Murray', url: '/dumpster-rental-murray-ut' },
        { name: 'Sandy', url: '/dumpster-rental-sandy-ut' },
        { name: 'Draper', url: '/dumpster-rental-draper-ut' },
        { name: 'Lehi', url: '/dumpster-rental-lehi-ut' },
        { name: 'Orem', url: '/dumpster-rental-orem-ut' },
        { name: 'Provo', url: '/dumpster-rental-provo-ut' },
        { name: 'Ogden', url: '/dumpster-rental-ogden-ut' },
        { name: 'Layton', url: '/dumpster-rental-layton-ut' }
      ]
    },
    saltlake: {
      title: 'Salt Lake Area',
      cities: [
        { name: 'Salt Lake City', url: '/dumpster-rental-salt-lake-city-ut' },
        { name: 'Murray', url: '/dumpster-rental-murray-ut' },
        { name: 'Sandy', url: '/dumpster-rental-sandy-ut' },
        { name: 'West Jordan', url: '/dumpster-rental-west-jordan-ut' },
        { name: 'South Jordan', url: '/dumpster-rental-south-jordan-ut' },
        { name: 'Draper', url: '/dumpster-rental-draper-ut' },
        { name: 'Millcreek', url: '/dumpster-rental-millcreek-ut' },
        { name: 'Holladay', url: '/dumpster-rental-holladay-ut' },
        { name: 'Cottonwood Heights', url: '/dumpster-rental-cottonwood-heights-ut' },
        { name: 'Midvale', url: '/dumpster-rental-midvale-ut' },
        { name: 'Taylorsville', url: '/dumpster-rental-taylorsville-ut' },
        { name: 'Kearns', url: '/dumpster-rental-kearns-ut' },
        { name: 'Magna', url: '/dumpster-rental-magna-ut' },
        { name: 'South Salt Lake', url: '/dumpster-rental-south-salt-lake-ut' },
        { name: 'Sugar House', url: '/dumpster-rental-sugar-house-ut' },
        { name: 'Downtown Salt Lake', url: '/dumpster-rental-downtown-salt-lake-ut' },
        { name: 'Fairpark', url: '/dumpster-rental-fairpark-ut' },
        { name: 'Poplar Grove', url: '/dumpster-rental-poplar-grove-ut' },
        { name: 'Glendale', url: '/dumpster-rental-glendale-ut' },
        { name: 'North Salt Lake', url: '/dumpster-rental-north-salt-lake-ut' },
        { name: 'Woods Cross', url: '/dumpster-rental-woods-cross-ut' }
      ]
    },
    utah: {
      title: 'Utah County',
      cities: [
        { name: 'Lehi', url: '/dumpster-rental-lehi-ut' },
        { name: 'Orem', url: '/dumpster-rental-orem-ut' },
        { name: 'Provo', url: '/dumpster-rental-provo-ut' },
        { name: 'Riverton', url: '/dumpster-rental-riverton-ut' },
        { name: 'Herriman', url: '/dumpster-rental-herriman-ut' },
        { name: 'Saratoga Springs', url: '/dumpster-rental-saratoga-springs-ut' },
        { name: 'Eagle Mountain', url: '/dumpster-rental-eagle-mountain-ut' },
        { name: 'Pleasant Grove', url: '/dumpster-rental-pleasant-grove-ut' },
        { name: 'American Fork', url: '/dumpster-rental-american-fork-ut' },
        { name: 'Bluffdale', url: '/dumpster-rental-bluffdale-ut' }
      ]
    },
    davis: {
      title: 'Davis County',
      cities: [
        { name: 'Ogden', url: '/dumpster-rental-ogden-ut' },
        { name: 'Layton', url: '/dumpster-rental-layton-ut' },
        { name: 'Clearfield', url: '/dumpster-rental-clearfield-ut' },
        { name: 'Roy', url: '/dumpster-rental-roy-ut' },
        { name: 'Syracuse', url: '/dumpster-rental-syracuse-ut' },
        { name: 'Kaysville', url: '/dumpster-rental-kaysville-ut' },
        { name: 'Farmington', url: '/dumpster-rental-farmington-ut' },
        { name: 'Centerville', url: '/dumpster-rental-centerville-ut' },
        { name: 'Bountiful', url: '/dumpster-rental-bountiful-ut' }
      ]
    },
    other: {
      title: 'Other Areas',
      cities: [
        { name: 'Park City', url: '/dumpster-rental-park-city-ut' },
        { name: 'Tooele', url: '/dumpster-rental-tooele-ut' }
      ]
    }
  };

  const tabs = [
    { id: 'popular', label: 'Popular', count: serviceAreas.popular.cities.length },
    { id: 'saltlake', label: 'Salt Lake', count: serviceAreas.saltlake.cities.length },
    { id: 'utah', label: 'Utah County', count: serviceAreas.utah.cities.length },
    { id: 'davis', label: 'Davis County', count: serviceAreas.davis.cities.length },
    { id: 'other', label: 'Other', count: serviceAreas.other.cities.length }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Tab Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-[#0d9488] border-b-2 border-[#0d9488] bg-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span className="block">{tab.label}</span>
              <span className="text-xs text-gray-500 ml-1">({tab.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-2">
          {serviceAreas[activeTab as keyof typeof serviceAreas].cities.map((city, index) => (
            <a
              key={index}
              href={city.url}
              className="block p-3 bg-gray-50 rounded-lg hover:bg-[#0d9488] hover:text-white transition-colors duration-200 text-center"
            >
              <span className="text-sm font-medium">{city.name}</span>
            </a>
          ))}
        </div>
        
        {/* Show All Cities Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => setActiveTab('all')}
            className="text-[#0d9488] text-sm font-medium hover:text-teal-700 transition-colors"
          >
            View All Cities →
          </button>
        </div>
      </div>
    </div>
  );
}
