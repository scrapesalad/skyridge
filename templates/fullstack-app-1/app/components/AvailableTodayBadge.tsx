import { useMemo } from 'react';

export default function AvailableTodayBadge() {
  const label = useMemo(() => {
    const now = new Date();
    const hour = now.getHours();
    return hour < 14 ? 'Available Today' : 'Next‑Day Available';
  }, []);
  const isToday = label === 'Available Today';
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold shadow ${isToday ? 'bg-teal-100 text-teal-700' : 'bg-yellow-100 text-yellow-700'}`}>
      {label}
    </span>
  );
}


