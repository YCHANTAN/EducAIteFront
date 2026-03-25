interface DeckCardProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
}

export function DeckCard({ title, subtitle, onClick }: DeckCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative min-h-[200px] rounded-[28px] border border-white/40 bg-[#111] p-4 text-left shadow-[0_0_25px_rgba(255,255,255,0.12)] transition hover:scale-[1.01]"
    >
      <div className="absolute inset-x-0 bottom-0 rounded-[28px] border border-white/50 bg-black p-5">
        <h3 className="text-3xl leading-tight font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-white/50">{subtitle}</p>
      </div>
    </button>
  );
}
export default DeckCard;