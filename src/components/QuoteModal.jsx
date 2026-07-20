import React, { useEffect } from "react";
import { X } from "lucide-react";
import { content } from "../data/content";

export default function QuoteModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      // Lock both html and body to prevent any background scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const { title, description } = content.quoteModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100 h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - fixed height, never shrinks */}
        <div className="flex-shrink-0 p-4 sm:p-6 border-b border-slate-100 flex items-start justify-between bg-primary text-white">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">{description}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Google Form iframe — takes remaining height, scrolls internally only */}
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSd3BGzJLpINgRyykldSvPx9nVwtyr8yekWmiCYDiHJEOvW8oQ/viewform?embedded=true" 
          style={{ flex: 1, minHeight: 0, width: "100%", border: "none", display: "block" }}
          scrolling="yes"
          frameBorder="0" 
          marginHeight="0" 
          marginWidth="0"
          title="Vaishnavi Request a Quote"
        >
          Loading form…
        </iframe>
      </div>
    </div>
  );
}
