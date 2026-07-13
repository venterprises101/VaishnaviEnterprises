import React from "react";
import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";
import { content } from "../data/content";

export default function Industries() {
  const { title, subtitle, items } = content.industries;

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} size={22} /> : null;
  };

  return (
    <section id="industries" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          <p className="text-slate-300 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((industry, idx) => {
            const colorMap = [
              "text-amber-300 bg-amber-500/10 border-amber-400/20",
              "text-blue-300 bg-blue-500/10 border-blue-400/20",
              "text-emerald-300 bg-emerald-500/10 border-emerald-400/20",
              "text-indigo-300 bg-indigo-500/10 border-indigo-400/20",
              "text-rose-300 bg-rose-500/10 border-rose-400/20",
              "text-purple-300 bg-purple-500/10 border-purple-400/20",
            ];
            const colorClass = colorMap[idx % colorMap.length];
            return (
            <div 
              key={industry.id} 
              className="bg-white/[0.04] backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-2xl p-8 hover:bg-white/[0.08] hover:-translate-y-1.5 transform-gpu transition duration-300 flex flex-col h-full group cursor-default"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition duration-300 shrink-0 group-hover:scale-110 ${colorClass}`}>
                  {renderIcon(industry.iconName, "text-current")}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">
                  {industry.title}
                </h3>
              </div>

              {/* Bullet Points List */}
              <ul className="space-y-3 flex-grow">
                {industry.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 text-accent flex items-center justify-center shrink-0 mt-0.5 transition-colors group-hover:bg-accent/30">
                      <Check size={12} className="stroke-[3]" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
