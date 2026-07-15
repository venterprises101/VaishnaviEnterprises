import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { content } from "../data/content";

export default function Infrastructure({ onOpenQuoteModal }) {
  const { title, subtitle, ctaButton, items } = content.infrastructure;

  // items[0] = Gujarat Hub (large), items[1] = Baddi Lab (small)
  // items[2] = Loading Docks (small), items[3] = Cold Storage (large)
  const [hub, lab, docks, cold] = items;

  const Tile = ({ item, className = "" }) => (
    <div className={`reveal-stagger-item hover-lift relative overflow-hidden rounded-2xl shadow-lg group border border-slate-200/50 ${className}`}>
      {/* Background Image */}
      <img
        src={`/images/${item.imageName}`}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#001830]/90 via-[#001830]/30 to-transparent" />

      {/* Text — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-left space-y-1">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="infrastructure" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="reveal-up flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-4 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
              {title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="shrink-0">
            <Button
              variant="white-navy"
              onClick={() => window.location.hash = "#request-quote"}
              className="flex items-center gap-2 border-[#001e42] border-2 text-primary font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
            >
              <span>{ctaButton}</span>
              <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>

        {/* Asymmetric Image Grid */}
        <div className="flex flex-col gap-4">

          {/* Row 1: Large (left, ~65%) + Small (right, ~35%) */}
          <div className="flex flex-col sm:flex-row gap-4 h-[300px] sm:h-[360px]">
            <Tile item={hub} className="flex-[2] min-w-0" />
            <Tile item={lab} className="flex-[1] min-w-0" />
          </div>

          {/* Row 2: Small (left, ~35%) + Large (right, ~65%) */}
          <div className="flex flex-col sm:flex-row gap-4 h-[280px] sm:h-[300px]">
            <Tile item={docks} className="flex-[1] min-w-0" />
            <Tile item={cold} className="flex-[2] min-w-0" />
          </div>

        </div>

      </div>
    </section>
  );
}
