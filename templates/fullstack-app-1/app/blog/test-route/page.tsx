import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: 'https://icondumpsters.com/blog/test-route' }
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Route Working!</h1>
        <p className="text-lg text-gray-600">If you can see this, Next.js routing is working properly.</p>
        <a href="https://icondumpsters.com/blog" className="mt-4 inline-block bg-trust-blue text-white px-6 py-2 rounded-lg">
          Back to Blog
        </a>
      </div>
    </div>
  )
}
