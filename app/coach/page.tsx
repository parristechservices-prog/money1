'use client';

import { useState } from 'react';

export default function CoachPage() {
  const [prompt, setPrompt] = useState('Help me build a calm Australian money learning plan.');
  const [answer, setAnswer] = useState('Type a question and the coach will offer a practical response.');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setAnswer(data.text);
    } catch {
      setAnswer('The coach is unavailable right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-10">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Coach</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">A practical coach for your money questions</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Ask a calm, education-first question about budgeting, investing, passive income, or evaluating online money advice.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          MoneyMap AU is financial education only. It is not personal financial advice, tax advice, legal advice, or a recommendation to buy, sell, or hold any financial product.
        </p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <label className="block text-sm font-medium text-slate-700" htmlFor="prompt">
            Your coach prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-4 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none"
            rows={5}
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Ask the coach'}
          </button>
        </form>
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Coach response</p>
          <p className="mt-4 text-slate-700 leading-8">{answer}</p>
        </div>
      </section>
    </div>
  );
}
