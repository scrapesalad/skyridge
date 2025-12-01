import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCityData } from '../config/cityData';
import type { CityData } from '../config/cityData';
import {
  applyTemplate,
  applyTemplateToArray,
  resolveServiceTemplate,
} from '../config/serviceTemplates';
import type { ServiceTemplate } from '../config/serviceTemplates';
import FAQSchema from './FAQSchema';

interface CityServicePageProps {
  serviceSlug: string;
  citySlug: string;
  canonicalPath: string;
  variant?: 'top-level' | 'services';
}

interface CityContext {
  cityName: string;
  state: string;
  phoneNumber: string;
}

function formatList(items: string[]): string {
  if (!items || items.length === 0) {
    return '';
  }

  if (items.length === 1) {
    return items[0];
  }

  const head = items.slice(0, -1).join(', ');
  const tail = items[items.length - 1];
  return `${head}, and ${tail}`;
}

function toPossessive(name: string): string {
  return name.endsWith('s') ? `${name}'` : `${name}'s`;
}

function lowerFirst(value: string): string {
  if (!value) {
    return value;
  }

  return value.charAt(0).toLowerCase() + value.slice(1);
}

function buildNarrativeParagraphs({
  city,
  serviceTemplate,
  cityData,
  highlights,
  useCases,
  proTips,
}: {
  city: CityContext;
  serviceTemplate: ServiceTemplate;
  cityData: CityData | null;
  highlights: string[];
  useCases: string[];
  proTips: string[];
}): string[] {
  const paragraphs: string[] = [];
  const serviceName =
    serviceTemplate.displayName ||
    serviceTemplate.slug.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  const serviceLower = serviceName.toLowerCase();

  const neighborhoods =
    cityData?.businessDistricts
      ?.map((district) => district.name)
      .filter((name) => name && name.trim().length > 0) ?? [];
  const neighborhoodsText =
    neighborhoods.length > 0
      ? formatList(neighborhoods)
      : `${toPossessive(city.cityName)} neighborhoods`;

  const sanitizedHighlights = highlights.filter(
    (item) => item && item.trim().length > 0
  );
  const sanitizedUseCases = useCases.filter(
    (item) => item && item.trim().length > 0
  );
  const sanitizedProTips = proTips.filter(
    (item) => item && item.trim().length > 0
  );

  const useCaseSentence = sanitizedUseCases.length
    ? `Customers schedule this service for ${lowerFirst(
        formatList(sanitizedUseCases)
      )}.`
    : 'Customers schedule this service for remodels, cleanouts, seasonal maintenance, and ongoing construction support.';

  const highlightSentence = sanitizedHighlights.length
    ? `Key advantages include ${formatList(sanitizedHighlights)}.`
    : 'Key advantages include driveway-safe placement, responsive dispatching, and easy-to-read invoices.';

  const proTipSentence = sanitizedProTips.length
    ? `Our crew shares field-tested pointers such as ${lowerFirst(
        formatList(sanitizedProTips)
      )} so every load stays balanced, secure, and compliant.`
    : 'Our crew shares field-tested pointers on balancing loads, planning for weather, and keeping materials level with the rim so every haul stays secure and compliant.';

  const residentialServices =
    cityData?.contentSections?.residentialServices?.filter(
      (item) => item && item.trim().length > 0
    ) ?? [];
  const commercialServices =
    cityData?.contentSections?.commercialServices?.filter(
      (item) => item && item.trim().length > 0
    ) ?? [];
  const landmarks =
    cityData?.landmarks
      ?.map((landmark) => landmark.name)
      .filter((name) => name && name.trim().length > 0) ?? [];

  const residentialSentence = residentialServices.length
    ? `${toPossessive(city.cityName)} homeowners call us for ${lowerFirst(
        formatList(residentialServices)
      )} and other seasonal projects.`
    : `${toPossessive(city.cityName)} homeowners call us for renovations, cleanouts, and seasonal projects.`;

  const commercialSentence = commercialServices.length
    ? `Local businesses rely on us for ${lowerFirst(
        formatList(commercialServices)
      )} along with municipal and community events.`
    : 'Local businesses rely on us for construction, tenant improvements, and community events.';

  const permitContact = cityData?.permitInfo
    ? `We coordinate with ${cityData.permitInfo.cityName} at ${cityData.permitInfo.phoneNumber} to navigate right-of-way questions and secure permits when required.`
    : `We coordinate with local permitting offices around ${city.cityName} to navigate right-of-way questions and secure approvals when required.`;

  const serviceAreasNarrative = cityData?.contentSections?.serviceAreas
    ? `${cityData.contentSections.serviceAreas} Our team schedules around school traffic, canyon closures, and community events to keep your delivery windows predictable.`
    : 'We schedule around school traffic, canyon closures, and community events to keep your delivery windows predictable.';

  const landmarkSentence = landmarks.length
    ? `You will spot our trucks near ${formatList(
        landmarks
      )} every week, and the drivers already know the preferred staging lanes and loading dock approaches.`
    : 'You will spot our trucks near civic centers, schools, and business parks every week, and the drivers already know the preferred staging lanes and loading dock approaches.';

  paragraphs.push(
    `Icon Dumpsters keeps projects in ${city.cityName}, ${city.state} moving with dependable ${serviceLower}. Our dispatch team maps deliveries through ${neighborhoodsText} every day, so we know the quirks of steep driveways, gated communities, and active job sites around town. A dedicated coordinator confirms placement notes, verifies gate codes, and texts en route updates so your crew never wastes labor hours waiting for a container.`
  );

  paragraphs.push(
    `We stage dumpsters ahead of the first tear-out and set them exactly where loaders and subcontractors can make straight-line drops. Placements always include boards and protective mats, and drivers walk the site with you to confirm clearance from eaves, gas meters, alleys, and landscaping. Because our entire team is Utah based, you speak with people who understand canyon winds, snowpack, and neighborhood covenants that can impact debris handling in ${city.cityName}.`
  );

  paragraphs.push(
    `${useCaseSentence} We monitor fill levels, schedule swap-outs around your trade partners, and keep demolition debris, shingles, or event waste from piling up on driveways and staging pads. When timelines shift, we simply adjust the haul calendar so inspectors and property owners see a tidy site.`
  );

  paragraphs.push(
    `${highlightSentence} Each commitment is designed to keep your crews focused on high-value work instead of making dump runs or negotiating last-minute haul-offs. Clear flat-rate pricing with generous weight allowances lets you quote jobs confidently and protects your margin when scope grows.`
  );

  paragraphs.push(
    `${proTipSentence} Communication stays open from quote to final pickup, and we encourage customers to send photos or measurements when they need placement guidance before delivery day.`
  );

  paragraphs.push(
    `${permitContact} ${serviceAreasNarrative} When regulations shift mid-project, we handle the conversation with the city so you can stay focused on production.`
  );

  paragraphs.push(
    `${residentialSentence} ${commercialSentence} We adjust container sizes, placement angles, and pickup timing to match the rhythm of ${city.cityName}'s mixed residential and commercial corridors.`
  );

  paragraphs.push(
    `${landmarkSentence} We keep detailed placement notes so return visits land in the exact spot you approved, even when the property manager or superintendent rotates between sites.`
  );

  paragraphs.push(
    'Sustainability is built into every route: we separate recyclable streams when facilities accept them, document restricted items, and coach crews on Utah disposal guidelines so your project stays compliant from start to finish. After pickup you receive confirmation with haul tickets, and our office can provide debris volume estimates when you need backup for client billing.'
  );

  paragraphs.push(
    `The Icon Dumpsters service desk is staffed seven days a week, so when weather, subcontractors, or delivery windows change unexpectedly, one call to ${city.phoneNumber} keeps the project on schedule. We combine responsive communication with deep knowledge of ${city.cityName}'s infrastructure, giving you a reliable extension of your field team for every load you plan.`
  );

  return paragraphs;
}

function buildOperationsSteps({
  city,
  serviceTemplate,
}: {
  city: CityContext;
  serviceTemplate: ServiceTemplate;
}): string[] {
  const serviceName =
    serviceTemplate.displayName ||
    serviceTemplate.slug.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  const serviceLower = serviceName.toLowerCase();

  return [
    `Call ${city.phoneNumber} or request a quote online to lock in ${serviceLower} for ${city.cityName}. We capture jobsite notes, debris types, delivery deadlines, and backup contacts so nothing gets lost when the crew mobilizes.`,
    `We send a placement checklist with gate measurements and clearance reminders tailored to ${city.cityName}'s driveways and alleys. Share a photo or sketch and our dispatcher marks the exact drop location for the driver.`,
    'On delivery day the driver calls when leaving the yard, lays protection boards, and positions the container exactly where you specified. They walk the site with you, confirm weight allowances, and answer last-minute questions before releasing the truck.',
    'During the rental we monitor fill levels and coordinate swaps so demolition, roofing, or event crews keep working without a pause. If weather or inspections push the schedule, text or call and we reschedule haul-offs on the spot.',
    'When you give the go-ahead we dispatch pickup, sweep the placement area, and email confirmation with any recycling notes. If you need dump tickets or debris estimates for client files, our office sends them the same day.',
  ];
}

function buildCoverageDetails({
  city,
  cityData,
  serviceTemplate,
}: {
  city: CityContext;
  cityData: CityData | null;
  serviceTemplate: ServiceTemplate;
}): string[] {
  const paragraphs: string[] = [];
  const serviceName =
    serviceTemplate.displayName ||
    serviceTemplate.slug.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  const serviceLower = serviceName.toLowerCase();

  const neighborhoods =
    cityData?.businessDistricts
      ?.map((district) => district.name)
      .filter((name) => name && name.trim().length > 0) ?? [];
  const neighborhoodsText =
    neighborhoods.length > 0
      ? formatList(neighborhoods)
      : `${toPossessive(city.cityName)} neighborhoods`;

  if (cityData?.contentSections?.overview) {
    paragraphs.push(
      `${cityData.contentSections.overview} We align our ${serviceLower} with that demand by staging trucks across ${neighborhoodsText} and keeping standby capacity ready for same-day requests.`
    );
  } else {
    paragraphs.push(
      `${serviceName} coverage in ${city.cityName} stretches from residential streets to industrial corridors. We stage trucks across ${neighborhoodsText} so a container is always nearby when you need one.`
    );
  }

  if (cityData?.contentSections?.localInfo) {
    paragraphs.push(
      `${cityData.contentSections.localInfo} Because we live where we work, our team tracks local events, canyon weather, and utility projects that influence delivery timing, and we proactively adjust routes when something could slow your job.`
    );
  } else {
    paragraphs.push(
      `Our local team tracks road work, seasonal tourism, and downtown events that might affect delivery timing. We adjust routes in advance so your project timeline stays intact no matter what is happening around ${city.cityName}.`
    );
  }

  return paragraphs;
}

function buildCityContext(citySlug: string): CityContext {
  const cityData = getCityData(citySlug);

  if (cityData) {
    return {
      cityName: cityData.cityName,
      state: cityData.state,
      phoneNumber: cityData.phoneNumber,
    };
  }

  const formattedCity = citySlug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

  return {
    cityName: formattedCity,
    state: 'Utah',
    phoneNumber: '(801) 918-6000',
  };
}

export default function CityServicePage({
  serviceSlug,
  citySlug,
  canonicalPath,
  variant = 'top-level',
}: CityServicePageProps) {
  const serviceTemplate = resolveServiceTemplate(serviceSlug);

  if (!serviceTemplate) {
    notFound();
  }

  const city = buildCityContext(citySlug);

  const context = {
    city: city.cityName,
    state: city.state,
    serviceName: serviceTemplate.displayName,
  };

  const heroTitle = applyTemplate(
    serviceTemplate.heroTitle ??
      `${serviceTemplate.displayName} in {{city}}, {{state}}`,
    context
  );
  const heroDescription = applyTemplate(
    serviceTemplate.heroDescription ??
      `Icon Dumpsters keeps projects in {{city}} running smoothly with dependable ${serviceTemplate.displayName.toLowerCase()} and responsive local support.`,
    context
  );
  const highlights = applyTemplateToArray(serviceTemplate.highlights, context);
  const useCases = applyTemplateToArray(serviceTemplate.useCases, context);
  const proTips = applyTemplateToArray(serviceTemplate.proTips, context);
  const faqs =
    serviceTemplate.faqs?.map((faq) => ({
      ...faq,
      question: applyTemplate(faq.question, context),
      answer: applyTemplate(faq.answer, context),
    })) ?? [];

  const cityDataDetails = getCityData(citySlug);

  const providedSummary = applyTemplateToArray(serviceTemplate.summary, context);
  const narrativeParagraphs = buildNarrativeParagraphs({
    city,
    serviceTemplate,
    cityData: cityDataDetails,
    highlights,
    useCases,
    proTips,
  });

  const summaryParagraphs =
    providedSummary.length > 0
      ? providedSummary
      : narrativeParagraphs.slice(0, 3);

  const extendedNarrative =
    providedSummary.length > 0
      ? narrativeParagraphs
      : narrativeParagraphs.slice(3);

  const operationsSteps = buildOperationsSteps({ city, serviceTemplate });
  const coverageParagraphs = buildCoverageDetails({
    city,
    cityData: cityDataDetails,
    serviceTemplate,
  });

  const cityLandingPath = `/${citySlug}`;
  const cityHasLandingPage = citySlug !== 'utah';

  // Generate FAQ schema if FAQs exist
  const faqSchemaUrl = `https://icondumpsters.com${canonicalPath}`;

  return (
    <>
      {faqs.length > 0 && <FAQSchema faqs={faqs} pageUrl={faqSchemaUrl} />}
      <div className="min-h-screen bg-slate-50 pb-16">
      <section className="bg-blue-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-3xl">
              <p className="text-sm uppercase tracking-wide text-blue-200">
                Icon Dumpsters • Utah Friendly Service
              </p>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {heroTitle}
              </h1>
              <p className="mt-4 text-lg text-blue-100 sm:text-xl">
                {heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="tel:801-918-6000"
                  className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-blue-900 transition hover:bg-yellow-300"
                >
                  Call (801) 918-6000
                </Link>
                <Link
                  href="/#quote-form"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-blue-800/60 p-6 shadow-lg shadow-blue-950/40">
              <h2 className="text-lg font-semibold text-white">
                Fast Facts for {city.cityName}
              </h2>
              <dl className="mt-4 space-y-3 text-sm text-blue-100">
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-medium text-white">Service Area</dt>
                  <dd className="text-right">
                    {city.cityName}, {city.state}
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-medium text-white">Primary Contact</dt>
                  <dd className="text-right">{city.phoneNumber}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-medium text-white">Same-Day Delivery</dt>
                  <dd className="text-right">Available on most orders</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="font-medium text-white">Permit Guidance</dt>
                  <dd className="text-right">
                    Support available for local requirements
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-6xl px-4">
        <div className="grid gap-6 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {highlight.split(':')[0]}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {highlight.includes(':')
                  ? highlight.split(':').slice(1).join(':').trim()
                  : highlight}
              </p>
            </div>
          ))}
        </div>

        {summaryParagraphs.length > 0 && (
          <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm shadow-slate-200/60">
            <h2 className="text-2xl font-semibold text-slate-900">
              Clean, Convenient Service for {city.cityName}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {summaryParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {extendedNarrative.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
            <h2 className="text-xl font-semibold text-slate-900">
              In-Depth Service Overview
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {extendedNarrative.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        )}

        {useCases.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Projects This Service Supports
            </h2>
            <ul className="mt-4 grid gap-3 text-base text-slate-700 sm:grid-cols-2">
              {useCases.map((useCase) => (
                <li
                  key={useCase}
                  className="flex items-start gap-2 rounded-md border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-sm"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-2xl bg-white p-8 shadow-sm shadow-slate-200/60">
          <h2 className="text-xl font-semibold text-slate-900">
            How Icon Dumpsters Helps
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-trust-blue">
                1. Delivery & Placement
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Share your preferred drop spot and we’ll position the dumpster
                with driveway-safe boards or job-site guidance.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-trust-blue">
                2. Load at Your Pace
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Rent periods include generous loading windows with easy
                extensions if your project grows.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-trust-blue">
                3. Scheduled Pickup
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Call, text, or schedule pickup online. We haul the debris to the
                proper facility and provide recycling documentation on request.
              </p>
            </div>
          </div>
        </section>

        {operationsSteps.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Step-by-Step Scheduling
            </h2>
            <ol className="mt-4 space-y-4 text-base leading-relaxed text-slate-700">
              {operationsSteps.map((step, index) => (
                <li
                  key={index}
                  className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70"
                >
                  <span className="font-semibold text-trust-blue">
                    Step {index + 1}
                  </span>
                  <p className="mt-2">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {proTips.length > 0 && (
          <section className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/70 p-8">
            <h2 className="text-xl font-semibold text-blue-900">Pro Tips</h2>
            <ul className="mt-4 space-y-3 text-sm text-trust-blue-dark">
              {proTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-xl bg-slate-900 px-8 py-10 text-white shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">
                Ready to schedule in {city.cityName}?
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Call our Utah dispatchers or request a quote online. We’ll help
                you choose the right size, confirm delivery notes, and set a
                pickup reminder so everything stays on schedule.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:801-918-6000"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Call (801) 918-6000
              </Link>
              <Link
                href="/#quote-form"
                className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Start Free Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">
            Service Coverage & Local Insights
          </h2>
          <div className="mt-4 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <div className="space-y-4">
              {coverageParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {cityHasLandingPage && (
              <p className="mt-4">
                Looking for more details? Explore our{' '}
                <Link
                  href={cityLandingPath}
                  className="font-semibold text-trust-blue underline underline-offset-2"
                >
                  {city.cityName} dumpster rental guide
                </Link>{' '}
                for permit tips, size recommendations, and neighborhood
                insights.
              </p>
            )}
          </div>
        </section>

        {faqs.length > 0 && (
          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-base font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <nav className="mx-auto mt-12 w-full max-w-6xl px-4 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-trust-blue hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden className="text-slate-400">
            /
          </li>
          {variant === 'services' && (
            <>
              <li>
                <Link
                  href="/services"
                  className="hover:text-trust-blue hover:underline"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                /
              </li>
            </>
          )}
          <li>
            <span className="text-slate-700">{serviceTemplate.displayName}</span>
          </li>
          <li aria-hidden className="text-slate-400">
            /
          </li>
          <li>
            <span className="text-slate-700">{city.cityName}, UT</span>
          </li>
        </ol>
        <p className="mt-2">
          Canonical URL:{' '}
          <span className="font-mono text-xs text-slate-700">
            https://icondumpsters.com{canonicalPath}
          </span>
        </p>
      </nav>
      </div>
    </>
  );
}
