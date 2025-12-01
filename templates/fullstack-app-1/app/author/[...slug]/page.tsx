import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function AuthorLegacyPage({ params }: PageProps) {
  const { slug } = await params;
  const segments = slug ?? [];
  const path = segments.join('/');
  const destination = `https://icondumpsters.com/blog`;
  redirect(destination);
}
