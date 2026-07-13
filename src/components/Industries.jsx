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
          {items.map((industry) => (
            <div 
              key={industry.id} 
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex flex-col h-full group"
            >
              {/* Header: Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 rounded-xl bg-white/10 text-accent group-hover:bg-accent group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0">
                  {renderIcon(industry.iconName)}
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {industry.title}
                </h3>
              </div>

              {/* Bullet Points List */}
              <ul className="space-y-3 flex-grow">
                {industry.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-accent/20 border border-accent/30 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="stroke-[3]" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
