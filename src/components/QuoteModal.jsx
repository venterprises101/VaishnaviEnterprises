import React, { useState } from "react";
import { X } from "lucide-react";
import { content } from "../data/content";

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { title, description } = content.quoteModal;

  const [iframeHeight, setIframeHeight] = useState(580);
  const [loadCount, setLoadCount] = useState(0);

  const handleIframeLoad = () => {
    setLoadCount((prev) => {
      const next = prev + 1;
      if (next > 1) {
        setIframeHeight(320);
      }
      return next;
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-primary text-white">
          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-slate-200 mt-1">{description}</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body - Embedded Google Form */}
        <div className="p-0 overflow-y-auto flex-1" style={{ minHeight: `${iframeHeight}px` }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSd3BGzJLpINgRyykldSvPx9nVwtyr8yekWmiCYDiHJEOvW8oQ/viewform?embedded=true" 
            width="100%" 
            height={iframeHeight} 
            onLoad={handleIframeLoad}
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="w-full border-0"
            title="Vaishnavi Request a Quote"
          >
            Loading form…
          </iframe>
        </div>
      </div>
    </div>
  );
}
