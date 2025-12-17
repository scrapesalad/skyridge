'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/skyridge/skyridge_image_023.webp"
          alt="Residential Roofing"
          fill
          className="object-cover"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/80 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Subtitle with decorative lines */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-primary-light"></div>
            <h3 className="text-white uppercase tracking-wider text-sm md:text-base font-semibold mx-4">
              GET THE LATEST FROM SKY RIDGE ROOFING
            </h3>
            <div className="w-12 h-px bg-primary-light"></div>
          </div>
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight mb-12">
            Newsletter Sign Up
          </h2>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light"
              required
            />
          </div>
          
          {/* Status Messages */}
          {status === 'success' && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-sm text-center">
              Thank you for subscribing! Check your email for a welcome message.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-4 p-4 bg-red-500 text-white rounded-sm text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-primary-dark hover:bg-primary text-white px-8 py-4 font-semibold uppercase tracking-wide transition rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Signing Up...' : 'SIGN UP'}
          </button>
        </form>
      </div>

      {/* 30-Second Roof Estimate Vertical Banner */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:block">
        <Link
          href="/calculators/roofing-cost"
          className="bg-primary-light text-white px-4 py-8 writing-vertical-rl text-center font-bold text-sm hover:bg-primary transition shadow-lg"
          style={{ writingMode: 'vertical-rl' }}
        >
          30-Second Roof Estimate
        </Link>
      </div>
    </section>
  );
}

