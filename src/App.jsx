import React, { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Infrastructure from "./components/Infrastructure";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import ServicesPage from "./components/ServicesPage";
import QuotePage from "./components/QuotePage";
import AboutPage from "./components/AboutPage";
import IndustriesPage from "./components/IndustriesPage";
import ContactPage from "./components/ContactPage";
import TermsPage from "./components/TermsPage";
import PrivacyPage from "./components/PrivacyPage";
import CookiePage from "./components/CookiePage";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#request-quote" || hash === "#request-specification" || hash === "#/request-quote") {
        setCurrentPage("quote-page");
        window.scrollTo(0, 0);
      } else if (hash === "#about-us" || hash === "#/about-us") {
        setCurrentPage("about");
        window.scrollTo(0, 0);
      } else if (hash === "#industries-details" || hash === "#/industries") {
        setCurrentPage("industries");
        window.scrollTo(0, 0);
      } else if (hash === "#contact-us" || hash === "#/contact-us" || hash === "#contact") {
        setCurrentPage("contact");
        window.scrollTo(0, 0);
      } else if (hash === "#terms-of-service" || hash === "#/terms-of-service" || hash === "#terms" || hash === "#/terms") {
        setCurrentPage("terms");
        window.scrollTo(0, 0);
      } else if (hash === "#privacy-policy" || hash === "#/privacy-policy") {
        setCurrentPage("privacy");
        window.scrollTo(0, 0);
      } else if (hash === "#cookie-policy" || hash === "#/cookie-policy") {
        setCurrentPage("cookie");
        window.scrollTo(0, 0);
      } else if (hash.startsWith("#services-details") || hash === "#/services") {
        setCurrentPage("services");
        const targetId = hash.replace("#services-details-", "");
        if (targetId && targetId !== "#services-details" && targetId !== "#/services") {
          setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollTo(0, 0);
            }
          }, 150);
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        setCurrentPage("home");
        if (hash) {
          setTimeout(() => {
            const element = document.querySelector(hash);
            element?.scrollIntoView({ behavior: "smooth" });
          }, 150);
        }
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        const sr = ScrollReveal({
          origin: "bottom",
          distance: "40px",
          duration: 900,
          delay: 150,
          easing: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          opacity: 0,
          scale: 1,
          reset: false,
          viewFactor: 0.15,
        });

        sr.reveal(".reveal-fade", {
          distance: "0px",
          duration: 800,
        });

        sr.reveal(".reveal-up", {
          origin: "bottom",
          distance: "40px",
        });

        sr.reveal(".reveal-left", {
          origin: "left",
          distance: "50px",
        });

        sr.reveal(".reveal-right", {
          origin: "right",
          distance: "50px",
        });

        sr.reveal(".reveal-scale", {
          scale: 0.95,
          distance: "0px",
        });

        sr.reveal(".reveal-stagger-item", {
          interval: 80,
          origin: "bottom",
          distance: "30px",
        });

        sr.reveal(".reveal-hero-badge", {
          origin: "bottom",
          distance: "15px",
          delay: 100,
          duration: 700,
        });

        sr.reveal(".reveal-hero-title", {
          origin: "bottom",
          distance: "25px",
          delay: 200,
          duration: 800,
        });

        sr.reveal(".reveal-hero-subtitle", {
          origin: "bottom",
          distance: "25px",
          delay: 350,
          duration: 800,
        });

        sr.reveal(".reveal-hero-cta", {
          origin: "bottom",
          distance: "25px",
          delay: 500,
          duration: 800,
        });

        sr.reveal(".reveal-hero-img", {
          scale: 0.95,
          distance: "0px",
          delay: 350,
          duration: 1000,
        });

        sr.reveal(".reveal-hero-stat-top", {
          origin: "right",
          distance: "40px",
          delay: 600,
          duration: 800,
        });

        sr.reveal(".reveal-hero-stat-bottom", {
          origin: "left",
          distance: "40px",
          delay: 700,
          duration: 800,
        });

      } catch (error) {
        console.error("ScrollReveal error:", error);
      }
    }, 250);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">

      {/* Navigation Header */}
      <Navbar onOpenQuoteModal={openQuoteModal} currentPage={currentPage} />

      {/* Conditional page content rendering */}
      {currentPage === "quote-page" ? (
        <QuotePage />
      ) : currentPage === "about" ? (
        <AboutPage />
      ) : currentPage === "industries" ? (
        <IndustriesPage />
      ) : currentPage === "contact" ? (
        <ContactPage />
      ) : currentPage === "terms" ? (
        <TermsPage />
      ) : currentPage === "privacy" ? (
        <PrivacyPage />
      ) : currentPage === "cookie" ? (
        <CookiePage />
      ) : currentPage === "services" ? (
        <ServicesPage onOpenQuoteModal={openQuoteModal} />
      ) : (
        <>
          {/* Main Content Sections */}
          <main className="flex-grow pt-[72px] md:pt-[80px]">
            {/* Hero Banner Section */}
            <Hero onOpenQuoteModal={openQuoteModal} />

            {/* Highlight/Quote Section */}
            <Quote />

            {/* Core Services Section */}
            <Services />

            {/* Why Choose Us Section */}
            <WhyChooseUs />

            {/* Industries Served Section */}
            <Industries />

            {/* Operational Flow/Timeline Section */}
            <Process />

            {/* Facilities/Infrastructure Section */}
            <Infrastructure onOpenQuoteModal={openQuoteModal} />

            {/* CTA Contact Form trigger */}
            <CTA onOpenQuoteModal={openQuoteModal} />
          </main>

          {/* Footer Info Block */}
          <Footer />
        </>
      )}

      {/* Reusable Form Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />

    </div>
  );
}
