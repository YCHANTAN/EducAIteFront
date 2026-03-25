import { ModalShell } from './ModalShell';

interface ExportModalProps {
  fileName: string;
  onClose: () => void;
  onExport?: () => void;
}

export function ExportModal({ fileName, onClose, onExport }: ExportModalProps) {
  return (
    <ModalShell title="Export file" onClose={onClose}>
      <div className="space-y-8 text-center text-white">
        <div className="text-xl">{fileName}</div>
        <button
          onClick={onExport}
          className="w-full rounded-full bg-white py-3 font-medium text-black"
        >
          Export
        </button>
      </div>
    </ModalShell>
  );
}
export default ExportModal;