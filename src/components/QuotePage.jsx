import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const { 
  Factory, 
  Settings, 
  Layers, 
  Warehouse, 
  ClipboardList, 
  Barcode, 
  Box, 
  Dolly, 
  Truck, 
  Phone, 
  Mail, 
  MessageSquare, 
  Check, 
  CheckCircle2, 
  ArrowRight,
  UserCheck
} = LucideIcons;

// Safe icon resolutions to avoid missing icons
const resolvedIconMap = {
  Factory: Factory || Warehouse,
  Settings: Settings || Factory,
  Layers: Layers || Settings,
  Warehouse: Warehouse,
  ClipboardList: ClipboardList || Warehouse,
  Barcode: Barcode || ClipboardList,
  Box: Box || Warehouse,
  Dolly: Dolly || Truck,
  Truck: Truck
};

export default function QuotePage() {
  const { 
    banner, 
    whyComplete, 
    whatYouCanRequest, 
    sidebar, 
    process, 
    confidentialityNote, 
    trustedMarquee 
  } = content.quotePage;

  const [iframeHeight, setIframeHeight] = useState(680);
  const [loadCount, setLoadCount] = useState(0);

  const handleIframeLoad = () => {
    setLoadCount((prev) => {
      const next = prev + 1;
      if (next > 1) {
        setIframeHeight(350);
      }
      return next;
    });
  };

  const renderRequestIcon = (iconName, className = "text-primary") => {
    const IconComponent = resolvedIconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={20} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      
      {/* Top Header Banner Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="/images/logistic.png" 
            alt="Warehouse backdrop" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 max-w-4xl leading-tight text-white">
            {banner.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form Content & Sidebar Section */}
      <section className="py-16 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Form Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Why Complete This Form Block */}
              <div className="reveal-stagger-item hover-lift bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 text-left space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {whyComplete.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {whyComplete.description}
                </p>
              </div>

              {/* What You Can Request Block */}
              <div className="reveal-stagger-item space-y-6 text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {whatYouCanRequest.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {whatYouCanRequest.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="reveal-stagger-item hover-lift bg-white border border-slate-100 hover:border-emerald-200/80 rounded-xl p-4 flex items-center gap-4 text-left group cursor-default border-l-4 border-l-slate-200 hover:border-l-emerald-500"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                        {renderRequestIcon(item.iconName, "transition-transform group-hover:scale-110 text-emerald-500 group-hover:text-white")}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight transition-colors group-hover:text-primary">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Requirement Form Block */}
              <div className="reveal-stagger-item hover-lift bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden text-left">
                <div className="bg-primary text-white p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold">Project Requirement Form</h2>
                  <p className="text-slate-200 text-xs sm:text-sm mt-2">
                    Submit your requirement details below, and our supply chain experts will prepare a customized proposal.
                  </p>
                </div>
                
                <div className="relative w-full overflow-hidden" style={{ minHeight: `${iframeHeight}px` }}>
                  <iframe 
                    src="https://docs.google.com/forms/d/e/1FAIpQLSd3BGzJLpINgRyykldSvPx9nVwtyr8yekWmiCYDiHJEOvW8oQ/viewform?embedded=true" 
                    width="100%" 
                    height={iframeHeight} 
                    onLoad={handleIframeLoad}
                    frameBorder="0" 
                    marginHeight="0" 
                    marginWidth="0"
                    className="w-full border-0"
                    title="Vaishnavi Project Requirement Form"
                  >
                    Loading form…
                  </iframe>
                </div>
              </div>

              {/* Our Process Section */}
              <div className="reveal-stagger-item space-y-6 text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center lg:text-left">
                  {process.title}
                </h2>
                <div className="relative mt-8">
                  {/* Horizontal Connector Line (Desktop/Tablet) */}
                  <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

                  {/* Vertical Connector Line (Mobile) */}
                  <div className="md:hidden absolute top-[28px] bottom-[28px] left-[20px] w-0.5 bg-slate-200 z-0" />

                  {/* Steps Container */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
                    {process.steps.map((step, idx) => (
                      <div
                        key={idx}
                        className="reveal-stagger-item flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
                      >
                        {/* Node (Number Circle) */}
                        <div className="flex justify-center shrink-0 mr-4 md:mr-0 md:mb-6">
                          <div className="w-14 h-14 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center border-4 border-white shadow-md group-hover:bg-[#001e42]/90 group-hover:scale-110 transition-all duration-300">
                            {step.number}
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-2 pt-1 md:pt-0">
                          <h3 className="text-xs sm:text-sm font-bold text-primary tracking-tight block md:mx-auto max-w-[120px]">
                            {step.label}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 text-center leading-relaxed max-w-2xl mx-auto pt-8">
                  {confidentialityNote}
                </p>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8 text-left">
              
              {/* Why Choose Us Sidebar Widget */}
              <div className="reveal-stagger-item hover-lift bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-primary tracking-tight">
                  Why Choose Us
                </h3>
                <div className="space-y-3">
                  {sidebar.whyChooseUs.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="hover-lift bg-white border border-slate-100 hover:border-emerald-200/80 rounded-xl p-4 flex items-center gap-4 text-left group cursor-default border-l-4 border-l-slate-200 hover:border-l-emerald-500"
                    >
                      <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                        <CheckCircle2 size={16} className="stroke-[3] transition-transform group-hover:scale-110" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-tight transition-colors group-hover:text-primary">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support Sidebar Widget */}
              <div className="reveal-stagger-item hover-lift bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-150 flex items-center justify-center text-primary shadow-inner">
                    {UserCheck ? <UserCheck size={28} /> : <Warehouse size={28} />}
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-primary tracking-tight">
                    {sidebar.contactSupport.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Connect directly with our solutions managers.
                  </p>
                </div>
                
                <div className="space-y-3 pt-2 text-left">
                  {/* Call Button */}
                  <a 
                    href={`tel:${sidebar.contactSupport.phone.replace(/\s+/g, '')}`}
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-primary border-2 border-primary text-white hover:bg-white hover:text-primary rounded-lg shadow-sm transition-all duration-300"
                  >
                    {Phone ? <Phone size={15} /> : null}
                    <span>Call Us</span>
                  </a>
                  
                  {/* Email Button */}
                  <a 
                    href={`mailto:${sidebar.contactSupport.email}`}
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg shadow-sm transition-all duration-300"
                  >
                    {Mail ? <Mail size={15} /> : null}
                    <span>Email Us</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a 
                    href={sidebar.contactSupport.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-emerald-500 border-2 border-emerald-500 text-white hover:bg-white hover:text-emerald-500 rounded-lg shadow-sm transition-all duration-300"
                  >
                    {MessageSquare ? <MessageSquare size={15} /> : null}
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Infinite Scrolling Marquee Section */}
      <section className="bg-slate-100/60 border-t border-slate-200/80 py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 mb-5 text-center">
          <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
            {trustedMarquee.title}
          </span>
        </div>
        
        {/* Infinite Scrolling Loop */}
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          {/* Shadow Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-100/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-100/90 to-transparent z-10 pointer-events-none" />

          <div className="reveal-fade animate-marquee flex items-center py-2">
            {/* Copy 1 */}
            <div className="flex items-center shrink-0">
              {trustedMarquee.logos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className="mr-24 h-12 flex items-center justify-center shrink-0 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={`/images/${logo.image}`} 
                    alt={logo.name} 
                    className="h-full object-contain max-w-[150px] sm:max-w-[170px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {/* Copy 2 */}
            <div className="flex items-center shrink-0">
              {trustedMarquee.logos.map((logo, idx) => (
                <div 
                  key={`dup1-${idx}`} 
                  className="mr-24 h-12 flex items-center justify-center shrink-0 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={`/images/${logo.image}`} 
                    alt={logo.name} 
                    className="h-full object-contain max-w-[150px] sm:max-w-[170px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {/* Copy 3 */}
            <div className="flex items-center shrink-0">
              {trustedMarquee.logos.map((logo, idx) => (
                <div 
                  key={`dup2-${idx}`} 
                  className="mr-24 h-12 flex items-center justify-center shrink-0 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={`/images/${logo.image}`} 
                    alt={logo.name} 
                    className="h-full object-contain max-w-[150px] sm:max-w-[170px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            {/* Copy 4 */}
            <div className="flex items-center shrink-0">
              {trustedMarquee.logos.map((logo, idx) => (
                <div 
                  key={`dup3-${idx}`} 
                  className="mr-24 h-12 flex items-center justify-center shrink-0 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <img 
                    src={`/images/${logo.image}`} 
                    alt={logo.name} 
                    className="h-full object-contain max-w-[150px] sm:max-w-[170px]"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Page Footer */}
      <Footer />
      
    </div>
  );
}
