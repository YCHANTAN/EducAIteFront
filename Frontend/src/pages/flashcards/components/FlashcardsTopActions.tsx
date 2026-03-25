interface FlashcardsTopActionsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function FlashcardsTopActions({
  primaryLabel = 'Add',
  secondaryLabel = 'Learn',
  onPrimaryClick,
  onSecondaryClick,
}: FlashcardsTopActionsProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onPrimaryClick}
        className="rounded-full border border-white/30 px-8 py-3 text-white"
      >
        {primaryLabel}
      </button>
      <button
        onClick={onSecondaryClick}
        className="rounded-full bg-white px-8 py-3 font-medium text-black"
      >
        {secondaryLabel}
      </button>
    </div>
  );
}
export default FlashcardsTopActions;