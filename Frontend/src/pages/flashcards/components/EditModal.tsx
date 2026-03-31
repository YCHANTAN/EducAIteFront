import React, { useState } from 'react';

interface EditModalProps {
  title: string;          
  label: string;          
  initialValue: string;   
  onClose: () => void;
  onSave: (newValue: string) => void;
}

export const EditModal: React.FC<EditModalProps> = ({ 
  title, 
  label, 
  initialValue, 
  onClose, 
  onSave 
}) => {
  const [value, setValue] = useState(initialValue);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="bg-[#0A0A0A] border border-white/10 w-full max-w-md rounded-[40px] p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-white/40 text-sm mb-8 uppercase tracking-widest font-bold">{label}</p>
        
        <input
          autoFocus
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onSave(value)}
          className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white text-lg outline-none focus:border-[#00CEC8]/50 transition-all mb-10"
          placeholder="Type here..."
        />

        <div className="flex gap-4">
          <button 
            onClick={onClose} 
            className="flex-1 px-6 py-4 rounded-full border border-white/10 text-white/60 hover:bg-white/5 hover:text-white transition-all font-semibold"
          >
            Cancel
          </button>
          <button 
            onClick={() => onSave(value)}
            disabled={!value.trim()}
            className="flex-1 px-6 py-4 rounded-full bg-[#00CEC8] text-black font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};