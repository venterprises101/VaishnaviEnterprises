import React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { content } from "../data/content";

export default function Quote() {
  const { text } = content.quote;

  return (
    <section className="bg-slate-50 py-16 md:py-24 border-y border-slate-100 relative overflow-hidden">
      {/* Decorative quote icon background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <QuoteIcon size={400} className="text-primary" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
        {/* Quote symbol */}
        <div className="inline-flex justify-center text-slate-300">
          <QuoteIcon size={48} className="fill-current text-slate-300/60" />
        </div>

        {/* Quote Text */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight leading-snug">
          "{text}"
        </blockquote>
      </div>
    </section>
  );
}
