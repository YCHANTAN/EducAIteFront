import { useState } from 'react';
import { LearnProgress } from '../components/LearnProgress';

export function LearnPage() {
  const [index, setIndex] = useState(1);
  const total = 2;

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <h1 className="mb-12 text-center text-6xl font-semibold">Midterm exam for Database</h1>

      <div className="mx-auto max-w-6xl rounded-[36px] bg-[#2C267A] px-10 py-20 text-center shadow-[0_0_40px_rgba(255,255,255,0.18)]">
        <p className="mx-auto max-w-5xl text-7xl leading-tight">
          Before the rise of machines and technology, how was the act of listening primarily experienced?
        </p>

        <div className="mt-16 flex justify-center gap-4">
          <button className="rounded-xl bg-white px-8 py-3 text-black">Mastered</button>
          <button className="rounded-xl bg-white px-8 py-3 text-black">Almost</button>
          <button className="rounded-xl bg-white px-8 py-3 text-black">Unfamiliar</button>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-10">
        <button
          onClick={() => setIndex((value) => Math.max(1, value - 1))}
          className="rounded-full bg-[#2C267A] px-10 py-6 text-5xl"
        >
          ←
        </button>
        <LearnProgress current={index} total={total} />
        <button
          onClick={() => setIndex((value) => Math.min(total, value + 1))}
          className="rounded-full bg-[#2C267A] px-10 py-6 text-5xl"
        >
          →
        </button>
        </div>
    </div>
  );
}
export default LearnPage;