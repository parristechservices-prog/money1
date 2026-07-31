import { passiveIncomeReality } from '../../lib/content';

export default function PassiveRealityPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Passive Income Reality Check</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">What passive income really looks like</h1>
        <p className="mt-4 text-slate-600 leading-8">{passiveIncomeReality.intro}</p>
        <div className="mt-10 space-y-8">
          {passiveIncomeReality.categories.map((category) => (
            <div key={category.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{category.title}</h2>
              <p className="mt-3 text-slate-600">{category.note}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Red flags</h2>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
              {passiveIncomeReality.redFlags.map((flag) => (
                <li key={flag}>{flag}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
