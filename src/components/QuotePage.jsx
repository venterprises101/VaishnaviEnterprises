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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedServices: [],
    requirements: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (serviceLabel) => {
    setFormData((prev) => {
      const alreadySelected = prev.selectedServices.includes(serviceLabel);
      return {
        ...prev,
        selectedServices: alreadySelected 
          ? prev.selectedServices.filter(s => s !== serviceLabel)
          : [...prev.selectedServices, serviceLabel]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        selectedServices: [],
        requirements: ""
      });
    }, 1500);
  };

  const renderRequestIcon = (iconName, className = "text-primary") => {
    const IconComponent = resolvedIconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={20} />;
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      
      {/* Top Header Banner Section */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-primary via-[#00223A] to-primary text-white overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="/images/why_choose_us.png" 
            alt="Warehouse backdrop" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
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
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm text-left space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {whyComplete.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {whyComplete.description}
                </p>
              </div>

              {/* What You Can Request Block */}
              <div className="space-y-6 text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-primary">
                  {whatYouCanRequest.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {whatYouCanRequest.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 text-accent flex items-center justify-center shrink-0">
                        {renderRequestIcon(item.iconName, "text-accent")}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Requirement Form Block */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden text-left">
                <div className="bg-primary text-white p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold">Project Requirement Form</h2>
                  <p className="text-slate-200 text-xs sm:text-sm mt-2">
                    Submit your requirement details below, and our supply chain experts will prepare a customized proposal.
                  </p>
                </div>
                
                <div className="p-6 sm:p-8">
                  {isSuccess ? (
                    <div className="py-8 text-center flex flex-col items-center justify-center space-y-4">
                      <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                        {CheckCircle2 ? <CheckCircle2 size={36} /> : <Check size={36} />}
                      </div>
                      <h3 className="text-xl font-bold text-primary">Thank you for submitting!</h3>
                      <p className="text-slate-600 text-sm max-w-md">
                        Your project requirement specifications have been securely transmitted to our engineering team. We will review and reach back to you within 24 hours.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="primary" className="rounded-lg px-6 font-bold">
                        Fill Another Response
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Grid Contact Fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleTextChange}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Company Email <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleTextChange}
                            placeholder="john@company.com"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-slate-50/50"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleTextChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-slate-50/50"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleTextChange}
                            placeholder="Enterprise Pvt Ltd"
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all bg-slate-50/50"
                          />
                        </div>
                      </div>

                      {/* Multiselect Checkbox list */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                          Select Services Needed (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {whatYouCanRequest.items.map((item, index) => {
                            const isChecked = formData.selectedServices.includes(item.label);
                            return (
                              <label 
                                key={index}
                                className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer select-none transition-all ${
                                  isChecked 
                                    ? "border-accent bg-blue-50/40 text-primary font-semibold" 
                                    : "border-slate-200 hover:bg-slate-50 text-slate-600"
                                }`}
                              >
                                <input 
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleCheckboxChange(item.label)}
                                  className="mt-0.5 rounded border-slate-300 text-accent focus:ring-accent w-4 h-4 shrink-0"
                                />
                                <span className="text-xs leading-normal">{item.label}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Textarea detail */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Project Description & Specifications <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          name="requirements"
                          required
                          rows={5}
                          value={formData.requirements}
                          onChange={handleTextChange}
                          placeholder="Please provide details about cargo volume, warehousing capacity needed, production throughput rates, or contract manufacturing job details..."
                          className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none transition-all bg-slate-50/50"
                        />
                      </div>

                      {/* Submit */}
                      <div>
                        <Button 
                          type="submit" 
                          variant="accent" 
                          className="w-full flex items-center justify-center gap-2 h-11 font-bold rounded-lg shadow-sm"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting proposal details...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Project Specifications</span>
                              <ArrowRight size={16} />
                            </>
                          )}
                        </Button>
                      </div>

                    </form>
                  )}
                </div>
              </div>

              {/* Our Process Section */}
              <div className="space-y-6 text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-primary text-center lg:text-left">
                  {process.title}
                </h2>
                <div className="relative pt-6">
                  {/* Step Connector Line */}
                  <div className="hidden md:block absolute top-[44px] left-[8%] right-[8%] h-0.5 bg-slate-200 z-0" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
                    {process.steps.map((step, idx) => (
                      <div key={idx} className="flex flex-row md:flex-col items-center text-left md:text-center group">
                        <div className="w-12 h-12 rounded-full bg-primary text-white text-base font-bold flex items-center justify-center border-4 border-white shadow-md group-hover:bg-accent group-hover:scale-105 transition-all duration-300 shrink-0 mr-4 md:mr-0 md:mb-3">
                          {step.number}
                        </div>
                        <div className="pt-1 md:pt-0">
                          <span className="text-xs sm:text-sm font-bold text-primary tracking-tight block md:mx-auto max-w-[120px]">
                            {step.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 text-center leading-relaxed max-w-2xl mx-auto pt-4">
                  {confidentialityNote}
                </p>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8 text-left">
              
              {/* Why Choose Us Sidebar Widget */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-primary tracking-tight">
                  Why Choose Us
                </h3>
                <div className="space-y-3">
                  {sidebar.whyChooseUs.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-5 h-5 rounded-full border border-blue-200 bg-blue-50/50 text-accent flex items-center justify-center shrink-0">
                        <Check size={11} className="stroke-[3.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Support Sidebar Widget */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6 text-center">
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
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-primary text-white hover:bg-primary-dark rounded-lg shadow-sm transition-all"
                  >
                    {Phone ? <Phone size={15} /> : null}
                    <span>Call Us</span>
                  </a>
                  
                  {/* Email Button */}
                  <a 
                    href={`mailto:${sidebar.contactSupport.email}`}
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-lg shadow-sm transition-all"
                  >
                    {Mail ? <Mail size={15} /> : null}
                    <span>Email Us</span>
                  </a>

                  {/* WhatsApp Button */}
                  <a 
                    href={sidebar.contactSupport.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 h-11 px-4 text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg shadow-sm transition-all"
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

          <div className="animate-marquee flex items-center gap-16 py-2">
            {/* Copy 1 */}
            <div className="flex gap-20 items-center shrink-0">
              {trustedMarquee.logos.map((logoName, idx) => (
                <div 
                  key={idx} 
                  className="text-lg sm:text-xl font-extrabold text-slate-300 hover:text-accent tracking-wider uppercase transition-colors duration-300 font-sans select-none"
                >
                  {logoName}
                </div>
              ))}
            </div>
            {/* Copy 2 */}
            <div className="flex gap-20 items-center shrink-0">
              {trustedMarquee.logos.map((logoName, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="text-lg sm:text-xl font-extrabold text-slate-300 hover:text-accent tracking-wider uppercase transition-colors duration-300 font-sans select-none"
                >
                  {logoName}
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
