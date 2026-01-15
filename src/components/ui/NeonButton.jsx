import React from 'react';

const NeonButton = ({ children, onClick, active, className }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 border border-matrix-green transition-all duration-300 relative overflow-hidden group
      ${active ? 'bg-matrix-green text-matrix-dark shadow-[0_0_15px_#00ff00]' : 'text-matrix-green hover:shadow-[0_0_10px_#00ff00]'} 
      ${className}`}
    >
        <span className="relative z-10">{children}</span>
        <div className={`absolute inset-0 bg-matrix-green/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
    </button>
);

export default NeonButton;
