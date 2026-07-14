import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { content } from "../data/content";

export default function CTA({ onOpenQuoteModal }) {
  const { title, subtitle, ctaButton } = content.cta;

  return (
    <section className="bg-gradient-to-br from-primary via-[#00223A] to-primary text-white py-20 relative overflow-hidden">
      {/* Decorative dots grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          
          {/* Text block */}
          <div className="reveal-left space-y-4 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Action button */}
          <div className="reveal-right shrink-0">
            <Button 
              variant="white-navy" 
              size="lg"
              onClick={() => window.location.hash = "#request-quote"}
              className="font-bold px-8 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:border-white"
            >
              <span>{ctaButton}</span>
              <ArrowRight size={18} />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
