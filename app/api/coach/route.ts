import { NextResponse } from 'next/server';

const sampleCoaching = [
  'Start by clarifying your main money goal: cashflow stability, simple investing, or learning a realistic side income idea.',
  'Remember: reliable passive income usually starts with capital or a digital asset that is already built and promoted.',
  'If a creator promises easy earnings, ask yourself what capital, time, platform, or audience they are hiding.',
];

export async function POST(request: Request) {
  const body = await request.json();
  const prompt = body.prompt?.trim() || '';
  const envUrl = process.env.GROQ_API_URL;
  const envKey = process.env.GROQ_API_KEY;

  if (envUrl && envKey) {
    try {
      const response = await fetch(envUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${envKey}`,
        },
        body: JSON.stringify({ prompt, max_tokens: 250 }),
      });
      const data = await response.json();
      return NextResponse.json({ text: data?.choices?.[0]?.text || 'I can help you think through your money goals clearly.' });
    } catch (error) {
      return NextResponse.json({ text: 'I could not reach the coach API right now. Please try again later.' });
    }
  }

  const answer = sampleCoaching[Math.floor(Math.random() * sampleCoaching.length)];
  return NextResponse.json({ text: answer });
}
