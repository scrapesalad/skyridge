'use client';

import { usePathname } from 'next/navigation';
import CalculatorBanner from './CalculatorBanner';

const ALLOWED_PREFIXES: string[] = [
];

export default function ConditionalCalculatorBanner() {
  const pathname = usePathname() || '/';
  const shouldShow = ALLOWED_PREFIXES.some((p) => pathname.startsWith(p));
  if (!shouldShow) return null;
  return <CalculatorBanner />;
}


