// Contractor data - Replace with your actual contractor/service provider data
const contractors = [
  {
    id: 'example-provider-1',
    name: 'PUT PROVIDER NAME HERE',
    location: 'PUT CITY, ST',
    city: 'PUT CITY NAME',
    state: 'PUT STATE ABBR',
    zip: ['PUT ZIP CODE'],
    distance: 'PUT DISTANCE HERE',
    rating: 4.9,
    reviews: 32,
    description: 'PUT PROVIDER DESCRIPTION HERE - Specializing in PUT PRIMARY SERVICE HERE, maintenance, and new installations.',
    services: ['PUT SERVICE 1 HERE', 'PUT SERVICE 2 HERE', 'PUT SERVICE 3 HERE'],
    url: 'pages/examples/example-provider-1.html'
  },
  {
    id: 'example-provider-2',
    name: 'PUT PROVIDER NAME HERE',
    location: 'PUT CITY, ST',
    city: 'PUT CITY NAME',
    state: 'PUT STATE ABBR',
    zip: ['PUT ZIP CODE'],
    distance: 'PUT DISTANCE HERE',
    rating: 4.7,
    reviews: 18,
    description: 'PUT PROVIDER DESCRIPTION HERE - Expert in PUT SERVICE TYPE HERE. Specializes in PUT SPECIALTY HERE.',
    services: ['PUT SERVICE 1 HERE', 'PUT SERVICE 2 HERE', 'PUT SERVICE 3 HERE'],
    url: 'pages/examples/example-provider-2.html'
  },
  {
    id: 'example-provider-3',
    name: 'PUT PROVIDER NAME HERE',
    location: 'PUT CITY, ST',
    city: 'PUT CITY NAME',
    state: 'PUT STATE ABBR',
    zip: ['PUT ZIP CODE'],
    distance: 'PUT DISTANCE HERE',
    rating: 4.8,
    reviews: 41,
    description: 'PUT PROVIDER DESCRIPTION HERE - Full-service PUT SERVICE TYPE HERE company. From design to installation to ongoing maintenance.',
    services: ['PUT SERVICE 1 HERE', 'PUT SERVICE 2 HERE', 'PUT SERVICE 3 HERE'],
    url: 'pages/examples/example-provider-3.html'
  }
];

// Get URL parameters
function getUrlParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    location: params.get('location') || '',
    service: params.get('service') || ''
  };
}

// Normalize location string for matching
function normalizeLocation(location) {
  return location.toLowerCase().trim();
}

// Check if location matches
function locationMatches(searchLocation, contractor) {
  if (!searchLocation) return true;
  
  const normalized = normalizeLocation(searchLocation);
  
  // Check city
  if (normalized.includes(contractor.city)) return true;
  
  // Check state
  if (normalized.includes(contractor.state)) return true;
  
  // Check full location
  if (normalized.includes(normalizeLocation(contractor.location))) return true;
  
  // Check ZIP codes
  if (contractor.zip && contractor.zip.some(zip => normalized.includes(zip))) return true;
  
  // Check common variations
  if (normalized.includes('salt lake') && contractor.city.includes('salt lake')) return true;
  if (normalized.includes('slc') && contractor.city.includes('salt lake')) return true;
  
  return false;
}

// Filter contractors based on search
function filterContractors(location, service) {
  return contractors.filter(contractor => {
    const locationMatch = !location || locationMatches(location, contractor);
    const serviceMatch = !service || contractor.services.some(s => 
      s.toLowerCase().includes(service.toLowerCase()) || 
      service.toLowerCase().includes(s.toLowerCase())
    );
    return locationMatch && serviceMatch;
  });
}

// Generate star rating HTML
function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  let stars = '★'.repeat(fullStars);
  if (hasHalfStar) stars += '☆';
  stars += '☆'.repeat(emptyStars);
  
  return stars;
}

// Render contractor card
function renderContractorCard(contractor) {
  return `
    <article class="contractor-card">
      <div class="card-main">
        <h3><a href="${contractor.url}">${contractor.name}</a></h3>
        <p class="card-location">${contractor.location} • ${contractor.distance}</p>
        <p class="card-rating">${getStarRating(contractor.rating)} ${contractor.rating} (${contractor.reviews} reviews)</p>
        <p class="card-description">${contractor.description}</p>
        <p class="card-services">${contractor.services.join(' • ')}</p>
        ${contractor.website ? `<p class="card-website"><a href="${contractor.website}" target="_blank" rel="noopener">${contractor.website}</a></p>` : ''}
      </div>
      <div class="card-actions">
        <a href="${contractor.url}" class="btn btn-secondary">View Profile</a>
        <button class="btn btn-primary">Request Quote</button>
      </div>
    </article>
  `;
}

// Update search results
function updateSearchResults() {
  const params = getUrlParams();
  const location = params.location;
  const service = params.service;
  
  // Update search form values
  if (location) {
    const locationInput = document.querySelector('input[name="location"]');
    if (locationInput) locationInput.value = location;
  }
  
  if (service) {
    const serviceSelect = document.querySelector('select[name="service"]');
    if (serviceSelect) serviceSelect.value = service;
  }
  
  // Filter contractors
  const filtered = filterContractors(location, service);
  
  // Sort by rating (highest first), then by reviews
  filtered.sort((a, b) => {
    if (b.rating !== a.rating) return b.rating - a.rating;
    return b.reviews - a.reviews;
  });
  
  // Update results header
  const resultsHeader = document.querySelector('.results-header h2');
  const resultsCount = document.querySelector('.results-header p strong');
  
  if (resultsHeader) {
    const locationText = location || 'your area';
    resultsHeader.innerHTML = `Contractors near <span class="results-location">${locationText}</span>`;
  }
  
  if (resultsCount) {
    resultsCount.textContent = filtered.length;
  }
  
  // Update results list
  const resultsList = document.querySelector('.results-list');
  if (resultsList) {
    if (filtered.length === 0) {
      resultsList.innerHTML = `
        <div style="text-align: center; padding: var(--spacing-xl);">
          <h3>No contractors found</h3>
          <p>Try searching with a different location or service type.</p>
        </div>
      `;
    } else {
      resultsList.innerHTML = filtered.map(renderContractorCard).join('');
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateSearchResults();
});

// Handle form submission from homepage
if (window.location.pathname.includes('find-a-contractor.html')) {
  const form = document.querySelector('.directory-search');
  if (form) {
    form.addEventListener('submit', function(e) {
      // Form will submit naturally, but we can add validation here if needed
    });
  }
}
