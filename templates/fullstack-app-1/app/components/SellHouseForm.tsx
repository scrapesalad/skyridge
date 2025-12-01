"use client";

import { useState } from "react";

export default function SellHouseForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState<FileList | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const payload: Record<string, any> = Object.fromEntries(formData.entries());
    // Attach photo metadata only (avoid large uploads in JSON)
    if (photos && photos.length) {
      payload.photosMeta = Array.from(photos).slice(0, 8).map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type,
      }));
      payload.photosSelected = photos.length;
    }
    try {
      // Chat API removed - using lead API instead
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, leadType: "sell_house", source: "/sell-house" }),
      });
      setMessage("Thanks! We received your info and will reach out shortly.");
      form.reset();
      setPhotos(null);
    } catch {
      setMessage("Something went wrong. Please call (801) 918-6000.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input name="firstName" placeholder="First name" className="border border-gray-300 rounded-lg px-3 py-2" required />
      <input name="lastName" placeholder="Last name" className="border border-gray-300 rounded-lg px-3 py-2" required />
      <input name="phone" placeholder="Phone" className="border border-gray-300 rounded-lg px-3 py-2" required />
      <input name="email" placeholder="Email" className="border border-gray-300 rounded-lg px-3 py-2" />
      <input name="address" placeholder="Property address" className="border border-gray-300 rounded-lg px-3 py-2 col-span-1 sm:col-span-2" required />

      <input name="askingPrice" type="number" min="0" step="1000" placeholder="Asking price ($)" className="border border-gray-300 rounded-lg px-3 py-2" />
      <div className="grid grid-cols-2 gap-4">
        <input name="beds" type="number" min="0" step="1" placeholder="Beds" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="baths" type="number" min="0" step="0.5" placeholder="Baths" className="border border-gray-300 rounded-lg px-3 py-2" />
      </div>
      <input name="squareFeet" type="number" min="0" step="50" placeholder="Square footage" className="border border-gray-300 rounded-lg px-3 py-2" />
      <div className="grid grid-cols-2 gap-4">
        <input name="agentName" placeholder="Agent name (optional)" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="agentPhone" placeholder="Agent phone (optional)" className="border border-gray-300 rounded-lg px-3 py-2" />
      </div>
      <input name="idealClosingDate" type="date" placeholder="Ideal closing date" className="border border-gray-300 rounded-lg px-3 py-2" />
      <div className="col-span-1 sm:col-span-2">
        <label className="block text-sm text-gray-600 mb-1">Photos (optional, up to 8)</label>
        <input type="file" accept="image/*" multiple onChange={(e) => setPhotos(e.currentTarget.files)} className="block w-full text-sm text-gray-700" />
        <p className="text-xs text-gray-500 mt-1">We collect filenames only in this form to keep things fast. We\'ll follow up if we need the images.</p>
      </div>
      <textarea name="notes" placeholder="Notes about the property (access, timeline, special requests)" className="border border-gray-300 rounded-lg px-3 py-2 col-span-1 sm:col-span-2 min-h-28" />

      <button type="submit" disabled={isSubmitting} className="col-span-1 sm:col-span-2 inline-flex items-center justify-center bg-[#0d9488] text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
        {isSubmitting ? "Submitting..." : "Request Home-Sale Help"}
      </button>
      {message && <div className="col-span-1 sm:col-span-2 mt-2 text-sm text-gray-700">{message}</div>}
    </form>
  );
}


