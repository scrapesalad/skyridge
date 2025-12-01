export default function ThreeStepProcess() {
  const steps = [
    { title: 'Book Your Dumpster', desc: 'Choose size, tell us your dates, and confirm delivery details.' },
    { title: 'Load Up', desc: 'We place it where you want. Fill it with approved materials.' },
    { title: 'Final Invoice', desc: 'We pick up, weigh, and bill actual tonnage at $55/ton.' },
  ];
  return (
    <section className="bg-white rounded-2xl shadow-md border border-gray-100 p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">3 Easy Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center p-6 rounded-xl border border-gray-100">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#0d9488] text-white flex items-center justify-center font-bold">{i+1}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


