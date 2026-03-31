import React from 'react';

interface DeleteProps {
  title: string;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteConfirmationModal: React.FC<DeleteProps> = ({ title, onClose, onConfirm }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
    <div className="bg-[#0A0A0A] border border-red-500/20 w-full max-w-sm rounded-[32px] p-8 text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl">⚠️</span>
      </div>
      <h2 className="text-xl font-bold mb-2 text-white">Delete this item?</h2>
      <p className="text-white/50 mb-8 break-words">"{title}" will be gone forever.</p>
      
      <div className="flex flex-col gap-3">
        <button 
          onClick={onConfirm} 
          className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold transition-all"
        >
          Yes, Delete
        </button>
        <button 
          onClick={onClose} 
          className="w-full py-4 text-white/40 hover:text-white transition-all font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
);