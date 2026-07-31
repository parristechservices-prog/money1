import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-10">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">MoneyMap AU</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Financial education only. Not personal financial advice, tax advice, legal advice, or a recommendation to buy, sell, or hold any financial product.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick links</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-slate-300">
            <Link href="/learning">Learning Path</Link>
            <Link href="/resources">Resource Library</Link>
            <Link href="/quizzes">Quizzes</Link>
            <Link href="/coach">Coach</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Disclaimer</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Always check authoritative sources and consider a qualified professional for decisions that materially affect your family finances.
          </p>
        </div>
      </div>
    </footer>
  );
}
