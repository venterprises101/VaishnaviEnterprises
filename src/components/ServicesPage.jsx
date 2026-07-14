import { 
  Settings, 
  Warehouse, 
  FileText, 
  Users, 
  Truck, 
  ArrowRight, 
  Check, 
  Layers, 
  Barcode, 
  PlusCircle,
  ShoppingBag,
  Coffee,
  Package,
  Car,
  Cpu,
  TrendingUp,
  Factory,
  ShieldCheck,
  CheckCircle2,
  Award
} from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const iconMap = {
  Settings: Settings,
  Warehouse: Warehouse,
  FileText: FileText,
  Users: Users,
  Truck: Truck,
  Layers: Layers,
  Barcode: Barcode,
  PlusCircle: PlusCircle
};

const industryIconMap = {
  "FMCG": ShoppingBag,
  "Food & Beverage": Coffee,
  "Consumer Goods": Package,
  "Automotive Components": Car,
  "Electrical & Electronics": Cpu,
  "Pharmaceuticals": PlusCircle,
  "Retail & Distribution": TrendingUp,
  "Manufacturing": Factory
};

export default function ServicesPage({ onOpenQuoteModal }) {
  const { banner, services, industriesSupported, whyChooseUs, cta } = content.servicesPage;

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className={className} size={26} /> : null;
  };

  const renderIndustryIcon = (industryName, className = "text-primary") => {
    const IconComponent = industryIconMap[industryName];
    return IconComponent ? <IconComponent className={className} size={20} /> : <Package className={className} size={20} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased">
      {/* Banner Header Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        {/* Decorative Grid Overlay & Light Bleed */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

        {/* Background Image Blend */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/warehouse_agv.png"
            alt="Industrial backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
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
              className={`py-20 border-b border-slate-100 ${isEven ? "bg-white" : "bg-slate-50/50"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 text-left ${isEven ? "lg:order-1 reveal-left" : "lg:order-2 reveal-right"}`}>

                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent-muted text-accent flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
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

                    {/* Equipment Section (if present) */}
                    {service.equipment && (
                      <div className="bg-amber-50/40 border border-amber-100/50 rounded-xl p-4 space-y-2.5">
                        <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          Equipment Fleet
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service.equipment.map((equip, idx) => (
                            <span key={idx} className="text-xs bg-white text-slate-700 border border-amber-200 px-2.5 py-1 rounded-md font-bold shadow-xs">
                              {equip}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Services Included & Benefits Layout Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-2">
                      {/* Included Services Column (7 cols) */}
                      <div className="sm:col-span-7 space-y-3">
                        <h4 className="text-xs font-bold text-primary uppercase tracking-wider border-b border-slate-100 pb-1.5">
                          Services Include
                        </h4>
                        <div className="space-y-2">
                          {(service.includedServices || service.bullets || []).map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="w-4 h-4 rounded-full bg-accent-muted text-accent flex items-center justify-center shrink-0 mt-0.5">
                                <Check size={10} className="stroke-[3.5]" />
                              </div>
                              <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-tight">
                                {bullet}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits Column (5 cols) */}
                      <div className="sm:col-span-5">
                        <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-xl p-4 space-y-3">
                          <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider border-b border-emerald-100 pb-1.5 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0 mt-2" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Button
                        variant={service.isDarkButton ? "navy" : "white-navy"}
                        onClick={onOpenQuoteModal}
                        className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg font-bold shadow-sm border-2"
                      >
                        <span>{service.buttonText}</span>
                        <ArrowRight size={15} />
                      </Button>
                    </div>

                  </div>

                  {/* Image Column */}
                  <div className={`lg:col-span-6 flex justify-center self-center ${isEven ? "lg:order-2 reveal-right" : "lg:order-1 reveal-left"}`}>
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

      {/* Industries We Support Section */}
      <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">
        {/* Subtle background mesh gradient for texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="reveal-up text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full">
              Sectors Covered
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Industries We Support
            </h2>
            <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Providing specialized, compliance-ready supply chain support across diverse industrial sectors.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industriesSupported.map((industry, idx) => (
              <div 
                key={idx}
                className="reveal-stagger-item hover-lift bg-white border border-slate-100 hover:border-primary/20 rounded-2xl p-6 flex flex-col items-center text-center group cursor-default relative overflow-hidden"
              >
                {/* Border Hover Accent Line */}
                <div className="absolute top-0 inset-x-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 flex items-center justify-center shadow-xs transition-all duration-300 mb-4">
                  {renderIndustryIcon(industry, "transition-transform group-hover:scale-110 duration-300")}
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight transition-colors group-hover:text-primary">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100 relative overflow-hidden">
        {/* Subtle secondary geometric background decoration */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(45deg,#001e42_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="reveal-up text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Why Choose Us?
            </h2>
            <div className="h-1.5 w-12 bg-emerald-500 mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Proven excellence, scalable infrastructure, and technology-driven operations designed for absolute velocity.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div 
                key={idx}
                className="reveal-stagger-item hover-lift bg-white border border-slate-100 hover:border-emerald-200/80 rounded-xl p-5 flex items-center gap-4 text-left group cursor-default relative overflow-hidden border-l-4 border-l-slate-200 hover:border-l-emerald-500"
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

      {/* Bottom Call To Action Block */}
      <section className="bg-slate-100/60 py-20 border-t border-slate-200/80 relative overflow-hidden">
        {/* Light grid background accent */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#002b49_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="reveal-up max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
            {cta.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Button
              variant="navy"
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-primary font-bold shadow-md hover:shadow-lg transition-all"
            >
              {cta.primaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* Integrated Page Footer */}
      <Footer />
    </div>
  );
}
