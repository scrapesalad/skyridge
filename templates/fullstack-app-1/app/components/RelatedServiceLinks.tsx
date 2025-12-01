"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services/residential-dumpster-rental", label: "Residential Dumpster Rental" },
  { href: "/services/commercial-dumpster-rental", label: "Commercial Dumpster Rental" },
  { href: "/services/construction-dumpster-rental", label: "Construction Dumpster Rental" },
  { href: "/services/roll-off-dumpster-rental", label: "Roll-Off Dumpster Rental" },
  { href: "/services/same-day-dumpster-delivery", label: "Same-Day Dumpster Delivery" },
  { href: "/services/junk-removal", label: "Junk Removal" },
  { href: "/services/garbage-junk-bin-rentals", label: "Garbage & Junk Bin Rentals" },
  { href: "/services/demolition-waste-disposal", label: "Demolition Waste Disposal" },
  { href: "/services/garage-cleanout", label: "Garage Cleanout Services" },
  { href: "/services/construction-waste-management", label: "Construction Waste Management" },
];

export default function RelatedServiceLinks() {
  const pathname = usePathname() || "/";
  const isLegacyLocation = /^\/slc-dumpster-rental-|^\/utah-dumpster-rental/.test(pathname);
  const isCityPage = /^\/dumpster-rental-[a-z0-9-]+-ut\/?$/.test(pathname);
  const isServiceDetail = pathname.startsWith("/services/");
  const isCityOrMarket = /-dumpster-rental|dumpster-rentals|\/cities\//.test(pathname);
  const shouldRender = isLegacyLocation || isCityPage || isServiceDetail || isCityOrMarket;
  if (!shouldRender) return null;

  return (
    <section className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Services in Your Area</h2>
        <nav aria-label="Related services">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link className="block rounded-md border border-gray-200 px-4 py-3 hover:border-teal-400 hover:bg-teal-50 transition" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
