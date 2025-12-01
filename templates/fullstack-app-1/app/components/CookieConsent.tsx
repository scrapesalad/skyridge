'use client';

import { useEffect, useState } from 'react';

type ConsentPreferences = {
  analytics: boolean;
  ads: boolean;
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefs, setPrefs] = useState<ConsentPreferences>({ analytics: true, ads: true });
  const storageKey = 'cookie-consent-preferences-v1';

  const updateConsent = (preferences: ConsentPreferences) => {
    const analyticsVal = preferences.analytics ? 'granted' : 'denied';
    const adsVal = preferences.ads ? 'granted' : 'denied';
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: analyticsVal,
        ad_storage: adsVal,
        ad_user_data: adsVal,
        ad_personalization: adsVal,
        functionality_storage: 'granted',
        security_storage: 'granted',
      });
    }
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && saved.trim() !== '') {
        const parsed: ConsentPreferences = JSON.parse(saved);
        setPrefs(parsed);
        updateConsent(parsed);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, [storageKey]);

  const acceptAll = () => {
    const newPrefs = { analytics: true, ads: true };
    setPrefs(newPrefs);
    localStorage.setItem(storageKey, JSON.stringify(newPrefs));
    updateConsent(newPrefs);
    setIsVisible(false);
  };

  const rejectAll = () => {
    const newPrefs = { analytics: false, ads: false };
    setPrefs(newPrefs);
    localStorage.setItem(storageKey, JSON.stringify(newPrefs));
    updateConsent(newPrefs);
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem(storageKey, JSON.stringify(prefs));
    updateConsent(prefs);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden">
          <div className="p-4 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Privacy and Cookies</h2>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your experience, analyze traffic, and support essential site functionality. You can manage your
              preferences below. For details, see our <a href="https://icondumpsters.com/privacy-policy" className="text-[#0d9488] underline">Privacy Policy</a>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                <div>
                  <p className="font-medium text-gray-900">Analytics</p>
                  <p className="text-xs text-gray-500">Helps us improve the website (GA4).</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.analytics}
                    onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#0d9488] transition-colors"></div>
                </label>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                <div>
                  <p className="font-medium text-gray-900">Advertising</p>
                  <p className="text-xs text-gray-500">Personalized ads and remarketing.</p>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={prefs.ads}
                    onChange={(e) => setPrefs((p) => ({ ...p, ads: e.target.checked }))}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#0d9488] transition-colors"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button onClick={rejectAll} className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                Reject All
              </button>
              <button onClick={savePreferences} className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#0d9488] text-[#0d9488] hover:bg-teal-50">
                Save Preferences
              </button>
              <button onClick={acceptAll} className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#0d9488] text-white hover:bg-teal-700">
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


