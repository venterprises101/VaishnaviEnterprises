import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  as: Component = "button", 
  ...props 
}, ref) => {
  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
        {
          // Variants
          "bg-primary text-white hover:bg-primary-dark shadow-sm": variant === "primary",
          "bg-accent text-white hover:bg-accent-hover shadow-sm": variant === "accent",
          "bg-white border border-slate-200 text-slate-900 hover:bg-slate-50": variant === "outline",
          "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900": variant === "ghost",
          "bg-accent-muted text-accent hover:bg-blue-100": variant === "secondary",
          "bg-transparent border border-white text-white hover:bg-white hover:text-primary": variant === "outline-white",
          // Global animated variants
          "bg-white text-[#001e42] border border-white hover:bg-transparent hover:text-white hover:border-white transition-all duration-300": variant === "white-fill",
          "bg-transparent text-white border border-white hover:bg-white hover:text-[#001e42] hover:border-white transition-all duration-300": variant === "ghost-white",
          // Navy ↔ White swap hover variants
          "bg-[#001e42] text-white border border-[#001e42] hover:bg-white hover:text-[#001e42] hover:border-[#001e42] transition-all duration-300": variant === "navy",
          "bg-white text-[#001e42] border border-[#001e42] hover:bg-[#001e42] hover:text-white hover:border-[#001e42] transition-all duration-300": variant === "white-navy",
        },
        {
          // Sizes
          "h-10 py-2 px-4": size === "default",
          "h-9 px-3 rounded-md": size === "sm",
          "h-11 px-8 rounded-md text-base": size === "lg",
        },
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };
