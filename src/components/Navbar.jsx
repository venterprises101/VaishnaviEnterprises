import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { content } from "../data/content";

export default function Navbar({ onOpenQuoteModal, currentPage }) {
  const { logo, links, ctaButton } = content.navbar;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const getHref = (link) => {
    if (link.id === "services") {
      return "#services-details";
    }
    if (link.id === "about") {
      return "#about-us";
    }
    if (link.id === "industries") {
      return "#industries-details";
    }
    if (link.id === "contact") {
      return "#contact-us";
    }
    return link.href;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
        : "bg-white py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src="/logo.png"
              alt="Vaishnavi Enterprises Logo"
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-bold tracking-tight text-primary hover:text-accent transition-colors">
              {logo}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <a
                  key={link.id}
                  href={getHref(link)}
                  className={`text-sm font-semibold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:transition-transform after:duration-300 ${isActive
                    ? "text-primary after:scale-x-100"
                    : "text-slate-600 hover:text-primary after:scale-x-0 hover:after:scale-x-100"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button 
              variant="navy" 
              onClick={() => window.location.hash = "#request-quote"} 
              className="rounded-md font-bold transition-all duration-300"
            >
              {ctaButton}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[60px] bg-white border-b border-slate-100 shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white">
          {links.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <a
                key={link.id}
                href={getHref(link)}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-semibold transition-all ${isActive
                  ? "text-accent bg-blue-50/50"
                  : "text-slate-700 hover:text-accent hover:bg-slate-50"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-2 px-3">
            <Button
              variant="navy"
              onClick={() => {
                setIsOpen(false);
                window.location.hash = "#request-quote";
              }}
              className="w-full flex items-center justify-center gap-2 font-bold transition-all duration-300"
            >
              <span>{ctaButton}</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
