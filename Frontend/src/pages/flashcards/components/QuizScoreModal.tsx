interface QuizScoreModalProps {
  score: number;
  message: string;
  onClose: () => void;
}

export function QuizScoreModal({ score, message, onClose }: QuizScoreModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-2xl rounded-[28px] bg-black p-10 text-center shadow-[0_0_50px_rgba(255,255,255,0.25)]">
        <h2 className="text-5xl font-semibold text-white">Your score on the Technical Programming quiz</h2>
        <div className="my-10 text-7xl font-bold text-cyan-400">{score}%</div>
        <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-white/90">{message}</p>
        <button onClick={onClose} className="mt-10 rounded-full bg-white px-12 py-3 text-black">
          Confirm
        </button>
      </div>
    </div>
  );
}
export default QuizScoreModal;