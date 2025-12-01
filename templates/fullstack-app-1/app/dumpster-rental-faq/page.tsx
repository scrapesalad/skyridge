import type { Metadata } from 'next';

const title = 'Dumpster Rental FAQ | Icon Dumpsters Answers For Utah Jobs';
const description =
  'Get detailed answers to the most common dumpster rental questions about sizing, pricing, debris rules, scheduling, and sustainability across Utah.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://icondumpsters.com/dumpster-rental-faq',
  },
  openGraph: {
    title,
    description,
    url: 'https://icondumpsters.com/dumpster-rental-faq',
    type: 'article',
    siteName: 'Icon Dumpsters',
    locale: 'en_US',
    images: [
      {
        url: 'https://icondumpsters.com/IconDumpsters_Logo_Vector_Pantone267DarkerPurple.png',
        width: 1200,
        height: 630,
        alt: 'Icon Dumpsters - Professional Dumpster Rental Services in Utah',
        type: 'image/png',
      },
    ],
  },
};

const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'How far in advance should I reserve a dumpster?',
    answer:
      'Most residential jobs only need 24 hours of notice, and we can often deliver same-day if your call reaches us before 10 a.m. During spring clean-up season and late summer construction peaks, containers in the 20- and 30-yard range book quickly across Salt Lake, Utah, and Davis Counties. We recommend reserving two to three days ahead in those windows so you can lock in your preferred size and delivery time. Icon Dumpsters keeps standby inventory staged across the Wasatch Front, and our dispatch team will always tell you honestly if a size is tight so you can adapt your plan without surprises.',
  },
  {
    question: 'Which dumpster size should I choose?',
    answer:
      'Fifteen-yard dumpsters handle small remodels, roofing tear-offs up to 35 squares, or two to three rooms of clean-out debris. Twenty-yard containers remain the most popular because they balance driveway fit with capacity for medium renovations and bulky furniture. Thirty-yard dumpsters work for large additions, estate cleanouts, or commercial tenant improvements, while forty-yard cans are reserved for high-volume demolition. If you text us a few photos or a materials list, our team will walk you through volume estimates, weight allowances, and advise whether a second swap might be cheaper than paying overage at a landfill.',
  },
  {
    question: 'What materials are prohibited?',
    answer:
      'Landfills in Utah ban hazardous waste, sealed drums, liquids, paint, batteries, tires, propane tanks, medical sharps, asbestos, and large quantities of electronics. Concrete, brick, rock, or dirt must load into dedicated heavy debris containers so haulers can route them to approved recycling facilities. If you have questions about unusual materials—such as sod, railroad ties, appliance compressors, mattresses, or shingles with suspected asbestos—call our compliance desk first. We can schedule a specialty haul, arrange segregated bins, or recommend licensed abatement partners.',
  },
  {
    question: 'How do weight limits work?',
    answer:
      'Each dumpster includes a base tonnage allowance that matches the typical debris mix for that container size. For example, a 15-yard dumpster includes 2 tons, a 20-yard includes 3 tons, and a 30-yard includes 4 tons. We weigh every load at the disposal facility, and any excess is billed at the published landfill rate plus a small handling surcharge. You can avoid overage by loading heavy material—like plaster, soil, tile, or shingles—no more than halfway up the container and keeping lighter debris on top. Our drivers can also swap your dumpster mid-project so you start fresh with a new weight allowance.',
  },
  {
    question: 'How long can I keep the dumpster?',
    answer:
      'Standard rentals include seven days on site, but we happily customize timelines. Homeowners working on weekend projects sometimes only need 48 hours, while builders on phased remodels keep containers for several weeks. Extra days cost a flat extension rate that we quote up front. If your schedule accelerates, just call for pickup sooner—we only charge for the time you use. Our routing software tracks each container’s clock so we can nudge you before a deadline and avoid surprise fees.',
  },
  {
    question: 'Where can the dumpster be placed?',
    answer:
      'Driveways and private parking pads are ideal because they avoid municipal permits and keep the container close to your work area. We use protective boards under every can to prevent scrapes, and we visually confirm clearance from overhead wires, eaves, or tree branches. Street placement is available in most Utah cities once the proper right-of-way permit is secured; we handle the paperwork, barricades, and nighttime lighting so inspectors stay happy. For tight alleys or gated communities we can schedule a site visit and plan multiple smaller swaps instead of forcing an oversized dumpster into a risky location.',
  },
  {
    question: 'Do I need to be home for delivery or pickup?',
    answer:
      'No, as long as the placement site is clear and we have accurate instructions. Mark the spot with tape, cones, or chalk if the driveway has multiple options. Gate access codes, lockbox combinations, and contact numbers can be texted to our dispatcher and stored securely in your order. The driver will call when en route, send photos after placement, and notify you once the dumpster is retrieved so you always know the status even if you are away from the property.',
  },
  {
    question: 'What happens if weather moves in?',
    answer:
      'Utah’s snowstorms and canyon winds can appear fast. We monitor forecasts daily and coordinate accordingly: chains and 4x4 trucks are available for mountain routes, and we pause service if the Utah Highway Patrol closes key corridors. If a storm hits while the dumpster is on site, cover the load with a tarp or plywood to keep snow and water out—extra moisture adds weight quickly. Call us if you need a delay; we will adjust your rental clock so you are not paying for days lost to extreme weather.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Our pricing bundles delivery, pickup, landfill fees up to the included weight, driveway protection boards, and basic permit assistance. The rate varies by container size and the city we service because disposal facilities and fuel costs differ across the Wasatch Front, Cache Valley, and Central Utah. We provide line-item estimates before you approve the order so you can relay accurate costs to clients or insurance carriers. If the project scope changes—maybe you add shingles or pour concrete—we will update the quote immediately so your budget stays predictable.',
  },
  {
    question: 'Can Icon Dumpsters recycle materials?',
    answer:
      'Absolutely. Clean loads of concrete, asphalt, metal, cardboard, or green waste can be rerouted to specialized recyclers in Salt Lake County, Utah County, and Summit County. We maintain relationships with multiple facilities and will advise whether separating materials reduces your overall cost. Post-project we can deliver dump tickets and diversion summaries documenting how much was recycled—perfect for LEED documentation or municipal reporting requirements.',
  },
];

export default function DumpsterRentalFAQPage() {
  return (
    <div className="bg-white pb-16 text-slate-800">
      <header className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <p className="uppercase text-sm tracking-widest text-slate-300">
            Start With Confidence
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Dumpster Rental Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-200 sm:text-xl">
            Planning a cleanup, remodel, or commercial build-out? Browse the answers our Utah
            customers ask most often. If you need more detail, our local support team is one quick
            call or text away.
          </p>
        </div>
      </header>

      <main className="mx-auto mt-12 max-w-5xl space-y-10 px-4">
        <section className="rounded-2xl bg-slate-50 p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-blue-900">Top Questions From Homeowners</h2>
          <p className="mt-4 leading-relaxed">
            Whether you are refreshing a kitchen in Spanish Fork, decluttering a basement in Layton,
            or taking down an old shed in Herriman, the fundamentals stay the same: choose the right
            size, keep the load balanced, and give yourself enough rental time to work without
            stress. The answers below break down our most common homeowner conversations so you can
            map out your project before the first cabinet door comes off the hinges.
          </p>
        </section>

        <section className="space-y-8 rounded-2xl bg-white p-8 shadow-sm shadow-slate-900/5">
          {faqs.slice(0, 5).map((faq) => (
            <article key={faq.question}>
              <h3 className="text-xl font-semibold text-blue-900">{faq.question}</h3>
              <p className="mt-3 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-slate-50 p-8 shadow-sm shadow-slate-900/5">
          <h2 className="text-2xl font-semibold text-blue-900">
            Jobsite Logistics For Contractors &amp; Property Managers
          </h2>
          <p className="mt-4 leading-relaxed">
            Coordinating crews, subs, and inspectors leaves little runway for guesswork. Icon
            Dumpsters tracks every permit renewal, weight ticket, and delivery window so your
            superintendents stay focused on production. Use this section to align expectations with
            your clients and document best practices for your field teams.
          </p>
        </section>

        <section className="space-y-8 rounded-2xl bg-white p-8 shadow-sm shadow-slate-900/5">
          {faqs.slice(5).map((faq) => (
            <article key={faq.question}>
              <h3 className="text-xl font-semibold text-blue-900">{faq.question}</h3>
              <p className="mt-3 leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-blue-900 p-8 text-white shadow-lg shadow-blue-900/30">
          <h2 className="text-2xl font-semibold">Still Need Help?</h2>
          <p className="mt-3 leading-relaxed text-blue-100">
            Call or text <strong>(801) 918-6000</strong> and you will reach our local Utah team—no
            outsourcing, no call centers. Share your address, timing, and debris list. We will
            confirm availability, handle any permits, and email a documented quote the same day so
            your project keeps momentum.
          </p>
        </section>
      </main>
    </div>
  );
}
