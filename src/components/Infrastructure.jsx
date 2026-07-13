import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { content } from "../data/content";

export default function Infrastructure({ onOpenQuoteModal }) {
  const { title, subtitle, ctaButton, items } = content.infrastructure;

  return (
    <section id="infrastructure" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block with CTA Button Side-by-Side on Desktop */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              {title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              {subtitle}
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <Button
              variant="white-navy"
              onClick={() => window.location.hash = "#request-quote"}
              className="flex items-center gap-2 border-[#001e42] border-2 text-primary font-bold shadow-sm"
            >
              <span>{ctaButton}</span>
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        {/* 2x2 Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((facility) => (
            <div
              key={facility.id}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg group border border-slate-200"
            >
              {/* Image */}
              <img
                src={`/images/${facility.imageName}`}
                alt={facility.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/45 to-transparent transition-opacity duration-300" />

              {/* Text overlay positioned at bottom-left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-left space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {facility.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
