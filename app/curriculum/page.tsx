import { curriculumPlan30, curriculumPlan90, recommendedSources } from '../../lib/content';

export default function CurriculumPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Curriculum</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">A guided curriculum for Australian money education</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Follow a practical path from cashflow stability to economics, investing, and realistic passive-income thinking.
        </p>

        <div className="mt-10 space-y-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">30-day learning plan</h2>
            <p className="mt-3 text-slate-600">Spend about 20 minutes a day building real money judgement and avoiding hype.</p>
            <div className="mt-6 space-y-4">
              {curriculumPlan30.map((item) => (
                <div key={item.day} className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{item.day}</h3>
                  <p className="mt-1 text-slate-700">{item.focus}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                    {item.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">90-day roadmap</h2>
            <p className="mt-3 text-slate-600">Extend your learning with steady foundations, deeper knowledge, and practical review.</p>
            <div className="mt-6 space-y-4">
              {curriculumPlan90.map((item) => (
                <div key={item.week} className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-slate-900">{item.week}</h3>
                  <p className="mt-1 text-slate-700">{item.focus}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Recommended sources</h2>
            <p className="mt-3 text-slate-600">Use trusted Australian and global resources to support your learning.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {recommendedSources.map((category) => (
                <div key={category.category} className="rounded-3xl bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{category.category}</h3>
                  <ul className="mt-4 space-y-3 text-slate-600">
                    {category.items.map((item) => (
                      <li key={item.title}>
                        <a href={item.url} target="_blank" rel="noreferrer" className="font-medium text-brand-700 hover:text-brand-900">
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
