import React from "react";
import { Settings, Warehouse, FileText, Users, Truck, ArrowRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const iconMap = {
  Settings: Settings,
  Warehouse: Warehouse,
  FileText: FileText,
  Users: Users,
  Truck: Truck
};

export default function ServicesPage({ onOpenQuoteModal }) {
  const { banner, services, cta } = content.servicesPage;

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} size={28} /> : null;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased">
      {/* Banner Header Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        {/* Decorative Grid Overlay & Light Bleed */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

        {/* Background Image Blend */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/why_choose_us.png"
            alt="Industrial backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold tracking-widest text-accent-muted uppercase mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {banner.badge}
          </span>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {banner.title}
          </h1>
          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* Alternating Services Layout Details */}
      <div className="flex-grow">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 border-b border-slate-100 ${isEven ? "bg-white" : "bg-slate-50/50"
                }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"
                  }`}>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 text-left ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}>

                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent-muted text-accent flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
                        {renderIcon(service.iconName, "text-accent")}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-primary">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullets Grid (2 columns on mobile/tablet) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-2">
                      {service.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-accent shrink-0 mt-0.5">
                            <Check size={11} className="stroke-[3.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        variant={service.isDarkButton ? "navy" : "white-navy"}
                        onClick={() => window.location.hash = "#request-specification"}
                        className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-bold shadow-sm border-2"
                      >
                        <span>{service.buttonText}</span>
                        <ArrowRight size={15} />
                      </Button>
                    </div>

                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 flex justify-center ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}>
                    <div className="w-full max-w-lg lg:max-w-none aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-slate-200 transition-all duration-500">
                      <img
                        src={`/images/${service.imageName}`}
                        alt={service.title}
                        className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Call To Action Block */}
      <section className="bg-slate-100/60 py-20 border-t border-slate-200/80 relative overflow-hidden">
        {/* Light grid background accent */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#002b49_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            {cta.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button
              variant="navy"
              onClick={() => window.location.hash = "#request-quote"}
              className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-primary font-bold shadow-md hover:shadow-lg transition-all"
            >
              {cta.primaryCta}
            </Button>
            <Button
              variant="white-navy"
              className="w-full sm:w-auto bg-white border-2 border-primary text-primary px-8 py-3 rounded-lg font-bold shadow-sm hover:shadow-md transition-all"
              onClick={() => window.location.hash = "#request-quote"}
            >
              {cta.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Integrated Page Footer */}
      <Footer />
    </div>
  );
}
