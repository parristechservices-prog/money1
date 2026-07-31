import { influencerChecklist } from '../../lib/content';

export default function InfluencerPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">YouTube & Influencer Filter</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Evaluate online money creators with healthy scepticism</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Use these questions to tell whether a channel is teaching financial literacy or selling hype.
        </p>
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <ul className="list-disc space-y-3 pl-5 text-slate-600">
            {influencerChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
