import type { Metadata } from 'next';
import BulkEmailOutreach from '@/app/components/BulkEmailOutreach';
import AdminAuthGuard from '@/app/components/AdminAuthGuard';

export const metadata: Metadata = {
  title: 'Email Outreach - Icon Dumpsters',
  description: 'Bulk email outreach tool for Icon Dumpsters',
  robots: { index: false, follow: false },
};

export default function EmailOutreachPage() {
  return (
    <AdminAuthGuard>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BulkEmailOutreach />
        </div>
      </div>
    </AdminAuthGuard>
  );
}

