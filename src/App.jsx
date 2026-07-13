import React, { useState, useEffect } from "react";
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
      } else if (hash.startsWith("#services-details") || hash === "#/services") {
        setCurrentPage("services");
        
        // Extract exact section target within services page (e.g. #services-details-contract-mfg)
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

    // Run on initial page load/mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
