// All website text content extracted for easy updates and maintenance

export const content = {
  navbar: {
    // logo: "Vaishnavi Enterprises",
    links: [
      { id: "home", label: "Home", href: "#home" },
      { id: "services", label: "Services", href: "#services" },
      { id: "industries", label: "Industries", href: "#industries" },
      { id: "about", label: "About", href: "#why-choose-us" },
      { id: "contact", label: "Contact", href: "#contact" }
    ],
    ctaButton: "Request Quote"
  },
  hero: {
    topBadge: "Integrated 3PL & Manufacturing Support",
    title: "Powering Faster Manufacturing Through Integrated 3PL & Supply Chain Excellence",
    subtitle: "We provide end-to-end 3PL solutions for MNC manufacturing units, specializing in factory job work, in-plant logistics, depot management, inventory control, and value-added manufacturing support.",
    primaryCta: "Explore Our Services",
    secondaryCta: "Partner With Us",
    stats: [
      {
        id: "experience",
        value: "18+",
        label: "Years Experience in Industrial Logistics",
        position: "top-right" // visual anchor placement in design
      },
      {
        id: "clients",
        value: "100+",
        label: "Global Enterprise Clients",
        position: "bottom-left"
      }
    ],
    imageAlt: "Modern warehouse interior with forklift"
  },
  quote: {
    text: "We Don't Just Move Materials — We Keep Supply Chains Moving."
  },
  services: {
    title: "Core Service Offerings",
    subtitle: "Providing end-to-end solutions tailored for modern industrial needs, from complex supply chains to precision manufacturing.",
    items: [
      {
        id: "warehousing",
        iconName: "Warehouse",
        title: "Warehousing",
        description: "Climate-controlled, secure, and strategically located storage facilities optimized for throughput.",
        linkText: "Learn More"
      },
      {
        id: "supply-chain",
        iconName: "Truck",
        title: "Supply Chain",
        description: "Seamless integration and real-time tracking of your logistics ecosystem from source to consumer.",
        linkText: "Learn More"
      },
      {
        id: "contract-mfg",
        iconName: "Factory",
        title: "Contract Mfg",
        description: "Scalable production capabilities with a focus on quality assurance and lean manufacturing principles.",
        linkText: "Learn More"
      },
      {
        id: "job-work",
        iconName: "Settings",
        title: "Job Work",
        description: "Expert industrial processing and assembly services for diverse engineering components.",
        linkText: "Learn More"
      }
    ]
  },
  whyChooseUs: {
    title: "Why Manufacturing Leaders Choose Us",
    subtitle: "We combine operational excellence with advanced technology to deliver reliable industrial services.",
    bannerImageAlt: "Large warehouse aisles with stacked products",
    items: [
      {
        id: "throughput",
        iconName: "Activity",
        title: "High-Throughput Operations",
        description: "Our facilities and processes are designed for high-volume operations and maximum efficiency."
      },
      {
        id: "compliance",
        iconName: "ShieldCheck",
        title: "Compliance-Driven",
        description: "Strict adherence to safety standards, quality control regulations, and industry certifications."
      },
      {
        id: "technology",
        iconName: "Cpu",
        title: "Technology-Enabled",
        description: "Real-time inventory tracking, WMS integration, and automated reporting systems."
      },
      {
        id: "scalable",
        iconName: "Move",
        title: "Flexible & Scalable",
        description: "Scale warehouse space and labor resources up or down depending on seasonal demands."
      }
    ]
  },
  industries: {
    title: "Industries We Serve",
    subtitle: "Versatile solutions tailored for diverse industrial sectors with specific operational requirements.",
    items: [
      {
        id: "fmcg",
        iconName: "ShoppingBag",
        title: "FMCG",
        bullets: [
          "End-to-end supply chain integration.",
          "High-volume inventory management & dispatch.",
          "Value-added secondary packaging & labelling."
        ]
      },
      {
        id: "manufacturing",
        iconName: "Factory",
        title: "Manufacturing",
        bullets: [
          "Supporting complex manufacturing operations with precision handling and inventory control.",
          "In-plant logistics support",
          "Component processing",
          "Production line feed"
        ]
      },
      {
        id: "automobile",
        iconName: "Car",
        title: "Automobile",
        bullets: [
          "Component handling and logistics for the automotive sector.",
          "Just-in-Time (JIT) delivery",
          "Spare parts management",
          "Precision handling"
        ]
      },
      {
        id: "pharma",
        iconName: "PlusCircle",
        title: "Pharma",
        bullets: [
          "Controlled inventory and compliance-focused operations.",
          "Batch traceability",
          "Temperature control support",
          "Compliance documentation"
        ]
      },
      {
        id: "electronics",
        iconName: "Cpu",
        title: "Electronics",
        bullets: [
          "Precision logistics and barcode-tracked warehousing.",
          "High-value asset tracking",
          "Serial number management",
          "Static-sensitive handling"
        ]
      },
      {
        id: "engineering",
        iconName: "Wrench",
        title: "Engineering",
        bullets: [
          "Logistics for heavy industrial and engineering components.",
          "Oversized cargo handling",
          "Project logistics",
          "MHE deployment"
        ]
      }
    ]
  },
  process: {
    title: "Our Streamlined Process",
    subtitle: "A transparent and iterative methodology to ensure project success.",
    steps: [
      {
        stepNumber: 1,
        title: "Consultation",
        description: "Initial requirement analysis and feasibility check."
      },
      {
        stepNumber: 2,
        title: "Planning",
        description: "Resource mapping and supply chain layout design."
      },
      {
        stepNumber: 3,
        title: "Execution",
        description: "Strict operational rollout with quality checks."
      },
      {
        stepNumber: 4,
        title: "Delivery",
        description: "Safe transport and final handover/distribution."
      },
      {
        stepNumber: 5,
        title: "Support",
        description: "Continuous monitoring and optimization feedback."
      }
    ]
  },
  infrastructure: {
    title: "World-Class Infrastructure",
    subtitle: "Operating over 2.5 million sq. ft. of state-of-the-art space, including our central logistics hub in Bangalore and an advanced robotics lab in Pune, we set the standard for industrial modernization.",
    ctaButton: "View All Facility Details",
    items: [
      {
        id: "bangalore-hub",
        title: "Bangalore Central Hub",
        description: "Our flagship 1.2M sq. ft. facility featuring fully automated sorting and AI-driven inventory management.",
        imageName: "bangalore_hub.png"
      },
      {
        id: "pune-lab",
        title: "Pune Robotics Lab",
        description: "R&D center for industrial automation and precision engineering components.",
        imageName: "pune_lab.png"
      },
      {
        id: "loading-docks",
        title: "Loading Docks",
        description: "24 docking stations for rapid turnaround.",
        imageName: "loading_docks.png"
      },
      {
        id: "cold-storage",
        title: "Cold Storage Units",
        description: "Specialized environments for sensitive inventory.",
        imageName: "cold_storage.png"
      }
    ]
  },
  cta: {
    title: "Your Supply Chain Partner for Faster, Smarter Manufacturing",
    subtitle: "Partner with us to experience unmatched efficiency, safety, and reliability in your supply chain operations.",
    ctaButton: "Contact Our Team"
  },
  footer: {
    // logo: "Vaishnavi Enterprises",
    description: "Leading the way in industrial logistics and contract manufacturing solutions since 2009. We drive growth for our clients through precision and reliability.",
    quickLinks: {
      title: "QUICK LINKS",
      items: [
        { label: "Home", href: "#home" },
        { label: "About Company", href: "#why-choose-us" },
        { label: "Our Services", href: "#services" },
        { label: "Infrastructure", href: "#infrastructure" },
        { label: "Case Studies", href: "#" }
      ]
    },
    coreServices: {
      title: "CORE SERVICES",
      items: [
        { label: "Warehousing Solutions", href: "#services" },
        { label: "Supply Chain Management", href: "#services" },
        { label: "Contract Manufacturing", href: "#services" },
        { label: "Industrial Job Work", href: "#services" },
        { label: "Inventory Control", href: "#services" }
      ]
    },
    contactDetails: {
      title: "CONTACT DETAILS",
      address: "Plot No. 42, Industrial Area Phase II, Pune, Maharashtra 411001",
      emails: ["info@vaishnavient.com", "sales@vaishnavient.com"],
      phones: ["+91 98765 43210", "+91 12345 67890"]
    },
    socialLinks: [
      { name: "Globe", href: "#" },
      { name: "Mail", href: "#" },
      { name: "Phone", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "Linkedin", href: "#" }
    ],
    copyright: "© 2024 Vaishnavi Enterprises. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  },
  quoteModal: {
    title: "Request a Custom Quote",
    description: "Tell us about your logistics or manufacturing requirements, and our team will get back to you with a tailored solution.",
    fields: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      service: "Select Service",
      servicesOptions: [
        "Warehousing Solutions",
        "Supply Chain Integration",
        "Contract Manufacturing",
        "Industrial Job Work",
        "Other Support Services"
      ],
      requirements: "Describe your requirements",
      submit: "Submit Request",
      submitting: "Submitting request..."
    },
    successMessage: "Thank you! Your quote request has been received. Our industrial solutions team will contact you within 24 hours."
  },
  servicesPage: {
    banner: {
      badge: "Enterprise Solutions",
      title: "Our Core Services",
      subtitle: "From contract manufacturing to technology-enabled logistics, we provide the specialized infrastructure that drives enterprise growth."
    },
    services: [
      {
        id: "contract-mfg",
        iconName: "Settings",
        title: "Contract Manufacturing & Job Work",
        description: "End-to-end production support specializing in the transformation of raw materials or semi-finished goods into market-ready products with uncompromising quality control.",
        bullets: [
          "SFG to FG Conversion",
          "Precision Product Assembly",
          "Industrial Packaging Solutions",
          "Rigorous Quality Inspection",
          "Customized Job Work"
        ],
        buttonText: "Request Specification",
        imageName: "why_choose_us.png",
        isDarkButton: true
      },
      {
        id: "3pl-warehousing",
        iconName: "Warehouse",
        title: "3PL Warehousing & Depot Management",
        description: "Scalable storage solutions and comprehensive facility management that prioritize inventory accuracy, safety, and streamlined throughput.",
        bullets: [
          "FIFO/FEFO Inventory Control",
          "End-to-End Depot Operations",
          "Real-time Stock Traceability",
          "Damage & EOL Management",
          "Safety & Compliance Audit",
          "Asset Protection & Security"
        ],
        buttonText: "Request Specification",
        imageName: "hero_bg.png",
        isDarkButton: false
      },
      {
        id: "value-added-services",
        iconName: "FileText",
        title: "Value Added Services & Technology Integration",
        description: "Enhancing supply chain intelligence through digitized documentation, precision scanning, and customized administrative support systems.",
        bullets: [
          "Advanced Barcode Scanning",
          "Digital Inventory Reporting",
          "Custom Labeling & Stickering",
          "Automated Dispatch Support",
          "Real-time Data Capture"
        ],
        buttonText: "Request Specification",
        imageName: "control_room.png",
        isDarkButton: true
      },
      {
        id: "mhe-solutions",
        iconName: "Users",
        title: "MHE Solutions & Workforce Management",
        description: "Empowering logistics with heavy-duty material handling equipment and highly trained operators who ensure safe and efficient floor movement.",
        bullets: [
          "Reach Truck & Forklift Ops",
          "BOPT Maintenance & Supply",
          "Skilled Technical Manpower",
          "Managed Workforce Teams",
          "Safety Training & Certs"
        ],
        buttonText: "Request Specification",
        imageName: "workforce.png",
        isDarkButton: false
      },
      {
        id: "dispatch-logistics",
        iconName: "Truck",
        title: "Dispatch & Logistics Operations",
        description: "Streamlining the outbound flow through systematic vehicle management, documentation accuracy, and optimized dispatch protocols.",
        bullets: [
          "Outbound Dispatch Planning",
          "Vehicle Dock Management",
          "Shipping Documentation",
          "Dispatch Readiness Audit",
          "Transit Monitoring Support"
        ],
        buttonText: "Request Specification",
        imageName: "loading_docks.png",
        isDarkButton: true
      }
    ],
    cta: {
      title: "Ready to Optimize Your Operations?",
      subtitle: "Connect with our engineering and logistics specialists to discuss a tailored solution for your enterprise.",
      primaryCta: "Talk to an Expert",
      secondaryCta: "Download Capability Deck"
    }
  },
  quotePage: {
    banner: {
      title: "Let's Build the Right Supply Chain Solution for Your Business",
      subtitle: "Every manufacturing operation is unique. Share your business requirements through our secure Google Form, and our supply chain experts will prepare a customized solution based on your operational needs."
    },
    whyComplete: {
      title: "Why Complete This Form?",
      description: "The information you provide helps our operations team understand your manufacturing and logistics requirements, allowing us to recommend the most efficient, scalable, and cost-effective solution."
    },
    whatYouCanRequest: {
      title: "What You Can Request",
      items: [
        { label: "Contract Manufacturing", iconName: "Factory" },
        { label: "Factory Job Work", iconName: "Settings" },
        { label: "SFG to FG Conversion", iconName: "Layers" },
        { label: "Warehouse Management", iconName: "Warehouse" },
        { label: "Inventory Control", iconName: "ClipboardList" },
        { label: "Barcode Scanning", iconName: "Barcode" },
        { label: "Secondary Packaging", iconName: "Box" },
        { label: "MHE (Forklift/RT)", iconName: "Dolly" },
        { label: "Dispatch Operations", iconName: "Truck" }
      ]
    },
    sidebar: {
      whyChooseUs: {
        title: "Why Choose Us",
        items: [
          "End-to-end 3PL Solutions",
          "Complete Manufacturing Support",
          "Technology-Driven Operations",
          "FMCG Supply Chain Specialists"
        ]
      },
      contactSupport: {
        title: "Contact Support",
        phone: "+91 98765 43210",
        email: "sales@vaishnavient.com",
        whatsapp: "https://wa.me/919876543210"
      }
    },
    process: {
      title: "Our Process",
      steps: [
        { number: 1, label: "Submit Requirements" },
        { number: 2, label: "Expert Review" },
        { number: 3, label: "Consultation" },
        { number: 4, label: "Custom Proposal" },
        { number: 5, label: "Onboarding" }
      ]
    },
    confidentialityNote: "Your information is kept confidential and will only be used to prepare a customized business proposal. We respect your privacy and do not share your information with third parties.",
    trustedMarquee: {
      title: "TRUSTED BY GLOBAL LEADERS",
      logos: [
        "Hindustan Unilever Limited",
        "Unilever",
        "A Century of Excellence",
        "Lotus Herbals",
        "Kwality Wall's",
        "Pidilite"
      ]
    }
  },
  aboutPage: {
    banner: {
      badge: "About Our Enterprise",
      title: "Specialized E2E 3PL Solutions Provider",
      subtitle: "Vaishnavi Enterprises is a premier End-to-End Third-Party Logistics partner, dedicated to empowering manufacturing units through our core principles of Operational Excellence, Process Compliance, and Supply Chain Velocity.",
      primaryCta: "Our Solutions",
      secondaryCta: "Contact Expert"
    },
    missionVision: {
      mission: {
        title: "Our Mission",
        description: "To become the preferred operational partner for manufacturing companies by delivering reliable, technology-driven, and scalable supply chain solutions.",
        iconName: "Rocket"
      },
      vision: {
        title: "Our Vision",
        description: "Building smarter supply chains through people, processes, and technology.",
        iconName: "Eye"
      }
    },
    competencies: {
      subtitle: "CORE COMPETENCIES",
      title: "A Compliance and Velocity Partner",
      description: "We combine skilled manpower, advanced processes, and technology-driven systems to create a seamless operational environment. Our focus as a compliance and velocity partner ensures that your manufacturing units operate at peak performance with zero friction.",
      bullets: [
        "Expertise in SFG to FG transformation",
        "Integrated Warehouse & Depot Operations",
        "Real-time Barcode-based Traceability"
      ],
      cards: [
        {
          title: "Factory Job Work",
          description: "Specializing in SFG to FG conversion and transformation with industrial precision.",
          iconName: "Wrench",
          isDark: false
        },
        {
          title: "Smart Inventory",
          description: "Barcode-based traceability and advanced inventory management systems.",
          iconName: "Layers",
          isDark: true
        },
        {
          title: "MHE Solutions",
          description: "Full-scale Material Handling Equipment and expert in-plant logistics.",
          iconName: "Dolly",
          isDark: true
        },
        {
          title: "Supply Velocity",
          description: "Value-added services designed to maximize throughput and operational speed.",
          iconName: "Zap",
          isDark: false
        }
      ]
    },
    journey: {
      title: "Journey of Growth",
      subtitle: "From a regional logistics hub to a national industry leader, our growth is marked by consistent innovation and strategic expansion.",
      timeline: [
        {
          badge: "Inception",
          title: "The Foundation",
          description: "Vaishnavi Enterprises was established in 2004 with a single warehouse and a vision to redefine B2B logistics in the manufacturing sector.",
          imageName: "inception.png"
        },
        {
          badge: "Expansion",
          title: "National Expansion",
          description: "Expanded operations to 15 major industrial hubs across the country, implementing our first proprietary fleet management system.",
          imageName: "loading_docks.png"
        },
        {
          badge: "Innovation",
          title: "Technological Era",
          description: "Today, we manage over 2 million square feet of warehousing space, powered by AI-driven logistics and 100% sustainable energy practices.",
          imageName: "control_room.png"
        }
      ]
    },
    leadership: {
      title: "The Leadership Team",
      subtitle: "Guided by decades of collective experience in global logistics and industrial engineering.",
      members: [
        {
          name: "Vikram Singh",
          role: "Founder & Managing Director",
          imageName: "leader_vikram.png"
        },
        {
          name: "Ananya Sharma",
          role: "Chief Operations Officer",
          imageName: "leader_ananya.png"
        },
        {
          name: "Rajesh Iyer",
          role: "Chief Technology Officer",
          imageName: "leader_rajesh.png"
        },
        {
          name: "Meera Kapoor",
          role: "Head of Compliance & Quality",
          imageName: "leader_meera.png"
        }
      ]
    },
    standards: {
      subtitle: "STANDARDS OF INTEGRITY",
      title: "Quality & Compliance",
      description: "We believe that excellence is not an act, but a habit. Our operational protocols are strictly aligned with international safety and quality benchmarks to ensure your cargo and reputation are always protected.",
      bullets: [
        {
          title: "ISO 9001:2015 Certified",
          description: "International standard for quality management systems ensuring consistent high-performance delivery.",
          iconName: "ShieldCheck"
        },
        {
          title: "ISO 45001 - Safety First",
          description: "Rigorous occupational health and safety management protocols protecting our 1000+ staff members.",
          iconName: "Users"
        },
        {
          title: "Environmental Compliance",
          description: "Commitment to reducing carbon footprint through green logistics and waste management optimization.",
          iconName: "Leaf"
        }
      ],
      achievement: {
        score: "99.8%",
        label: "Average annual compliance audit score since 2018.",
        imageName: "certificate.png"
      }
    }
  },
  industriesPage: {
    banner: {
      title: "Global Expertise. Industry Precision.",
      subtitle: "We deliver specialized logistics and manufacturing solutions tailored to the unique complexities of the world's most demanding sectors."
    },
    sectors: [
      {
        id: "automotive-aerospace",
        title: "Automotive & Aerospace",
        description: "Managing JIT (Just-In-Time) manufacturing cycles and high-value component logistics for critical assembly lines.",
        challenge: "Zero-room-for-error delivery windows for aircraft engine components.",
        caseStudy: "Reduced downtime by 24% for a Tier-1 aero manufacturer through integrated supply chain visibility.",
        iconName: "Plane"
      },
      {
        id: "fmcg-retail",
        title: "FMCG & Retail",
        description: "Scalable warehousing and last-mile distribution networks designed for rapid consumer demand shifts and peak seasonality.",
        challenge: "High-velocity SKU management during 300% demand spikes.",
        caseStudy: "Deployed an AI-driven inventory system for a national retailer, cutting stock-outs by 40%.",
        iconName: "ShoppingCart"
      },
      {
        id: "pharma-healthcare",
        title: "Pharma & Healthcare",
        description: "Cold-chain logistics and GXP-compliant storage solutions for temperature-sensitive medical supplies.",
        challenge: "Maintaining strict -80°C temperature integrity across 3,000 miles.",
        caseStudy: "Achieved 99.9% temperature compliance for a major vaccine distribution project.",
        iconName: "Activity"
      },
      {
        id: "electronics",
        title: "Electronics",
        description: "Secure, anti-static handling of high-sensitivity semiconductors and consumer electronic components.",
        challenge: "Fragile component security and theft-prevention in transit.",
        caseStudy: "Implemented GPS-locked containers, reducing transit shrinkage to nearly 0%.",
        iconName: "Cpu"
      },
      {
        id: "heavy-engineering",
        title: "Heavy Engineering",
        description: "Expertise in ODC (Over Dimensional Cargo) and heavy lift operations for infrastructure and industrial projects.",
        challenge: "Multimodal transport of 200-ton turbine units across mountainous terrain.",
        caseStudy: "Managed the complete logistical rollout of a new thermal power plant, delivering 500+ ODC shipments on schedule.",
        iconName: "Wrench",
        imageName: "heavy_engineering.png"
      }
    ],
    beyond: {
      subtitle: "BEYOND TRANSPORT",
      title: "Solving Structural Inefficiencies",
      cards: [
        {
          id: "visibility",
          title: "Real-time Visibility Engine",
          description: "Our proprietary platform provides granular tracking for complex multi-leg journeys, allowing for proactive disruption management.",
          isTall: true,
          imageName: "visibility_engine.png"
        },
        {
          id: "compliance",
          title: "Regulatory Compliance",
          description: "Deep understanding of global trade regulations, customs clearance, and industry-specific audits like GXP and ISO.",
          isTall: false,
          imageName: "regulatory_compliance.png"
        },
        {
          id: "sustainability",
          title: "Sustainable Logistics",
          iconName: "Leaf",
          isSmall: true,
          imageName: "sustainable_logistics.png"
        },
        {
          id: "risk",
          title: "Risk Mitigation",
          iconName: "Shield",
          isSmall: true,
          imageName: "risk_mitigation.png"
        }
      ]
    },
    cta: {
      title: "Partner with Industry Leaders",
      subtitle: "Ready to optimize your sector-specific logistics? Our team is standing by to design your custom solution.",
      primaryCta: "Consult Our Specialists",
      secondaryCta: "View Service Portfolio"
    }
  },
  contactPage: {
    banner: {
      title: "Let's Build Your Supply Chain Together",
      subtitle: "Whether you need contract manufacturing, warehouse management, factory job work, MHE solutions, or complete 3PL support, our experts are ready to understand your requirements and deliver a customized solution.",
      imageName: "warehouse_agv.png"
    },
    cards: [
      {
        id: "office",
        title: "Head Office",
        description: "Vaishnavi Enterprises, Corporate HQ, Tech Hub, 500, City, State, ZIP, Country",
        buttonText: "View on Google Maps",
        iconName: "MapPin"
      },
      {
        id: "call",
        title: "Call Us",
        numbers: [
          { label: "Main", value: "+1 (800) 123-4567" },
          { label: "Sales", value: "+1 (800) 123-4568" },
          { label: "Support", value: "+1 (800) 123-4569" }
        ],
        buttons: [
          { label: "Call Sales", href: "tel:+18001234568" },
          { label: "Call Support", href: "tel:+18001234569" }
        ],
        iconName: "Phone"
      },
      {
        id: "email",
        title: "Email Us",
        emails: [
          "sales@vaishnavi.com",
          "support@vaishnavi.com",
          "info@vaishnavi.com"
        ],
        buttonText: "Send Email",
        buttonHref: "mailto:sales@vaishnavi.com",
        iconName: "Mail"
      },
      {
        id: "hours",
        title: "Working Hours",
        schedule: [
          { days: "Mon-Fri", hours: "9:00 - 18:00" },
          { days: "Saturday", hours: "9:00 - 14:00" },
          { days: "Sunday", hours: "Closed" }
        ],
        alertText: "24/7 Emergency Support Available for Contracted Clients",
        iconName: "Clock"
      }
    ],
    form: {
      subtitle: "CONNECT WITH EXPERTS",
      title: "Send Us Your Requirements",
      description: "Fill in your details and our supply chain specialists will contact you within 24-48 business hours to discuss your project in detail.",
      features: [
        {
          title: "Tailored Solutions",
          description: "We design operations around your specific business KPIs.",
          iconName: "CheckCircle"
        },
        {
          title: "Data-Driven Approach",
          description: "Advanced modeling to optimize your logistics cost.",
          iconName: "TrendingUp"
        }
      ]
    },
    partnerships: {
      title: "Why Global MNCs Partner With Us",
      subtitle: "Unrivaled excellence in industrial logistics and manufacturing operations.",
      cards: [
        {
          title: "End-to-End Solutions",
          description: "We handle everything from raw material procurement to final mile delivery, ensuring seamless visibility.",
          iconName: "Package"
        },
        {
          title: "Manufacturing Support",
          description: "On-site job work and assembly line management optimized for throughput and quality control.",
          iconName: "Factory"
        },
        {
          title: "Advanced MHE",
          description: "State-of-the-art Material Handling Equipment and maintenance services for maximum uptime.",
          iconName: "Wrench"
        },
        {
          title: "Compliance First",
          description: "100% adherence to labor laws, safety standards, and international quality certifications.",
          iconName: "Shield"
        },
        {
          title: "Operational Visibility",
          description: "Real-time reporting dashboards for performance tracking across all operational nodes.",
          iconName: "BarChart2"
        },
        {
          title: "Expert Workforce",
          description: "Skilled talent pool trained specifically for high-precision manufacturing environments.",
          iconName: "Users"
        }
      ]
    },
    map: {
      title: "Our Strategic Location",
      subtitle: "Interactive Map View Protected for Privacy",
      location: "Location: Tech Hub Business District, Sector 500",
      buttonText: "Get Directions"
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What industries do you specialize in for contract manufacturing?",
          answer: "We specialize in Automotive, FMCG, Electronics, Pharmaceuticals, and Heavy Engineering. Our teams are fully trained in sector-specific assembly, GXP compliance, clean-room standards, and JIT dispatch."
        },
        {
          question: "How quickly can you mobilize a workforce for a new factory site?",
          answer: "Typically, we can deploy a trained core team and setup initial operations within 15-30 days of commercial sign-off, depending on size and location."
        },
        {
          question: "Do you offer shared warehousing or only dedicated facilities?",
          answer: "We support both! We provide multi-user (shared) warehousing for flexible storage and dedicated warehouse management services custom-tailored to large industrial accounts."
        },
        {
          question: "Are your MHE solutions available on a rental basis?",
          answer: "Yes, we offer Material Handling Equipment (MHE) on flexible short-term and long-term rental contracts, including fully certified operators and 24/7 maintenance support."
        },
        {
          question: "What certifications does Vaishnavi Enterprises hold?",
          answer: "We are ISO 9001:2015 (Quality), ISO 45001:2018 (Occupational Health & Safety), and GDP/GXP (Pharma Distribution Compliance) certified."
        },
        {
          question: "Do you provide pan-India logistics support?",
          answer: "Yes, our depot, secondary transport, and workforce networks span across all major industrial clusters and states in India."
        },
        {
          question: "How do you handle quality control for contract manufacturing?",
          answer: "We operate dedicated on-site Quality Management Teams who oversee continuous in-process checks, coordinate with your engineering standards, and issue strict compliance sheets before final packaging."
        }
      ]
    }
  }
};
