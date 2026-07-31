'use client';

import { quizzes } from '../../lib/content';
import { QuizCard } from '../../components/QuizCard';

export default function QuizzesPage() {
  return (
    <div className="container py-10">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-700">Quizzes</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Check your money judgment</h1>
        <p className="mt-4 text-slate-600 leading-8">
          Use quick self-checks to spot hype, evaluate economics, and strengthen your decisions.
        </p>
        <div className="mt-10 space-y-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} {...quiz} />
          ))}
        </div>
      </section>
    </div>
  );
}
