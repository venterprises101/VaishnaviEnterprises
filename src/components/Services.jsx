import React from "react";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { content } from "../data/content";

export default function Services() {
  const { title, subtitle, items } = content.services;

  // Helper to dynamically render Lucide icons
  const renderIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} size={24} /> : null;
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            {title}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((service) => {
            const serviceLinkMap = {
              "warehousing": "#services-details-3pl-warehousing",
              "supply-chain": "#services-details-dispatch-logistics",
              "contract-mfg": "#services-details-contract-mfg",
              "job-work": "#services-details-contract-mfg",
            };
            const linkHref = serviceLinkMap[service.id] || "#services-details";

            return (
              <Card 
                key={service.id} 
                className="border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group"
              >
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-primary group-hover:bg-accent-muted group-hover:text-accent flex items-center justify-center mb-6 transition-colors duration-300">
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Read More link */}
                  <a 
                    href={linkHref} 
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-800 hover:text-accent transition-colors mt-auto group/link"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
