import { useState } from 'react';
import { ModalShell } from './ModalShell';

interface AddDeckModalProps {
  onClose: () => void;
  onSubmit: (payload: { title: string; color?: string }) => void;
}

const colors = ['#e88f92', '#8b5cf6', '#b9f1eb', '#a3c586', '#6d94f3', '#d7ef67', '#e34fb1'];

export function AddDeckModal({ onClose, onSubmit }: AddDeckModalProps) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState<string | undefined>();

  return (
    <ModalShell title="Add deck" onClose={onClose}>
      <div className="space-y-6 text-white">
        <div>
          <label className="mb-2 block text-sm text-white/70">Deck name</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-full border border-white/30 bg-transparent px-4 py-3 outline-none"
          />
        </div>

        <div>
          <p className="mb-3 text-sm text-white/70">Choose a color</p>
          <div className="flex flex-wrap gap-3">
            {colors.map((item) => (
              <button
                key={item}
                onClick={() => setColor(item)}
                className="h-10 w-10 rounded-full border border-white/20"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => onSubmit({ title, color })}
          className="w-full rounded-full bg-white py-3 font-medium text-black"
        >
          Add deck
        </button>
      </div>
    </ModalShell>
  );
}
export default AddDeckModal;