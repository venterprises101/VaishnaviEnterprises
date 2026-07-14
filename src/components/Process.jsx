import React from "react";
import { content } from "../data/content";

export default function Process() {
  const { title, subtitle, steps } = content.process;

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Block */}
        <div className="reveal-up text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
            {title}
          </h2>
          <div className="h-1 w-12 bg-accent mx-auto rounded-full" />
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mt-12">

          {/* Horizontal Connector Line (Desktop/Tablet) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

          {/* Vertical Connector Line (Mobile) */}
          <div className="md:hidden absolute top-[28px] bottom-[28px] left-[20px] w-0.5 bg-slate-200 z-0" />

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="reveal-stagger-item flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Node (Number Circle) */}
                <div className="flex justify-center shrink-0 mr-4 md:mr-0 md:mb-6">
                  <div className="w-14 h-14 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center border-4 border-white shadow-md group-hover:bg-[#001e42]/90 group-hover:scale-110 transition-all duration-300">
                    {step.stepNumber}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-1 md:pt-0">
                  <h3 className="text-lg font-bold text-primary tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
