'use client';

import { useLocalStorage } from '../../lib/useLocalStorage';

const modules = [
  'Budgeting basics',
  'Australian tax and super',
  'Economics fundamentals',
  'Investing foundations',
  'Passive income reality',
];

export default function ProgressPage() {
  const [completed, setCompleted] = useLocalStorage<string[]>('moneyMapProgress', []);

  function toggleModule(module: string) {
    if (completed.includes(module)) {
      setCompleted(completed.filter((item) => item !== module));
    } else {
      setCompleted([...completed, module]);
    }
  }

  return (
    <div className="container py-10">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Progress</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Track your learning progress</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Mark each module as complete and keep your personal learning path on track.
        </p>
        <div className="mt-10 space-y-4">
          {modules.map((module) => {
            const done = completed.includes(module);
            return (
              <button
                key={module}
                type="button"
                onClick={() => toggleModule(module)}
                className={`w-full rounded-3xl border p-6 text-left transition ${
                  done ? 'border-emerald-300 bg-emerald-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{module}</p>
                    <p className="mt-2 text-slate-600">{done ? 'Completed' : 'Tap to mark complete'}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                    {done ? 'Done' : 'Open'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
