export const metadata = {
  title: 'Responsible Disposal | Icon Dumpsters',
  description: 'We recycle whenever possible and follow local facility guidelines for safe, responsible disposal.',

  alternates: { canonical: 'https://icondumpsters.com/responsible-disposal' }};

export default function ResponsibleDisposal() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Responsible Disposal</h1>
      <p className="text-lg text-gray-700 mb-6">We prioritize recycling and proper handling of materials in accordance with Utah facilities and guidelines.</p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Clean concrete/asphalt recycling when available</li>
        <li>Green waste to seasonal yard sites</li>
        <li>Transparent receipts and scale tickets</li>
      </ul>
    </div>
  );
}


