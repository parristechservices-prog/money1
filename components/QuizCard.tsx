'use client';

import { useState } from 'react';

type QuizCardProps = {
  question: string;
  options: string[];
  answerIndex: number;
  feedback: string;
};

export function QuizCard({ question, options, answerIndex, feedback }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const correct = selected === answerIndex;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{question}</h3>
      <div className="mt-4 grid gap-3">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(index)}
            className={`rounded-2xl border px-4 py-3 text-left transition ${
              selected === index ? 'border-brand-600 bg-brand-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button
          type="button"
          disabled={selected === null}
          onClick={() => setSubmitted(true)}
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Check answer
        </button>
        {submitted && selected !== null && (
          <span className={`text-sm font-semibold ${correct ? 'text-emerald-700' : 'text-rose-700'}`}>
            {correct ? 'Correct' : 'Not quite'}
          </span>
        )}
      </div>
      {submitted && selected !== null && (
        <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">{feedback}</p>
      )}
    </div>
  );
}
