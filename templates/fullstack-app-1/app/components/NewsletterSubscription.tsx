'use client';

import { useState } from 'react';

interface NewsletterSubscriptionProps {
  className?: string;
}

export default function NewsletterSubscription({ className = "" }: NewsletterSubscriptionProps) {
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeMessage("");

    console.log('Starting newsletter subscription for:', email);

    try {
      // Create form data for newsletter subscription (use internal API)
      const formData = new FormData();
      formData.append('email', email);
      formData.append('source', 'Newsletter Subscription');
      formData.append('subject', 'Newsletter Subscription - Icon Dumpsters Blog');

      console.log('Submitting subscription to internal /api/lead...');

      await fetch('/api/lead', {
        method: 'POST',
        body: formData as any,
      });

      // Success - reset form and show message
      setSubscribeMessage("Thank you for subscribing! Check your email for confirmation.");
      setEmail("");
      console.log('Newsletter subscription successful:', email);
    } catch (error) {
      console.error('Subscribe form error:', error);
      setSubscribeMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <div className={`bg-gradient-to-br from-[#0d9488] to-teal-700 text-white rounded-xl p-6 shadow-lg ${className}`}>
      <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        Stay Updated
      </h3>
      <p className="text-purple-100 text-sm mb-4 leading-relaxed">
        Get the latest dumpster rental tips and industry insights delivered to your inbox.
      </p>
      
      {subscribeMessage && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${
          subscribeMessage.includes('Thank you') 
            ? 'bg-gradient-to-br from-purple-50 to-purple-1000 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {subscribeMessage}
        </div>
      )}
      
      <form id="newsletter-form" onSubmit={handleSubscribe} className="space-y-3">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address" 
          className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
          required
        />
        <button 
          type="submit" 
          disabled={isSubscribing}
          className="w-full bg-white text-[#0d9488] py-3 rounded-lg hover:bg-teal-50 transition-colors font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubscribing ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
