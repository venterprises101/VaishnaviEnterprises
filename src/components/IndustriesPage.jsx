import { 
  ShoppingBag, 
  Coffee, 
  Car, 
  Cpu, 
  PlusCircle, 
  Package, 
  TrendingUp, 
  Check, 
  CheckCircle2, 
  Warehouse,
  AlertCircle,
  Leaf,
  Shield
} from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const iconMap = {
  ShoppingBag: ShoppingBag,
  Coffee: Coffee,
  Car: Car,
  Cpu: Cpu,
  PlusCircle: PlusCircle,
  Package: Package,
  TrendingUp: TrendingUp
};

export default function IndustriesPage() {
  const { banner, sectors, whyChooseUs, cta } = content.industriesPage;

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = iconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={22} />;
  };

  const getSectorIconColor = (sectorId) => {
    switch (sectorId) {
      case "fmcg": return "text-amber-600 bg-amber-50 border-amber-100/50";
      case "food-beverage": return "text-orange-600 bg-orange-50 border-orange-100/50";
      case "automotive-components": return "text-blue-600 bg-blue-50 border-blue-100/50";
      case "electrical-electronics": return "text-indigo-600 bg-indigo-50 border-indigo-100/50";
      case "pharma-healthcare": return "text-emerald-600 bg-emerald-50 border-emerald-100/50";
      case "consumer-goods": return "text-purple-600 bg-purple-50 border-purple-100/50";
      case "retail-distribution": return "text-rose-600 bg-rose-50 border-rose-100/50";
      default: return "text-accent bg-blue-50 border-blue-100";
    }
  };

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
             {sectors.map((sector) => (
              <div
                key={sector.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left space-y-6 group cursor-default h-full"
              >
                <div className="space-y-5">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${getSectorIconColor(sector.id)}`}>
                      {renderIcon(sector.iconName, "current-color")}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                      {sector.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>

                  {/* How We Support List */}
                  <div className="space-y-2.5 pt-2">
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider border-b border-slate-100 pb-1.5">
                      How We Support
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {sector.howWeSupport.map((support, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-blue-50 text-accent flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                            <Check size={10} className="stroke-[3.5]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                            {support}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Businesses Choose Us Section */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Why Businesses Choose Us
            </h2>
            <div className="h-1.5 w-12 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Leading manufacturing units choose Vaishnavi Enterprises for reliability, speed, and standard operating compliance.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 hover:border-emerald-200/80 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transform-gpu transition duration-300 text-left group cursor-default border-l-4 border-l-slate-200 hover:border-l-emerald-500"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <CheckCircle2 size={16} className="stroke-[3] transition-transform group-hover:scale-110" />
                </div>
                <span className="text-sm font-bold text-slate-700 leading-tight transition-colors group-hover:text-primary">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Transport Section (Solving Structural Inefficiencies) */}
      <section className="py-24 bg-primary text-white border-b border-slate-900 overflow-hidden relative">
        {/* Subtle grid accent */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-accent-muted tracking-widest uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Beyond Transport
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Solving Structural Inefficiencies
            </h2>
            <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
          </div>

          {/* Grid Layout matching the image exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left tall card: Real-time Visibility Engine */}
            <div className="lg:col-span-6 flex">
              <div className="w-full relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg group min-h-[380px] lg:min-h-[450px] flex flex-col justify-end text-left">
                {/* Background Image */}
                <img 
                  src="/images/visibility_engine.png" 
                  alt="Real-time Visibility Engine" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                />
                {/* Primary Color Overlay */}
                <div className="absolute inset-0 bg-[#001e42]/85 group-hover:bg-[#001e42]/80 transition-colors duration-300 z-10" />
                
                {/* Content */}
                <div className="relative z-20 p-8 sm:p-10 space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Real-time Visibility Engine
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                    Our proprietary platform provides granular tracking for complex multi-leg journeys, allowing for proactive disruption management.
                  </p>
                </div>
              </div>
            </div>

            {/* Right container with top wide card and bottom twin cards */}
            <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
              {/* Right Top Card: Regulatory Compliance */}
              <div className="w-full relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg group min-h-[210px] flex flex-col justify-center text-left p-8 sm:p-10">
                {/* Background Image */}
                <img 
                  src="/images/regulatory_compliance.png" 
                  alt="Regulatory Compliance" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                />
                {/* Primary Color Overlay */}
                <div className="absolute inset-0 bg-[#001e42]/85 group-hover:bg-[#001e42]/80 transition-colors duration-300 z-10" />

                {/* Content */}
                <div className="relative z-20 space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    Regulatory Compliance
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                    Deep understanding of global trade regulations, customs clearance, and industry-specific audits like GXP and ISO.
                  </p>
                </div>
              </div>

              {/* Right Bottom Twin Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-grow">
                {/* Card 3: Sustainable Logistics */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg group min-h-[180px] flex flex-col items-center justify-center p-6 text-center">
                  {/* Background Image */}
                  <img 
                    src="/images/sustainable_logistics.png" 
                    alt="Sustainable Logistics" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                  />
                  {/* Dark slate wash overlay */}
                  <div className="absolute inset-0 bg-[#1e293b]/90 group-hover:bg-[#1e293b]/85 transition-colors duration-300 z-10" />

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center space-y-3">
                    <Leaf size={28} className="text-white transform group-hover:rotate-6 transition-transform duration-300" />
                    <span className="text-base font-bold text-white tracking-tight">
                      Sustainable Logistics
                    </span>
                  </div>
                </div>

                {/* Card 4: Risk Mitigation */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg group min-h-[180px] flex flex-col items-center justify-center p-6 text-center">
                  {/* Background Image */}
                  <img 
                    src="/images/risk_mitigation.png" 
                    alt="Risk Mitigation" 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
                  />
                  {/* Primary Color Overlay */}
                  <div className="absolute inset-0 bg-[#0b1f38]/90 group-hover:bg-[#0b1f38]/85 transition-colors duration-300 z-10" />

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center space-y-3">
                    <Shield size={28} className="text-white transform group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-base font-bold text-white tracking-tight">
                      Risk Mitigation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Let's Build a Smarter Supply Chain Together Section */}
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
