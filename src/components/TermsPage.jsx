import React, { useEffect, useState } from "react";
import { FileText, Shield, Scale, Mail, Phone, MapPin, CheckCircle2, ChevronRight, AlertCircle, Info } from "lucide-react";
import { content } from "../data/content";
import Footer from "./Footer";

export default function TermsPage() {
  const { termsPage } = content;
  const [activeSection, setActiveSection] = useState("");

  if (!termsPage) return null;

  const { banner, intro, sections = [] } = termsPage;

  // Handle intersection observer to highlight the active section in the table of contents
  useEffect(() => {
    const observers = [];
    const elements = sections.map((sec) => document.getElementById(sec.id));

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // For sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      {/* 1. Header Banner */}
      <section
        className="relative pt-36 pb-20 text-white overflow-hidden border-b border-slate-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Terms of Service.jpg')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-[1px] pointer-events-none" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            {banner.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            {banner.title}
          </h1>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-medium">
            {banner.subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          
          {/* Desktop Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-accent" />
                  Table of Contents
                </h3>
                <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-1 scrollbar-thin">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-between group ${
                        activeSection === sec.id
                          ? "bg-accent/10 text-accent font-semibold border-l-2 border-accent pl-2.5"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-l border-transparent pl-3"
                      }`}
                    >
                      <span className="truncate">{sec.title.substring(3)}</span>
                      <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                        activeSection === sec.id ? "opacity-100 text-accent" : "text-slate-400"
                      }`} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Legal Disclaimer Prompt Card */}
              <div className="bg-gradient-to-br from-primary to-[#002b54] text-white rounded-xl p-5 border border-slate-900 shadow-md">
                <div className="flex gap-3 mb-3">
                  <AlertCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <h4 className="text-sm font-bold">Important Note</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  These terms regulate the use of this website. Commercial operations are governed by customized Service Level Agreements (SLAs).
                </p>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <main className="lg:col-span-8 xl:col-span-9 space-y-12">
            
            {/* Introduction Card */}
            <div className="bg-white rounded-xl p-6 md:p-8 border border-slate-200/80 shadow-sm leading-relaxed text-slate-600">
              <div className="flex gap-3.5 items-start">
                <Info className="w-5.5 h-5.5 text-accent shrink-0 mt-1" />
                <p className="text-base text-slate-700 font-medium">
                  {intro}
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {sections.map((sec) => {
                const isDisclaimer = sec.id === "limitation-liability" || sec.id === "pricing-quotations" || sec.id === "confidentiality";
                
                return (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className={`bg-white rounded-xl p-6 md:p-8 border transition-all duration-300 ${
                      isDisclaimer
                        ? "border-amber-200/70 bg-amber-50/10 shadow-sm shadow-amber-50"
                        : "border-slate-200/80 shadow-sm hover:border-slate-300/80"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                      <span className="p-2 rounded-lg bg-slate-100 text-slate-600">
                        {sec.id === "about-services" && <FileText className="w-4 h-4 text-primary" />}
                        {sec.id === "acceptance" && <CheckCircle2 className="w-4 h-4 text-accent" />}
                        {sec.id === "service-enquiries" && <Info className="w-4 h-4 text-blue-500" />}
                        {sec.id === "intellectual-property" && <Scale className="w-4 h-4 text-amber-500" />}
                        {sec.id === "limitation-liability" && <AlertCircle className="w-4 h-4 text-red-500" />}
                        {(!["about-services", "acceptance", "service-enquiries", "intellectual-property", "limitation-liability"].includes(sec.id)) && <Shield className="w-4 h-4 text-slate-500" />}
                      </span>
                      <h2 className="text-lg md:text-xl font-bold text-slate-900">
                        {sec.title}
                      </h2>
                    </div>

                    {/* Standard Text Content */}
                    {sec.content && (
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                        {sec.content}
                      </p>
                    )}

                    {/* Sub Content (e.g. "All services are subject to:") */}
                    {sec.subContent && (
                      <p className="text-slate-700 text-xs md:text-sm font-semibold mb-3">
                        {sec.subContent}
                      </p>
                    )}

                    {/* Bullets List */}
                    {sec.list && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4 bg-slate-50/50 p-4 rounded-lg border border-slate-200">
                        {sec.list.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Contact Details Special Rendering */}
                    {sec.details && (
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 md:p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          
                          {/* Company & Address */}
                          <div className="md:col-span-2 space-y-3.5">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Company Name</span>
                              <span className="text-sm font-semibold text-slate-900">{sec.details.companyName}</span>
                            </div>
                            <div className="flex gap-2">
                              <MapPin className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Registered Office Address</span>
                                <span className="text-xs text-slate-600 leading-relaxed block">{sec.details.address}</span>
                              </div>
                            </div>
                          </div>

                          {/* Contact Channels */}
                          <div className="space-y-3.5">
                            <div className="flex gap-2">
                              <Mail className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Email</span>
                                <a href={`mailto:${sec.details.email}`} className="text-xs text-slate-600 hover:text-accent font-medium transition-colors block">
                                  {sec.details.email}
                                </a>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Phone className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                              <div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">Phone Lines</span>
                                <div className="flex flex-col gap-0.5">
                                  {sec.details.phones.map((phone, pIdx) => (
                                    <a key={pIdx} href={`tel:${phone.replace(/\s+/g, '')}`} className="text-xs text-slate-600 hover:text-accent transition-colors">
                                      {phone}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* Footer Text */}
                    {sec.footer && (
                      <p className={`text-xs md:text-sm font-medium mt-3 leading-relaxed ${
                        isDisclaimer ? "text-amber-800" : "text-slate-500"
                      }`}>
                        {sec.footer}
                      </p>
                    )}
                  </section>
                );
              })}
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
