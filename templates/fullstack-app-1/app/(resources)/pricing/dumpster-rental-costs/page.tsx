import type { Metadata } from 'next';

const title = 'Dumpster Rental Costs in Utah | Transparent Pricing by Icon Dumpsters';
const description =
  'Understand how dumpster rental pricing works across Utah: flat-rate packages, weight allowances, surcharges, permit fees, and budget tips for contractors and homeowners.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://icondumpsters.com/pricing/dumpster-rental-costs',
  },
  openGraph: {
    title,
    description,
    url: 'https://icondumpsters.com/pricing/dumpster-rental-costs',
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

const priceTable = [
  { size: '15 Yard Dumpster', baseRate: '$375–$415', weight: 'Includes 2 tons', bestFor: 'Single-room remodels, roofing tear-offs under 35 squares, seasonal cleanouts.' },
  { size: '20 Yard Dumpster', baseRate: '$415–$465', weight: 'Includes 3 tons', bestFor: 'Whole-home decluttering, medium renovations, light commercial refreshes.' },
  { size: '30 Yard Dumpster', baseRate: '$465–$525', weight: 'Includes 4 tons', bestFor: 'Large remodels, estate cleanouts, multi-unit flips, small demo jobs.' },
  { size: '40 Yard Dumpster', baseRate: '$565–$635', weight: 'Includes 5 tons', bestFor: 'Major construction, disaster recovery, municipal or industrial projects.' },
];

export default function DumpsterRentalCostsPage() {
  return (
    <div className="bg-slate-50 pb-16 text-slate-800">
      <header className="bg-emerald-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <p className="uppercase tracking-widest text-sm text-emerald-200">
            Budget With Confidence
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Dumpster Rental Costs in Utah</h1>
          <p className="mt-4 text-lg text-emerald-100 sm:text-xl">
            Icon Dumpsters uses straightforward flat-rate pricing with generous weight allowances
            and zero hidden fees. This guide explains how quotes are built, why rates vary by city,
            and the strategies our team uses to protect your budget.
          </p>
        </div>
      </header>

      <main className="mx-auto mt-12 max-w-5xl space-y-10 px-4">
        <section className="rounded-2xl bg-white p-8 shadow-sm shadow-emerald-900/5">
          <h2 className="text-2xl font-semibold text-emerald-900">
            Core Pricing Components
          </h2>
          <p className="mt-4 leading-relaxed">
            Every Icon Dumpsters quote includes delivery, pickup, landfill or transfer station fees
            up to the listed weight allowance, driveway protection boards, and basic permitting
            assistance. Fuel, truck maintenance, dispatch support, and environmental surcharges are
            already baked into the rate so you never see surprise add-ons. The only variables that
            change from project to project are the container size you select, the address we will
            service, disposal facility fees in that region, and whether specialized handling—such as
            recycling segregation or overweight debris—applies.
          </p>
          <p className="mt-4 leading-relaxed">
            Utah has a mix of municipal and private landfills, each with their own tipping
            structures. Wasatch Front locations typically charge by weight, while rural counties may
            blend weight limits with per-load fees. We service more than 60 cities from Logan to
            Nephi and from Tooele to Heber, so our pricing engine maps your address to the nearest
            disposal facility and pulls in their current rate sheet. That means your estimate mirrors
            real costs and our invoice will match to the dollar unless the job scope changes midstream.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-emerald-900/5">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-emerald-900 text-left text-xs font-semibold uppercase tracking-wider text-white">
              <tr>
                <th className="px-6 py-4">Dumpster Size</th>
                <th className="px-6 py-4">Typical Flat Rate</th>
                <th className="px-6 py-4">Included Weight</th>
                <th className="px-6 py-4">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {priceTable.map((row) => (
                <tr key={row.size} className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.size}</td>
                  <td className="px-6 py-4 text-slate-600">{row.baseRate}</td>
                  <td className="px-6 py-4 text-slate-600">{row.weight}</td>
                  <td className="px-6 py-4 text-slate-600">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-6 pb-6 pt-4 text-xs italic text-slate-500">
            *Rates vary by distance to the nearest disposal facility, permit requirements, and
            material density. Call (801) 918-6000 for an exact quote.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm shadow-emerald-900/5">
          <h2 className="text-2xl font-semibold text-emerald-900">Understanding Weight Overage</h2>
          <p className="mt-4 leading-relaxed">
            The included tonnage on each dumpster tier covers typical debris mixes. When a load
            exceeds that allowance, the landfill charges a per-ton overage fee that we pass through.
            Current overage rates along the Wasatch Front range from $45 to $68 per additional ton.
            You can avoid surprise costs by loading heavy materials—tile, plaster, soil, shingles,
            asphalt—first and keeping their height below the halfway mark. If you anticipate
            extremely dense debris, ask about dedicated heavy-material cans, which use shorter sides
            and higher tonnage limits at discounted rates.
          </p>
          <p className="mt-4 leading-relaxed">
            Icon Dumpsters emails every customer a copy of the landfill weight ticket so you can
            verify the scale reading. Contractors frequently attach those tickets to pay applications
            or insurance claims, while homeowners appreciate having documentation for their records.
            If the scale appears inaccurate, we will dispute it with the facility and resolve the
            question before final billing.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm shadow-emerald-900/5">
          <h2 className="text-2xl font-semibold text-emerald-900">Permit &amp; Access Considerations</h2>
          <p className="mt-4 leading-relaxed">
            Street placement in Salt Lake City, Park City, Provo, Orem, and many HOA-managed
            communities requires a temporary right-of-way permit. Fees range from $15 to $120
            depending on the jurisdiction and duration. Icon Dumpsters manages the application,
            barricades, and site photos, then adds the exact municipal fee to your invoice with a
            scanned receipt. When the dumpster can sit fully on private property—driveways, parking
            pads, or jobsite slabs—permits are typically unnecessary, which keeps the price to the
            flat rate listed above.
          </p>
          <p className="mt-4 leading-relaxed">
            For remote or mountainous properties, access roads may limit the truck size we can send.
            Our team evaluates Google Street View, property plats, and any photos you supply, then
            determines whether specialized equipment or multiple small swaps will be more economical
            than forcing a single large container into a tight canyon. Those recommendations appear
            on your quote so you can plan labor and schedule accordingly.
          </p>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm shadow-emerald-900/5">
          <h2 className="text-2xl font-semibold text-emerald-900">Ways to Reduce Your Dumpster Bill</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-relaxed">
            <li>
              <strong>Consolidate timelines.</strong> Plan demolition or cleanout phases so you fill
              the container quickly. Shorter rentals mean fewer extension days, and one well-timed
              swap beats multiple small orders.
            </li>
            <li>
              <strong>Segregate recyclables.</strong> Clean loads of concrete, asphalt, metal,
              cardboard, or green waste qualify for discounted disposal at specialty facilities. We
              can stage separate bins or schedule back-to-back hauls to keep materials compliant.
            </li>
            <li>
              <strong>Communicate special items early.</strong> Mattresses, appliances, tires, and
              railroad ties require surcharges at many landfills. When we know ahead of time, we can
              route the load to the cheapest facility and note prep steps like refrigerant removal.
            </li>
            <li>
              <strong>Share dumpsters on multi-unit projects.</strong> Property managers often rotate
              one container between townhome buildings or phases of a commercial build to maximize
              the weight allowance before ordering a replacement.
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-white p-8 shadow-sm shadow-emerald-900/5">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">City-Specific Pricing Guides</h2>
          <p className="mt-2 mb-4 leading-relaxed text-slate-700">
            Looking for pricing information for a specific city? Check out our detailed guides:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <a href="/pricing/dumpster-rental-cost-salt-lake-city" className="text-emerald-700 hover:text-emerald-900 font-semibold">
                Dumpster Rental Cost in Salt Lake City
              </a> - Complete pricing guide with answers to common cost questions for SLC
            </li>
          </ul>
        </section>

        <section className="rounded-2xl bg-emerald-900 p-8 text-white shadow-lg shadow-emerald-900/30">
          <h2 className="text-2xl font-semibold">Request a Precise Quote</h2>
          <p className="mt-3 leading-relaxed text-emerald-100">
            Call or text <strong>(801) 918-6000</strong>. Share the project address, debris types,
            target delivery date, and any permit notes. We will respond with a documented estimate,
            confirm availability, secure approvals if needed, and keep your job on budget from the
            first swing of demolition to the final haul-off.
          </p>
        </section>
      </main>
    </div>
  );
}
