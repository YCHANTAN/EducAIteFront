import type { FlashcardItem } from '../types/flashcards';

interface CardRowProps {
  card: FlashcardItem;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function CardRow({ card, onEdit, onDelete }: CardRowProps) {
  return (
    <div className="rounded-[24px] border border-white/30 bg-black px-4 py-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-3xl font-medium text-white">{card.front}</h3>

          {card.back && (
            <div className="mt-4 inline-block rounded-2xl bg-white/90 px-6 py-3 text-2xl text-cyan-500">
              {card.back}
            </div>
          )}

          {card.options && card.options.length > 0 && (
            <div className="mt-4 inline-block rounded-2xl bg-white/90 px-4 py-3 text-2xl text-cyan-500">
              {card.options.map((option) => (
                <div key={option.id}>{option.text}</div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button onClick={onEdit} className="text-white/70 hover:text-white">Edit</button>
          <button onClick={onDelete} className="text-red-400 hover:text-red-300">Delete</button>
        </div>
      </div>
    </div>
  );
}
export default CardRow;