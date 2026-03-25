import { ModalShell } from './ModalShell';

interface ImportModalProps {
  onClose: () => void;
}

export function ImportModal({ onClose }: ImportModalProps) {
  return (
    <ModalShell title="Imports file" onClose={onClose}>
      <div className="space-y-5 text-white">
        <div className="rounded-[24px] border border-dashed border-white/40 p-10 text-center text-white/70">
          Drag and drop files here or choose files
        </div>
        <input
          placeholder="Paste Youtube, PDF or web URL"
          className="w-full rounded-full bg-white/90 px-4 py-3 text-black outline-none"
        />
        <button className="w-full rounded-full bg-white py-3 font-medium text-black">
          Continue
        </button>
      </div>
    </ModalShell>
  );
}
export default ImportModal;