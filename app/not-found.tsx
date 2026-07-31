import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-5xl font-semibold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-brand-600 px-6 py-3 text-white hover:bg-brand-700">
        Return home
      </Link>
    </div>
  );
}
