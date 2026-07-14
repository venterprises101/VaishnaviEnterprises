import React from "react";
import * as LucideIcons from "lucide-react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { content } from "../data/content";

export default function Footer() {
  const { logo, description, quickLinks, coreServices, contactDetails, socialLinks, copyright, links } = content.footer;

  // Custom Brand Icons for Instagram and WhatsApp
  const InstagramIcon = ({ size = 18, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );

  const WhatsAppIcon = ({ size = 18, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

  // Helper to safely render icons bypassing aggressive tree-shaking
  const iconsMap = {
    Mail,
    Phone,
    MapPin,
    Globe,
    Instagram: InstagramIcon,
    WhatsApp: WhatsAppIcon
  };

  const renderSocialIcon = (iconName, className) => {
    const IconComponent = iconsMap[iconName] || LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} size={18} /> : null;
  };

  return (
    <footer id="contact" className="bg-[#001729] text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Desc (4 cols width on lg) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <a href="#home" className="flex items-center gap-2.5 group">
              <img 
                src="/logo.png" 
                alt="Vaishnavi Enterprises Logo" 
                className="h-16 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105" 
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => {
                const isExternal = social.href.startsWith("http") || social.href.startsWith("mailto:") || social.href.startsWith("tel:");
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={(e) => social.href === "#" && e.preventDefault()}
                    className="w-9 h-9 rounded-full bg-slate-800/40 hover:bg-accent text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 hover:border-accent transition-all duration-300"
                    aria-label={`Visit our ${social.name}`}
                  >
                    {renderSocialIcon(social.name)}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols width on lg) */}
          <div className="lg:col-span-2 space-y-5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {quickLinks.title}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => item.href === "#" && e.preventDefault()}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols width on lg) */}
          <div className="lg:col-span-3 space-y-5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {coreServices.title}
            </h3>
            <ul className="space-y-2.5">
              {coreServices.items.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => item.href === "#" && e.preventDefault()}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts (3 cols width on lg) */}
          <div className="lg:col-span-3 space-y-5 text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {contactDetails.title}
            </h3>
            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  {contactDetails.address}
                </span>
              </li>
              
              {/* Emails */}
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1.5 text-sm text-slate-400">
                  {contactDetails.emails.map((item, idx) => (
                    <div key={idx} className="flex flex-wrap gap-1.5 leading-tight">
                      <span className="text-slate-500 font-semibold">{item.label}:</span>
                      <a href={`mailto:${item.value}`} className="hover:text-white transition-colors">
                        {item.value}
                      </a>
                    </div>
                  ))}
                </div>
              </li>

              {/* Phones */}
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent shrink-0 mt-0.5" />
                <div className="flex flex-col text-sm text-slate-400">
                  {contactDetails.phones.map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            {copyright}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => link.href === "#" && e.preventDefault()}
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
