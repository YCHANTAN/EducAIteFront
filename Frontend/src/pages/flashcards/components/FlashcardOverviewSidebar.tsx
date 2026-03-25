import type { FlashcardStats } from '../types/flashcards';

interface FlashcardOverviewSidebarProps {
  stats: FlashcardStats;
}

export function FlashcardOverviewSidebar({ stats }: FlashcardOverviewSidebarProps) {
  return (
    <aside className="w-full max-w-[280px] space-y-5">
      <div className="rounded-[18px] border border-white/40 p-6 text-white">
        <h2 className="mb-6 text-3xl font-semibold">Flashcard Overview</h2>
        <div className="space-y-4 text-lg text-white/90">
          <p>Total Decks: {stats.totalDecks}</p>
          <p>Total Flashcards: {stats.totalFlashcards}</p>
          <p>Completed Reviews: {stats.completedReviews}</p>
          <p>Active Streak: {stats.activeStreak}</p>
        </div>
      </div>

      <div className="rounded-[18px] border border-white/40 p-5 text-white">
        <h3 className="mb-3 text-lg font-medium text-cyan-400">Accuracy Rate</h3>
        <p className="text-4xl font-semibold">{stats.accuracyRate}%</p>
        <div className="mt-4 space-y-2 text-sm text-white/70">
          <p>Correct Answers: {stats.correctAnswers}</p>
          6<p>Wrong Answers: {stats.wrongAnswers}</p>
          <p>Total Reviewed: {stats.totalReviewed}</p>
        </div>
      </div>

      <div className="rounded-[18px] border border-white/40 p-5 text-white">
        <h3 className="mb-3 text-lg font-medium text-cyan-400">Weekly Summary</h3>
        <div className="space-y-2 text-sm text-white/70">
          <p>Flashcards Reviewed: {stats.weeklyReviewed}</p>
          <p>Accuracy Rate: {stats.weeklyAccuracy}%</p>
          <p>Review Streak: {stats.activeStreak} Days</p>
          <p>Decks Added: {stats.decksAdded}</p>
          <p>Time Spent: {stats.weeklyHours} Hours</p>
        </div>
      </div>
    </aside>
  );
}
export default FlashcardOverviewSidebar;