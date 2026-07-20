import React from "react";
import { Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { content } from "../data/content";
import heroBg from "../assets/herobg.png";

export default function Hero({ onOpenQuoteModal }) {
  const { topBadge, title, subtitle, primaryCta, secondaryCta, stats } = content.hero;

  const experienceStat = stats.find(s => s.id === "experience");
  const clientsStat = stats.find(s => s.id === "clients");

  return (
    <section
      id="home"
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay: left #001e42 (98%) → right #001e42 (70%) */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,30,66,0.98) 0%, rgba(0,30,66,0.70) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Badge */}
            <div className="reveal-hero-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-semibold uppercase tracking-wider text-accent-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {topBadge}
            </div>

            {/* Title */}
            <h1 className="reveal-hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Powering Faster Manufacturing Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                Integrated 3PL & Supply Chain
              </span>{" "}
              Excellence
            </h1>

            {/* Subtitle */}
            <p className="reveal-hero-subtitle text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="reveal-hero-cta flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                variant="white-fill"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 font-bold transition-all duration-300"
              >
                <span>{primaryCta}</span>
                <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                onClick={onOpenQuoteModal}
                className="font-bold transition-all duration-300"
              >
                {secondaryCta}
              </Button>
            </div>
          </div>

          {/* Right Image/Stats Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">

            {/* Main Warehouse Image Container */}
            <div className="reveal-hero-img relative w-full max-w-md lg:max-w-none aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/images/hero_bg.png"
                alt="Industrial forklift operating in warehouse"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>

            {/* Experience Stats Card (Top Right) */}
            <div className="reveal-hero-stat-top absolute -top-6 right-0 md:-right-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-3 max-w-[210px]">
              <div className="p-2 rounded-lg bg-green-50 text-green-600 shrink-0">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-primary leading-none mb-1">
                  {experienceStat.value}
                </div>
                <div className="text-xs text-slate-600 font-medium leading-tight">
                  {experienceStat.label}
                </div>
              </div>
            </div>

            {/* Clients Stats Card (Bottom Left) */}
            <div className="reveal-hero-stat-bottom absolute -bottom-6 left-0 md:-left-6 bg-white text-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-3 max-w-[210px]">
              <div className="p-2 rounded-lg bg-blue-50 text-accent shrink-0">
                <Users size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-primary leading-none mb-1">
                  {clientsStat.value}
                </div>
                <div className="text-xs text-slate-600 font-medium leading-tight">
                  {clientsStat.label}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
