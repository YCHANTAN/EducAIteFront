import type { ReactNode } from 'react';

interface ModalShellProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export function ModalShell({ title, children, onClose }: ModalShellProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-xl rounded-[28px] border border-white/20 bg-black p-6 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <button onClick={onClose} className="text-2xl text-white/80 hover:text-white">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
export default ModalShell;