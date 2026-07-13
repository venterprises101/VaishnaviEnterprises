import React from "react";
import * as LucideIcons from "lucide-react";
import { content } from "../data/content";

export default function WhyChooseUs() {
  const { title, subtitle, items } = content.whyChooseUs;

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} size={20} /> : null;
  };

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Banner Image */}
        <div className="w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 mb-16 relative">
          <img
            src="/images/why_choose_us.png"
            alt="Organized aisles inside Vaishnavi warehouse facility"
            className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            {title}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Features Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => {
            const colorMap = [
              "text-amber-600 bg-amber-50 border-amber-100/50",
              "text-blue-600 bg-blue-50 border-blue-100/50",
              "text-emerald-600 bg-emerald-50 border-emerald-100/50",
              "text-indigo-600 bg-indigo-50 border-indigo-100/50",
            ];
            const colorClass = colorMap[idx % colorMap.length];
            return (
              <div 
                key={item.id} 
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1.5 transform-gpu transition duration-300 flex flex-col space-y-4 group cursor-default"
              >
                {/* Icon & Title row */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-transform group-hover:scale-110 ${colorClass}`}>
                    {renderIcon(item.iconName, "text-current")}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
