import React from "react";
import * as LucideIcons from "lucide-react";
import { Button } from "./ui/button";
import Footer from "./Footer";
import { content } from "../data/content";

const {
  Rocket,
  Eye,
  Wrench,
  Layers,
  Dolly,
  Zap,
  ShieldCheck,
  Users,
  Leaf,
  Check,
  ArrowRight,
  Warehouse,
  Award,
  Clock,
  CheckCircle2
} = LucideIcons;

// Safe mapping for competency and standard icons
const iconMap = {
  Rocket: Rocket || Warehouse,
  Eye: Eye || Warehouse,
  Wrench: Wrench || Warehouse,
  Layers: Layers || Warehouse,
  Dolly: Dolly || Warehouse,
  Zap: Zap || Warehouse,
  ShieldCheck: ShieldCheck || Warehouse,
  Users: Users || Warehouse,
  Leaf: Leaf || Warehouse,
  Check: Check || Warehouse,
  Award: Award || Warehouse,
  Clock: Clock || Warehouse,
  CheckCircle2: CheckCircle2 || Warehouse
};

export default function AboutPage() {
  const {
    banner,
    missionVision,
    competencies,
    journey,
    leadership,
    standards,
    story = [],
    coreValues = [],
    whyChooseUs = [],
    closingText = ""
  } = content.aboutPage || {};

  const renderIcon = (iconName, className = "text-primary") => {
    const IconComponent = iconMap[iconName] || Warehouse;
    return <IconComponent className={className} size={22} />;
  };

  const getValueIconColor = (idx) => {
    switch (idx) {
      case 0: return "text-amber-600 bg-amber-50 border-amber-100/50";
      case 1: return "text-blue-600 bg-blue-50 border-blue-100/50";
      case 2: return "text-emerald-600 bg-emerald-50 border-emerald-100/50";
      case 3: return "text-indigo-600 bg-indigo-50 border-indigo-100/50";
      case 4: return "text-orange-600 bg-orange-50 border-orange-100/50";
      case 5: return "text-purple-600 bg-purple-50 border-purple-100/50";
      default: return "text-accent bg-blue-50 border-blue-100/50";
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
            alt="Logistics warehouse backdrop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs font-bold tracking-widest text-accent-muted uppercase mb-4 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {banner.badge}
          </span>
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
            {banner.title}
          </h1>
          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-6 font-normal">
            {banner.subtitle}
          </p>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              onClick={() => window.location.hash = "#services-details"}
              className="bg-white text-primary hover:bg-slate-50 font-bold px-6 py-2.5 rounded-lg shadow-sm"
            >
              {banner.primaryCta}
            </Button>
            <Button
              variant="outline-white"
              onClick={() => window.location.hash = "#request-quote"}
              className="border-white text-white hover:bg-white/10 font-bold px-6 py-2.5 rounded-lg"
            >
              {banner.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">

            {/* Mission Card (Light background) */}
            <div className="bg-slate-50/50 p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-accent-muted text-accent flex items-center justify-center shadow-sm">
                {renderIcon(missionVision.mission.iconName, "text-accent")}
              </div>
              <h2 className="text-2xl font-bold text-primary tracking-tight">
                {missionVision.mission.title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {missionVision.mission.description}
              </p>
            </div>

            {/* Vision Card (Dark Navy background) */}
            <div className="bg-primary text-white p-8 rounded-2xl shadow-md flex flex-col space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-accent-muted flex items-center justify-center">
                {renderIcon(missionVision.vision.iconName, "text-accent-muted")}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {missionVision.vision.title}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {missionVision.vision.description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2.5 Company Overview (Our Story) */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100 text-left relative overflow-hidden">
        {/* Decorative backdrop */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Title / Badge */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-accent tracking-widest uppercase bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full">
                Company Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary leading-tight">
                Your Trusted Partner for End-to-End Manufacturing Support & 3PL Solutions
              </h2>
              <div className="h-1.5 w-12 bg-accent rounded-full" />

              {/* Optional image accent inside story block */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-[16/10] hidden lg:block bg-slate-100">
                <img
                  src="/images/why_choose_us.png"
                  alt="Industrial warehouse logistics overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Paragraphs list */}
            <div className="lg:col-span-7 space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {story.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph.split("**").map((text, sIdx) =>
                    sIdx % 2 === 1 ? <strong key={sIdx} className="text-primary font-bold">{text}</strong> : text
                  )}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Competencies Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Competency 2x2 Cards Grid (Left 7 Columns on lg) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
              {competencies.cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl border text-left flex flex-col space-y-3 shadow-sm hover:shadow-md transition-all duration-300 ${card.isDark
                    ? "bg-primary text-white border-slate-900"
                    : "bg-white text-slate-800 border-slate-200/80"
                    }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${card.isDark ? "bg-white/10 text-accent-muted" : "bg-blue-50/80 text-accent"
                    }`}>
                    {renderIcon(card.iconName, card.isDark ? "text-accent-muted" : "text-accent")}
                  </div>
                  <h3 className="text-base font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${card.isDark ? "text-slate-300" : "text-slate-500"
                    }`}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Competencies Text Column (Right 5 Columns on lg) */}
            <div className="lg:col-span-5 text-left space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-accent uppercase">
                  {competencies.subtitle}
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                  {competencies.title}
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {competencies.description}
              </p>

              {/* Bullet Checklist */}
              <ul className="space-y-3 pt-2">
                {competencies.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                    <div className="w-5 h-5 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Check size={11} className="stroke-[3.5]" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Journey of Growth (Timeline Section) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Timeline Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              {journey.title}
            </h2>
            <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base">
              {journey.subtitle}
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative mt-12 max-w-5xl mx-auto">
            {/* Center connector line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

            {/* Left connector line (Mobile) */}
            <div className="md:hidden absolute left-[24px] top-0 bottom-0 w-0.5 bg-slate-200 z-0" />

            <div className="space-y-12 relative z-10">
              {journey.timeline.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-stretch gap-6 md:gap-0 relative ${isEven ? "" : "md:flex-row-reverse"
                      }`}
                  >

                    {/* Node Badge Label (Centered or Left-pinned) */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 md:top-1/2 -translate-x-[24px] md:-translate-x-1/2 md:-translate-y-1/2 z-20 shrink-0">
                      <div className="px-3.5 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest shadow-md border-4 border-white select-none">
                        {step.badge}
                      </div>
                    </div>

                    {/* Text block (Left column) */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center text-left ${isEven
                      ? "pl-14 md:pl-0 md:pr-16"
                      : "pl-14 md:pl-16 md:pr-0"
                      }`}>
                      <div className="space-y-2 pt-8 md:pt-0">
                        <h3 className="text-lg sm:text-xl font-bold text-primary tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Image block (Right column) */}
                    <div className={`w-full md:w-1/2 flex items-center justify-start pl-14 md:pl-0 ${isEven
                      ? "md:pl-16"
                      : "md:pr-16 md:justify-end"
                      }`}>
                      <div className="w-full max-w-sm aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 shrink-0">
                        <img
                          src={`/images/${step.imageName}`}
                          alt={step.title}
                          className="w-full h-full object-cover transform hover:scale-[1.03] transition-transform duration-700"
                        />
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 4.5 Our Core Values Section */}
      <section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden text-left">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#00223A_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-accent tracking-widest uppercase bg-blue-50 border border-blue-100/50 px-3 py-1 rounded-full">
              Our Foundations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Our Core Values
            </h2>
            <div className="h-1.5 w-12 bg-accent mx-auto rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              These guiding principles define how we work, how we treat our partners, and how we deliver success every single day.
            </p>
          </div>

          {/* Core Values 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left space-y-4 group cursor-default h-full"
              >
                <div className="space-y-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${getValueIconColor(idx)}`}>
                    {renderIcon(value.iconName, "text-current")}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 tracking-tight group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Leadership Team Section (Infinite Scroll Marquee) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary">
              {leadership.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              {leadership.subtitle}
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              onClick={() => window.location.hash = "#request-quote"}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-accent-hover transition-colors"
            >
              <span>Join Our Team</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Leadership cards marquee row scrolling right-to-left */}
        <div className="relative w-full overflow-hidden whitespace-nowrap">
          {/* Gradient overlay blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-8 py-4">

            {/* Copy 1 */}
            <div className="flex gap-8 shrink-0">
              {leadership.members.map((member, idx) => (
                <div
                  key={idx}
                  className="w-64 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col space-y-4 text-left whitespace-normal select-none shrink-0"
                >
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={`/images/${member.imageName}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Copy 2 (Loop duplicate) */}
            <div className="flex gap-8 shrink-0">
              {leadership.members.map((member, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="w-64 bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col space-y-4 text-left whitespace-normal select-none shrink-0"
                >
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={`/images/${member.imageName}`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-primary tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Standards of Integrity / Quality & Compliance Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                  {standards.subtitle}
                </span>
                <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                  {standards.title}
                </h2>
                <div className="h-1 w-12 bg-accent rounded-full" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {standards.description}
              </p>

              {/* Compliance Point list */}
              <div className="space-y-5 pt-2">
                {standards.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-accent flex items-center justify-center shrink-0 border border-blue-100/50 shadow-sm">
                      {renderIcon(bullet.iconName, "text-accent")}
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-sm sm:text-base font-bold text-primary tracking-tight">
                        {bullet.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-xl">
                        {bullet.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Certificate Card Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50 group">
                <img
                  src={`/images/${standards.achievement.imageName}`}
                  alt="Framed ISO Certificate on Wall"
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Floating score badge card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#001E35]/95 backdrop-blur-md p-4 rounded-xl border border-white/10 text-left space-y-1 shadow-2xl animate-in slide-in-from-bottom-4 duration-500">
                  <div className="text-3xl font-black text-white leading-none">
                    {standards.achievement.score}
                  </div>
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300 leading-tight">
                    {standards.achievement.label}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6.5 Why Choose Us Section */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100 text-left relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#00223A_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase bg-emerald-50 border border-emerald-100/50 px-3 py-1 rounded-full">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-primary">
              Why Choose Us?
            </h2>
            <div className="h-1.5 w-12 bg-emerald-500 mx-auto rounded-full" />
          </div>

          {/* 12 Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

          {/* Concluding callout block */}
          {closingText && (
            <div className="bg-[#00223A] text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-accent-muted flex items-center justify-center shrink-0 border border-white/10">
                  <ShieldCheck size={26} className="text-accent" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal flex-grow">
                  {closingText.split("**").map((text, sIdx) =>
                    sIdx % 2 === 1 ? <strong key={sIdx} className="text-white font-bold">{text}</strong> : text
                  )}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. Bottom CTA Block */}
      <section className="bg-primary text-white py-16 text-center border-t border-slate-900 overflow-hidden relative mb-20">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to experience industrial excellence?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Join over 500 enterprises that trust Vaishnavi for their mission-critical logistics and infrastructure support.
          </p>
          <div className="flex justify-center pt-4">
            <Button
              variant="primary"
              onClick={() => window.location.hash = "#request-quote"}
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-bold bg-white text-primary hover:bg-slate-50 shadow-md hover:shadow-lg transition-all"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Integrated Page Footer */}
      <Footer />

    </div>
  );
}
