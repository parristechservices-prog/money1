import Link from 'next/link';
import { HomeSection } from '../components/HomeSection';
import { featuredItems } from '../lib/content';

export default function HomePage() {
  return (
    <div className="container py-10">
      <section className="max-w-4xl mx-auto text-center py-10">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">MoneyMap AU</p>
        <h1 className="mt-6 text-4xl sm:text-5xl font-semibold text-slate-950">Learn money, economics and passive-income realism without the hype.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          A free Australian-first learning app for practical personal finance, economics, investing basics, scam protection, and realistic asset-building.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/learning" className="px-6 py-3 rounded-full bg-brand-600 text-white font-semibold shadow-sm hover:bg-brand-700 transition">
            Start the learning path
          </Link>
          <Link href="/curriculum" className="px-6 py-3 rounded-full border border-slate-300 text-slate-900 bg-white hover:bg-slate-50 transition">
            View the curriculum
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3 mt-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">Why this app</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Practical, calm, Australian-first learning.</h2>
          <p className="mt-4 text-slate-600 leading-7">Focus on steady progress, not hype. Learn what matters for your cashflow, investing, and online money decisions.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">What you will learn</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Budgeting, tax, investing and risk filters.</h2>
          <p className="mt-4 text-slate-600 leading-7">Build a safer money foundation, understand Australian tax and super, and spot passive-income exaggeration.</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.2em] text-brand-700">How it works</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Structured pathways, quizzes and coaching.</h2>
          <p className="mt-4 text-slate-600 leading-7">Follow a clear path, access curated resources, test your judgement, and get calm coaching prompts.</p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mt-10">
        {featuredItems.map((item) => (
          <HomeSection key={item.title} item={item} />
        ))}
      </section>
    </div>
  );
}
