'use client';

import { useState } from 'react';

function CompoundCalculator() {
  const [principal, setPrincipal] = useState(5000);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(10);
  const future = principal * Math.pow(1 + rate / 100, years);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Compound growth calculator</h2>
      <p className="mt-3 text-slate-600">Estimate how much your savings or investment may grow over time.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <label className="space-y-2 text-sm text-slate-600">
          <span>Starting amount (AUD)</span>
          <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-3" />
        </label>
        <label className="space-y-2 text-sm text-slate-600">
          <span>Annual return (%)</span>
          <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-3" />
        </label>
        <label className="space-y-2 text-sm text-slate-600">
          <span>Years</span>
          <input type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-3" />
        </label>
      </div>
      <p className="mt-6 text-slate-700">Estimated value after {years} years: <strong className="text-slate-900">AUD {future.toFixed(2)}</strong></p>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Tools</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Simple calculators and decision helpers</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Use basic tools to see how compounding works, test a passive income idea, and compare the risk of online money claims.
        </p>
        <div className="mt-10 space-y-8">
          <CompoundCalculator />
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Passive income reality check</h2>
            <p className="mt-3 text-slate-600">Ask yourself whether the idea is capital-based, asset-based, or disguised active work.</p>
            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600">
              <li>Does the claim explain the upfront work or capital requirement?</li>
              <li>Is the revenue model repeatable without constant support?</li>
              <li>Does it avoid hype and emphasise risk, platform change, and time?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
