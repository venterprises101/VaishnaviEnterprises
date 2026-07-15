import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  TrendingUp, 
  Package, 
  Factory, 
  Wrench, 
  Shield, 
  BarChart2, 
  Users, 
  Map, 
  AlertTriangle, 
  ChevronDown, 
  Info, 
  PhoneCall, 
  MessageSquare,
  Warehouse,
  ArrowUpRight
} = LucideIcons;

const iconMap = {
  MapPin: MapPin || Warehouse,
  Phone: Phone || Warehouse,
  Mail: Mail || Warehouse,
  Clock: Clock || Warehouse,
  CheckCircle: CheckCircle || Warehouse,
  TrendingUp: TrendingUp || Warehouse,
  Package: Package || Warehouse,
  Factory: Factory || Warehouse,
  Wrench: Wrench || Warehouse,
  Shield: Shield || Warehouse,
  BarChart2: BarChart2 || Warehouse,
  Users: Users || Warehouse
};

export default function ContactPage() {
  const { banner, cards, form, partnerships, map: mapDetails, faqs } = content.contactPage;
  const { process } = content.quotePage; // Reuse the onboarding operational process steps

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

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

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = iconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={22} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      
      {/* 1. Header Banner Section */}
      <section className="relative pt-36 pb-28 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        {/* Backdrop image */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="/images/hero_bg.png" 
            alt="Automated warehouse storage lanes" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="reveal-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold tracking-widest text-accent-muted uppercase mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Connect With Vaishnavi
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {banner.title}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Four Contact Cards Section */}
      <section className="py-12 bg-white border-b border-slate-100 -mt-6 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Head Office */}
            <div 
              onClick={() => window.open(cards[0].mapUrl || "https://www.google.com/maps?q=30.931992,76.833513", "_blank")}
              className="reveal-stagger-item hover-lift bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between text-left space-y-5 group cursor-pointer hover:shadow-md h-full transition duration-300"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent flex items-center justify-center border border-blue-100/50 transition-transform group-hover:scale-105">
                  {renderIcon("MapPin", "text-accent")}
                </div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                  {cards[0].title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {cards[0].description}
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(cards[0].mapUrl || "https://www.google.com/maps?q=30.931992,76.833513", "_blank");
                }}
                className="w-full bg-white border-slate-300 text-primary hover:bg-primary hover:text-white hover:border-primary text-xs py-2 rounded-lg font-bold hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
              >
                {cards[0].buttonText}
              </Button>
            </div>

            {/* Card 2: Call Us */}
            <div className="reveal-stagger-item hover-lift bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between text-left space-y-5 group cursor-default h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent flex items-center justify-center border border-blue-100/50 transition-transform group-hover:scale-105">
                  {renderIcon("Phone", "text-accent")}
                </div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                  {cards[1].title}
                </h3>
                <div className="space-y-1.5">
                  {cards[1].numbers.map((num, i) => (
                    <div key={i} className="text-xs sm:text-sm">
                      <span className="font-bold text-primary">{num.label}: </span>
                      <span className="text-slate-500">{num.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => window.open(cards[1].buttons[0].href, "_self")}
                  className="bg-white border-slate-300 text-primary hover:bg-primary hover:text-white hover:border-primary text-[10px] sm:text-xs py-2 rounded-lg font-bold px-1 hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
                >
                  {cards[1].buttons[0].label}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.open(cards[1].buttons[1].href, "_self")}
                  className="bg-white border-slate-300 text-primary hover:bg-primary hover:text-white hover:border-primary text-[10px] sm:text-xs py-2 rounded-lg font-bold px-1 hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
                >
                  {cards[1].buttons[1].label}
                </Button>
              </div>
            </div>

            {/* Card 3: Email Us */}
            <div className="reveal-stagger-item hover-lift bg-white p-6 rounded-2xl border border-slate-200/80 flex flex-col justify-between text-left space-y-5 group cursor-default h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent flex items-center justify-center border border-blue-100/50 transition-transform group-hover:scale-105">
                  {renderIcon("Mail", "text-accent")}
                </div>
                <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                  {cards[2].title}
                </h3>
                <div className="space-y-2 text-slate-500 text-xs sm:text-sm font-medium">
                  {cards[2].emails.map((item, i) => (
                    <div key={i} className="flex flex-col border-b border-slate-100/60 pb-1">
                      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                      <a href={`mailto:${item.value}`} className="hover:text-accent transition-colors font-semibold text-primary">
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <Button 
                variant="primary" 
                onClick={() => window.open(cards[2].buttonHref, "_self")}
                className="w-full py-2 text-xs rounded-lg font-bold hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
              >
                {cards[2].buttonText}
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Connect With Experts (Intake Form) Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content column (5 columns on lg) */}
            <div className="reveal-left lg:col-span-5 text-left space-y-6 lg:sticky lg:top-28">
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-accent uppercase">
                  {form.subtitle}
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                  {form.title}
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {form.description}
              </p>

              {/* Form Bullet Checklist */}
              <div className="space-y-4 pt-2">
                {form.features.map((feature, i) => (
                  <div key={i} className="flex gap-3.5 items-start group cursor-default">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-accent flex items-center justify-center shrink-0 border border-blue-100/50 shadow-sm mt-0.5 transition-transform group-hover:scale-105">
                      {renderIcon(feature.iconName, "text-accent")}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form column (7 columns on lg) */}
             <div id="contact-form-container" className="reveal-right lg:col-span-7 bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden" style={{ minHeight: `${iframeHeight}px` }}>
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSd3BGzJLpINgRyykldSvPx9nVwtyr8yekWmiCYDiHJEOvW8oQ/viewform?embedded=true" 
                width="100%" 
                height={iframeHeight} 
                onLoad={handleIframeLoad}
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                className="w-full border-0"
                title="Vaishnavi Contact & Enquiry Form"
              >
                Loading form…
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Rapid Onboarding Process Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-3 max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              Our Rapid Onboarding Process
            </h2>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              How we move from your initial enquiry to a live operational facility.
            </p>
          </div>

          {/* Horizontal timelines steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative mt-12">
            
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

            {process.steps.map((step) => (
              <div key={step.number} className="relative z-10 flex flex-col items-center space-y-4 group cursor-default">
                {/* Circle step badge */}
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold border-4 border-white shadow-md text-sm select-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg transform-gpu">
                  {step.number < 10 ? `0${step.number}` : step.number}
                </div>
                <div className="space-y-1 max-w-[200px]">
                  <h4 className="text-base font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                    {step.label}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {step.number === 1 && "Submit your high-level project requirements."}
                    {step.number === 2 && "Our solution engineers analyze operational feasibility."}
                    {step.number === 3 && "Detailed scope mapping with your stakeholders."}
                    {step.number === 4 && "Commercial agreement & service level alignment."}
                    {step.number === 5 && "Resource allocation & facility mobilization."}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 5. Why Global MNCs Partner With Us Section */}
      <section className="py-20 bg-primary text-white border-b border-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-left space-y-3 mb-16 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              {partnerships.title}
            </h2>
            <div className="h-1 w-12 bg-accent rounded-full" />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {partnerships.subtitle}
            </p>
          </div>

          {/* 6-grid partners layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.cards.map((card, idx) => {
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
                  key={idx}
                  className="bg-white/[0.03] border border-white/10 hover:border-accent/30 p-6 rounded-2xl hover:bg-white/[0.07] hover:-translate-y-1.5 transform-gpu transition duration-300 text-left space-y-4 group cursor-default"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 ${colorClass}`}>
                    {renderIcon(card.iconName, "text-current")}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Our Strategic Location Map Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="reveal-up text-center space-y-3 mb-12">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-accent uppercase">
              Find Us
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              {mapDetails.title}
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed font-normal">
              {mapDetails.subtitle}
            </p>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
            {/* Map Container */}
            <div className="reveal-left lg:col-span-8 rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg min-h-[380px] sm:min-h-[450px] relative bg-slate-100 group">
              <iframe
                title="Vaishnavi Enterprises Location Map"
                src="https://maps.google.com/maps?q=30.931992,76.833513&z=16&output=embed"
                className="absolute inset-0 w-full h-full border-0 transition-opacity duration-300 group-hover:opacity-95"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address & Direction Card */}
            <div className="reveal-right lg:col-span-4 bg-[#0A2540] text-white rounded-3xl p-8 flex flex-col justify-between border border-slate-800 shadow-xl relative overflow-hidden text-left">
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-accent flex items-center justify-center border border-white/10 transition-transform hover:scale-105">
                  <MapPin size={24} className="text-accent" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-white mb-2">
                      Head Office
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {mapDetails.location}
                    </p>
                  </div>
                  
                  <div className="h-[1px] bg-white/10 w-full" />
                  
                  <div className="space-y-2.5 text-xs text-slate-400">
                    <div className="flex justify-between pb-1 border-b border-white/5">
                      <span>Latitude</span>
                      <span className="font-mono text-slate-200">30.931992</span>
                    </div>
                    <div className="flex justify-between pb-1 border-b border-white/5">
                      <span>Longitude</span>
                      <span className="font-mono text-slate-200">76.833513</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Region</span>
                      <span className="text-slate-200">Baddi Industrial Area</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 relative z-10 space-y-3">
                <Button
                  variant="primary"
                  onClick={() => window.open("https://www.google.com/maps?q=30.931992,76.833513", "_blank")}
                  className="w-full bg-accent hover:bg-accent/90 text-white border-0 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transform-gpu transition duration-300 text-xs"
                >
                  <span>Get Directions</span>
                  {ArrowUpRight && <ArrowUpRight size={16} />}
                </Button>
                
                <p className="text-[10px] text-slate-400/70 text-center font-medium">
                  Opens in Google Maps app or browser
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions (Accordion List) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-left">
          
          <div className="reveal-up text-center space-y-3 mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              {faqs.title}
            </h2>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          </div>

          {/* FAQ accordion stack */}
          <div className="space-y-3">
            {faqs.items.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`reveal-stagger-item border rounded-xl bg-white overflow-hidden shadow-sm transition duration-300 ${
                    isOpen
                      ? "border-accent/30 shadow-md"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 flex items-center justify-between gap-4 font-bold text-left text-sm sm:text-base focus:outline-none group"
                  >
                    <span className={`transition-colors ${isOpen ? "text-primary" : "text-slate-800 group-hover:text-primary"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-slate-400"
                    }`}>
                      <ChevronDown size={16} />
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                    <div className="px-6 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 8. Need Immediate Support floating row */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal-scale bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-md">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="text-left space-y-2 relative z-10">
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight">
                Need Immediate Operational Support?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                For supply chain emergencies or urgent logistics failures, our rapid response team is available 24/7.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <Button 
                onClick={() => window.open("tel:+18001234567", "_self")}
                className="w-full sm:w-auto px-6 py-2.5 bg-white text-primary hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5 text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm transform-gpu transition duration-300"
              >
                <PhoneCall size={14} />
                <span>Call Now</span>
              </Button>
              <Button 
                onClick={() => window.open("https://wa.me/18001234567", "_blank")}
                className="w-full sm:w-auto px-6 py-2.5 border-white/30 bg-white/5 text-white hover:bg-white hover:text-primary border text-xs font-bold rounded-lg flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-md transform-gpu transition duration-300"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Ready to Optimize CTA Block */}
      <section className="bg-slate-100/60 py-16 border-t border-slate-200/85 text-center">
        <div className="reveal-up max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-primary">
            Ready to Optimize Your Supply Chain?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button 
              variant="primary" 
              onClick={() => {
                const element = document.getElementById("contact-form-container");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transform-gpu transition duration-300"
            >
              Request a Proposal
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.hash = "#services-details"}
              className="w-full sm:w-auto bg-white border-slate-300 text-primary hover:bg-primary hover:text-white hover:border-primary px-8 py-3 rounded-lg font-bold shadow-sm hover:shadow-md hover:-translate-y-0.5 transform-gpu transition duration-300"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
