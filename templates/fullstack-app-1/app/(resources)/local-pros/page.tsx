export const metadata = {
  title: 'Local Pros | Icon Dumpsters',
  description: 'Experienced local drivers who know neighborhood regulations and placement best practices.',

  alternates: { canonical: 'https://icondumpsters.com/local-pros' }};

export default function LocalPros() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Local Pros</h1>
      <p className="text-lg text-gray-700 mb-6">Our team knows local routes, HOAs, and city rules — helping you place the dumpster right the first time.</p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Friendly, reliable drivers</li>
        <li>Permit guidance for street placement</li>
        <li>Driveway protection when appropriate</li>
      </ul>
    </div>
  );
}


