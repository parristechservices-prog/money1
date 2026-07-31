import Link from 'next/link';

type HomeSectionProps = {
  item: {
    title: string;
    description: string;
    href: string;
  };
};

export function HomeSection({ item }: HomeSectionProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
      <p className="mt-3 text-slate-600">{item.description}</p>
      <Link href={item.href} className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700 hover:text-brand-900">
        Explore
      </Link>
    </article>
  );
}
