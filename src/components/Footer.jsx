import React from "react";
import * as LucideIcons from "lucide-react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";
import { content } from "../data/content";

export default function Footer() {
  const { logo, description, quickLinks, coreServices, contactDetails, socialLinks, copyright, links } = content.footer;

  // Helper to dynamically render social icons
  const renderSocialIcon = (iconName, className) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className={className} size={18} /> : null;
  };

  return (
    <footer id="contact" className="bg-[#001729] text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Desc (4 cols width on lg) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="Vaishnavi Enterprises Logo" 
                className="h-16 w-auto object-contain brightness-0 invert" 
              />
              <span className="text-xl font-bold tracking-tight text-white">{logo}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {description}
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-slate-800/40 hover:bg-accent text-slate-400 hover:text-white flex items-center justify-center border border-slate-800 hover:border-accent transition-all duration-300"
                  aria-label={`Visit our ${social.name}`}
                >
                  {renderSocialIcon(social.name)}
                </a>
              ))}
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
                <div className="flex flex-col text-sm text-slate-400">
                  {contactDetails.emails.map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`} className="hover:text-white transition-colors">
                      {email}
                    </a>
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
