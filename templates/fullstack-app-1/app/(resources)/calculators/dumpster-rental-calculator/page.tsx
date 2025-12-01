import Link from "next/link";
import { redirect } from 'next/navigation';
import RelatedPages from '@/app/components/RelatedPages';

export default function DumpsterRentalCalculatorRedirectPage() {
  redirect('https://icondumpsters.com/dumpster-rental-calculator');
}
