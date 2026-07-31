import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/learning', label: 'Learning Path' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/resources', label: 'Resources' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/coach', label: 'Coach' },
  { href: '/tools', label: 'Tools' },
  { href: '/passive-reality', label: 'Reality Check' },
  { href: '/youtube', label: 'Influencer Filter' },
  { href: '/progress', label: 'Progress' },
];

export function NavBar() {
  return (
    <header className="bg-white border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold text-brand-900">
          MoneyMap AU
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-800 transition">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/learning" className="inline-flex items-center rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700 transition">
          Get started
        </Link>
      </div>
    </header>
  );
}
