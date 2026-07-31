import { resources } from '../../lib/content';

export default function ResourcesPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Resource Library</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Trusted free resources for Australian money learning</h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((category) => (
            <div key={category.category} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{category.category}</h2>
              <ul className="mt-5 space-y-3">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} target="_blank" rel="noreferrer" className="text-brand-700 hover:text-brand-900 font-medium">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
