import { learningPath } from '../../lib/content';

export default function LearningPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Learning Path</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">A practical Australian-first money education path</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Follow a structured sequence from cashflow stability to economics, investing, and realistic passive-income thinking.
        </p>
        <div className="mt-10 space-y-8">
          {learningPath.map((phase) => (
            <div key={phase.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">{phase.title}</h2>
              <p className="mt-3 text-slate-700">{phase.summary}</p>
              <ul className="mt-5 space-y-2 list-disc pl-5 text-slate-600">
                {phase.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
