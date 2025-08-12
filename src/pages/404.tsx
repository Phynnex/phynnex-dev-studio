import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom404() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-2xl font-semibold mb-4">404 - Page Not Found</h1>
        <Link href="/" className="text-primary-purple underline">
          Return home
        </Link>
      </div>
    </>
  );
}
