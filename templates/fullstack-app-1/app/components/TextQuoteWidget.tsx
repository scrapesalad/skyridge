'use client';

import { useState } from 'react';

export default function TextQuoteWidget({ className = '' }: { className?: string }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSubmitting(true);
    try {
      // Send lead to email system
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: name, phone, additionalInfo: `Text quote request. Address: ${address}`, source: 'TextQuoteWidget' }),
      });
      
      // Send immediate text message
      const message = `Hi ${name}! Thanks for your text quote request. An Icon expert will text you within 30 minutes with your personalized dumpster quote and to schedule delivery. Reply STOP to opt out.`;
      
      await fetch('/api/sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone.replace(/\D/g, ''),
          message,
          transcript: [
            {
              role: 'system',
              content: `Text quote request from ${name}. Address: ${address || 'Not provided'}`
            }
          ]
        })
      });
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting text quote request:', error);
      alert('There was an error sending your request. Please call us at (801) 918-6000.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`bg-white rounded-xl shadow-md border border-gray-200 p-4 ${className}`}>
      <h3 className="text-base font-semibold text-gray-900 mb-2">Prefer a Text Quote?</h3>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Delivery address (optional)" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          <button disabled={isSubmitting} className="w-full bg-[#0d9488] text-white rounded-lg px-3 py-2 text-sm font-semibold hover:bg-teal-700 disabled:opacity-60">{isSubmitting ? 'Sending…' : 'Text Me a Quote'}</button>
        </form>
      ) : (
        <div className="text-sm text-[#0d9488]">Thanks! Well text you shortly. For immediate help, call (801) 918‑6000.</div>
      )}
    </div>
  );
}


