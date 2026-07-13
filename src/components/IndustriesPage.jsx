import React from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const {
  Plane,
  ShoppingCart,
  Activity,
  Cpu,
  Wrench,
  Leaf,
  Shield,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  Warehouse
} = LucideIcons;

const resolvedIconMap = {
  Plane: Plane || Warehouse,
  ShoppingCart: ShoppingCart || Warehouse,
  Activity: Activity || Warehouse,
  Cpu: Cpu || Warehouse,
  Wrench: Wrench || Warehouse,
  Leaf: Leaf || Warehouse,
  Shield: Shield || Warehouse,
  AlertTriangle: AlertTriangle || Warehouse,
  BookOpen: BookOpen || Warehouse
};

export default function IndustriesPage() {
  const { banner, sectors, beyond, cta } = content.industriesPage;

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = resolvedIconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={22} />;
  };

  const getSectorIconColor = (sectorId) => {
    switch (sectorId) {
      case "automotive-aerospace": return "text-blue-600 bg-blue-50 border-blue-100";
      case "fmcg-retail": return "text-amber-600 bg-amber-50 border-amber-100";
      case "pharma-healthcare": return "text-emerald-600 bg-emerald-50 border-emerald-100";
      case "electronics": return "text-indigo-600 bg-indigo-50 border-indigo-100";
      case "heavy-engineering": return "text-cyan-600 bg-cyan-50 border-cyan-100";
      default: return "text-accent bg-blue-50 border-blue-100";
    }
  };

  const heavyEngineeringSector = sectors.find(s => s.id === "heavy-engineering");
  const otherSectors = sectors.filter(s => s.id !== "heavy-engineering");

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">

      {/* 1. Header Banner Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Backdrop image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/why_choose_us.png"
            alt="Logistics container port backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold tracking-widest text-accent-muted uppercase mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Global Sector Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {banner.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Industry Cards Grid (Sectors Section) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Render first 4 sectors */}
            {otherSectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${getSectorIconColor(sector.id)}`}>
                      {renderIcon(sector.iconName, "current-color")}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                      {sector.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Challenge */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center gap-1.5 text-amber-500">
                      {AlertTriangle ? <AlertTriangle size={14} /> : null}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed pl-5">
                      {sector.challenge}
                    </p>
                  </div>
                </div>

                {/* Case Study Snippet */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-1 text-left mt-auto">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 block">
                    Case Study Snippet
                  </span>
                  <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">
                    {sector.caseStudy}
                  </p>
                </div>
              </div>
            ))}

            {/* Heavy Engineering Card */}
            {heavyEngineeringSector && (
              <div
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${getSectorIconColor(heavyEngineeringSector.id)}`}>
                      {renderIcon(heavyEngineeringSector.iconName, "current-color")}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                      {heavyEngineeringSector.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {heavyEngineeringSector.description}
                  </p>

                  {/* Challenge */}
                  <div className="space-y-1.5 pt-2">
                    <div className="flex items-center gap-1.5 text-amber-500">
                      {AlertTriangle ? <AlertTriangle size={14} /> : null}
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        The Challenge
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed pl-5">
                      {heavyEngineeringSector.challenge}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Heavy Engineering Image Overlay Card */}
            {heavyEngineeringSector && (
              <div
                className="relative aspect-auto rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 flex flex-col justify-end text-left h-full min-h-[320px] md:min-h-[400px] lg:min-h-0"
              >
                <img
                  src={`/images/${heavyEngineeringSector.imageName}`}
                  alt="Heavy industrial crane loading oversized cargo"
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />

                {/* Case Study Snippet Overlay */}
                <div className="relative z-20 p-6 sm:p-8 bg-primary/40 backdrop-blur-sm border border-white/10 m-4 rounded-xl space-y-1.5 shadow-2xl">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-300 block">
                    Case Study Snippet
                  </span>
                  <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                    {heavyEngineeringSector.caseStudy}
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 3. Beyond Transport Panel (Solving Structural Inefficiencies) */}
      <section className="py-20 bg-primary text-white border-b border-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="mb-16 space-y-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-accent-muted uppercase">
              {beyond.subtitle}
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              {beyond.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
          </div>

          {/* Core Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Left tall card (Visibility engine) */}
            <div className="lg:col-span-6 flex">
              <div className="w-full bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 p-8 rounded-2xl flex flex-col justify-end space-y-4 hover:bg-white/[0.05] transition-all duration-300 text-left relative min-h-[280px] lg:min-h-[380px] group overflow-hidden">
                {/* Background Image & Overlay Wrapper */}
                {beyond.cards[0].imageName && (
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
                    <img
                      src={`/images/${beyond.cards[0].imageName}`}
                      alt={beyond.cards[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    <div className="absolute inset-0 bg-[#001729]/80 group-hover:bg-[#001729]/75 transition-colors duration-300" />
                  </div>
                )}

                <div className="relative z-20 space-y-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 text-accent-muted flex items-center justify-center shadow-sm">
                    {renderIcon("Activity", "text-accent-muted")}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white animate-in fade-in duration-300">
                      {beyond.cards[0].title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                      {beyond.cards[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right stacked cards (Compliance + Sustainability & Risk) */}
            <div className="lg:col-span-6 flex flex-col gap-8 justify-between">

              {/* Compliance top card */}
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 p-8 rounded-2xl hover:bg-white/[0.05] transition-all duration-300 text-left space-y-3 flex flex-col justify-center relative overflow-hidden group min-h-[160px]">
                {/* Background Image & Overlay Wrapper */}
                {beyond.cards[1].imageName && (
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
                    <img
                      src={`/images/${beyond.cards[1].imageName}`}
                      alt={beyond.cards[1].title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none"
                    />
                    <div className="absolute inset-0 bg-[#001729]/80 group-hover:bg-[#001729]/75 transition-colors duration-300" />
                  </div>
                )}

                <div className="relative z-20 space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                    {beyond.cards[1].title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {beyond.cards[1].description}
                  </p>
                </div>
              </div>

              {/* Bottom twin row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-grow">
                {beyond.cards.slice(2).map((card) => (
                  <div
                    key={card.id}
                    className="relative overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 transition-all duration-300 hover:bg-white/[0.05] group min-h-[140px]"
                  >
                    {card.imageName && (
                      <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
                        <img
                          src={`/images/${card.imageName}`}
                          alt={card.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none"
                        />
                        <div className="absolute inset-0 bg-[#001729]/85 group-hover:bg-[#001729]/80 transition-colors duration-300" />
                      </div>
                    )}

                    <div className="relative z-20 flex flex-col items-center justify-center space-y-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 text-accent-muted flex items-center justify-center shadow-sm">
                        {renderIcon(card.iconName, "text-accent-muted")}
                      </div>
                      <span className="text-sm font-bold text-white tracking-tight leading-snug">
                        {card.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Partner with Industry Leaders (CTA Banner) */}
      <section className="bg-slate-100/60 py-20 border-t border-slate-200/80 relative overflow-hidden">
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
              variant="primary"
              onClick={() => window.location.hash = "#request-quote"}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg transition-all"
            >
              {cta.primaryCta}
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto bg-white border-slate-300 text-primary hover:bg-slate-50 px-8 py-3 rounded-lg font-bold shadow-sm hover:shadow-md transition-all"
              onClick={() => window.location.hash = "#services-details"}
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
