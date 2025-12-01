export default function FeesAndSurcharges() {
  const items = [
    { label: 'Weight (post‑pickup)', value: '$55/ton' },
    { label: 'Mattress / Box Spring', value: '$25 each' },
    { label: 'Fridge / Freezer (drain freon)', value: '$25 each' },
    { label: 'Tires', value: '$25 each' },
  ];
  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees & Surcharges</h2>
      <p className="text-gray-600 mb-4 text-sm">Transparent pricing. No hidden fees. Extra charges apply only for specific items or overweight loads.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((i) => (
          <div key={i.label} className="flex items-center justify-between border rounded-lg p-4">
            <span className="text-gray-800 font-medium">{i.label}</span>
            <span className="text-gray-900 font-semibold">{i.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


