import { useFlashcards } from '../hooks/useFlashcards';

export function PerformancePage() {
  const { quizResult } = useFlashcards();

  return (
    <div className="min-h-screen bg-black px-8 py-10 text-white">
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-center text-6xl font-semibold text-cyan-400">Overall Performance</h1>
        <button className="rounded-full bg-white px-8 py-3 text-black">Back to lesson</button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] border border-white/20 p-6">
          <p className="text-5xl font-semibold text-cyan-400">{quizResult.totalResponses}</p>
          <p className="mt-3 text-2xl">Total Responses</p>
        </div>
        <div className="rounded-[24px] border border-white/20 p-6">
          <p className="text-5xl font-semibold text-cyan-400">{quizResult.highestScore}%</p>
          <p className="mt-3 text-2xl">Highest Score</p>
        </div>
        <div className="rounded-[24px] border border-white/20 p-6">
          <p className="text-5xl font-semibold text-cyan-400">{quizResult.lowestScore}%</p>
          <p className="mt-3 text-2xl">Lowest Score</p>
        </div>
        <div className="rounded-[24px] border border-white/20 p-6">
          <p className="text-5xl font-semibold text-cyan-400">{quizResult.mediumScore}%</p>
          <p className="mt-3 text-2xl">Medium Score</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.35fr_1fr]">
        <div className="rounded-[24px] border border-white/20 p-6">
          <div className="flex min-h-[420px] items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-cyan-300/90 shadow-[0_0_40px_rgba(103,232,249,0.35)]" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[24px] border border-white/20 p-6">
            <h2 className="mb-4 text-3xl font-medium">Your score on the Technical Programming quiz</h2>
            <div className="text-7xl font-bold text-cyan-400">{quizResult.finalScore}%</div>
          </div>

          <div className="rounded-[24px] border border-white/20 p-6">
            <h3 className="mb-4 text-3xl font-medium text-cyan-400">AI Insights:</h3>
            <p className="text-xl leading-relaxed text-white/80">{quizResult.insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PerformancePage;