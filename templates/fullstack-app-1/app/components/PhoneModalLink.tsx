"use client";

import { useEffect, useState } from "react";

type Props = {
  phone: string; // display phone, e.g., (801) 918-6000
  telHref: string; // tel:+18019186000
  className?: string;
};

export default function PhoneModalLink({ phone, telHref, className }: Props) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  function onClick(e: React.MouseEvent) {
    if (isDesktop) {
      e.preventDefault();
      setOpen(true);
    }
    // On mobile, allow default tel: navigation
  }

  async function copyNumber() {
    try { await navigator.clipboard.writeText(phone.replace(/[^0-9+]/g, '')); } catch {}
  }

  return (
    <>
      <a href={telHref} onClick={onClick} className={className}>{phone}</a>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl w-11/12 max-w-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Icon Dumpsters</h3>
            <p className="text-gray-700 mb-4">{phone}</p>
            <div className="flex gap-3">
              <a href={telHref} className="flex-1 text-center bg-[#0d9488] text-white px-4 py-2 rounded-lg hover:bg-teal-700">Call Now</a>
              <button onClick={copyNumber} className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50">Copy Number</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


