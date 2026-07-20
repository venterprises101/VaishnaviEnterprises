// All website text content extracted for easy updates and maintenance

export const content = {
  navbar: {
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
        value: `${new Date().getFullYear() - 2008}+`,
        label: "Years Experience in Industrial Logistics",
        position: "top-right" // visual anchor placement in design
      },
      {
        id: "clients",
        value: "20+",
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
    subtitle: "Operating premium industrial facilities including our 1.5 Lakh sq. ft. logistics hub in Gujarat and a state-of-the-art automation facility in Baddi (Himachal Pradesh), we set the benchmark for modern supply chain operations.",
    ctaButton: "View All Facility Details",
    items: [
      {
        id: "gujarat-hub",
        title: "Gujarat Central Hub",
        description: "Our 1.5 Lakh sq. ft. facility featuring fully automated sorting and advanced inventory management.",
        imageName: "infrastructure.png"
      },
      {
        id: "baddi-lab",
        title: "Baddi, Automation Facility",
        description: "R&D center in Baddi (Himachal Pradesh) for industrial automation and precision expert components.",
        imageName: "factory.png"
      },
      {
        id: "loading-docks",
        title: "Loading Docks",
        description: "Multiple docking stations for rapid turnaround.",
        imageName: "logistic.png"
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
    logo: "Vaishnavi Enterprises",
    description: "Leading the way in industrial logistics and contract manufacturing solutions. We drive growth for our clients through precision and reliability.",
    quickLinks: {
      title: "QUICK LINKS",
      items: [
        { label: "Home", href: "#home" },
        { label: "About Company", href: "#about-us" },
        { label: "Our Services", href: "#services-details" },
        { label: "Infrastructure", href: "#infrastructure" },
        { label: "Request Quote", href: "#request-quote" }
      ]
    },
    coreServices: {
      title: "CORE SERVICES",
      items: [
        { label: "Warehousing Solutions", href: "#services-details-warehousing-depot-management" },
        { label: "Supply Chain Management", href: "#services-details-dispatch-logistics-execution" },
        { label: "Contract Manufacturing", href: "#services-details-contract-manufacturing" },
        { label: "Industrial Job Work", href: "#services-details-contract-manufacturing" },
        { label: "Inventory Control", href: "#services-details-inventory-control-traceability" }
      ]
    },
    contactDetails: {
      title: "CONTACT DETAILS",
      address: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205",
      emails: [
        { label: "Head office", value: "adminho@thevaishnavi.com" },
        { label: "Management", value: "admingujrat@thevaishnavi.com" },
        { label: "Proprietor", value: "prakashgupta@thevaishnavi.com" },
        { label: "HR team", value: "hrho@thevaishnavi.com" }
      ],
      phones: ["+91 98050 02582", "+91 80913 52798"]
    },
    socialLinks: [
      { name: "WhatsApp", href: "https://wa.me/919805002582" },
      { name: "Instagram", href: "https://www.instagram.com/v.enterprises101/" },
      { name: "Mail", href: "mailto:prakashgupta@thevaishnavi.com" }
    ],
    copyright: "© 2024 Vaishnavi Enterprises. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#privacy-policy" },
      { label: "Terms of Service", href: "#terms-of-service" },
      { label: "Cookie Policy", href: "#cookie-policy" }
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
        id: "contract-manufacturing",
        iconName: "Settings",
        title: "Contract Manufacturing & Job Work",
        description: "End-to-end production support specializing in the transformation of raw materials or semi-finished goods into market-ready products with uncompromising quality control.",
        bullets: [
          "SFG to FG Conversion",
          "SFG to SFG Processing",
          "Secondary Packaging",
          "Product Assembly",
          "Kitting & Bundling",
          "Repacking",
          "Labeling & Price Coding",
          "End-of-Line (EOL) Operations",
          "Quality Inspection Support",
          "Product Sorting & Staging"
        ],
        benefits: [
          "Increased production efficiency",
          "Reduced operational costs",
          "Flexible workforce",
          "Faster order completion"
        ],
        buttonText: "Request Specification",
        imageName: "why_choose_us.png",
        isDarkButton: true
      },
      {
        id: "in-plant-logistics",
        iconName: "Layers",
        title: "In-Plant Logistics",
        description: "Efficient internal material movement to keep production running without interruptions.",
        includedServices: [
          "Raw Material Movement",
          "Line Feeding",
          "WIP (Work-in-Progress) Handling",
          "Finished Goods Transfer",
          "Dock Operations",
          "Material Transportation",
          "Internal Warehouse Support"
        ],
        benefits: [
          "Continuous production flow",
          "Reduced downtime",
          "Improved operational efficiency",
          "Safe material handling"
        ],
        buttonText: "Request Specification",
        imageName: "factory.png",
        isDarkButton: false
      },
      {
        id: "warehousing-depot-management",
        iconName: "Warehouse",
        title: "Warehousing & Depot Management",
        description: "Complete warehouse operations from receiving to dispatch.",
        includedServices: [
          "Depot Management",
          "Warehouse Operations",
          "Storage Management",
          "Pick & Pack",
          "Inventory Management",
          "Cycle Counting",
          "Stock Audits",
          "Batch Management",
          "Cross Docking",
          "Order Fulfillment"
        ],
        benefits: [
          "Accurate inventory",
          "Reduced stock loss",
          "Optimized storage utilization",
          "Faster order processing"
        ],
        buttonText: "Request Specification",
        imageName: "hero_bg.png",
        isDarkButton: true
      },
      {
        id: "inventory-control-traceability",
        iconName: "Barcode",
        title: "Inventory Control & Traceability",
        description: "Technology-driven inventory management for complete visibility.",
        includedServices: [
          "Barcode Scanning",
          "Batch Tracking",
          "Expiry Management",
          "FEFO/FIFO Compliance",
          "Real-Time Inventory Tracking",
          "Inventory Audits",
          "Stock Reconciliation"
        ],
        benefits: [
          "99%+ inventory accuracy",
          "Complete product traceability",
          "Compliance-ready operations",
          "Reduced inventory errors"
        ],
        buttonText: "Request Specification",
        imageName: "Technology_era.png",
        isDarkButton: false
      },
      {
        id: "mhe-solutions",
        iconName: "Layers",
        title: "Material Handling Equipment (MHE) Solutions",
        description: "Reliable equipment and certified operators for warehouse and factory operations.",
        equipment: [
          "Forklifts",
          "Reach Trucks (RT)",
          "Battery Operated Pallet Trucks (BOPT)",
          "Hand Pallet Trucks",
          "Stackers",
          "Price Coding Machines"
        ],
        includedServices: [
          "Equipment Supply",
          "Certified Operators",
          "Fleet Management",
          "Shift-Based Deployment",
          "Equipment Maintenance Coordination"
        ],
        benefits: [
          "Reduced downtime",
          "Improved warehouse productivity",
          "Safe operations",
          "Skilled manpower availability"
        ],
        buttonText: "Request Specification",
        imageName: "forklift with men.png",
        isDarkButton: true
      },
      {
        id: "dispatch-logistics-execution",
        iconName: "Truck",
        title: "Dispatch & Logistics Execution",
        description: "Complete outbound logistics and dispatch management.",
        includedServices: [
          "Order Processing",
          "Order Picking",
          "Dispatch Planning",
          "Vehicle Coordination",
          "Loading & Unloading",
          "Dock Management",
          "Delivery Challans",
          "Sales Invoicing",
          "Commercial Documentation"
        ],
        benefits: [
          "Faster dispatches",
          "Accurate documentation",
          "Reduced turnaround time",
          "On-time deliveries"
        ],
        buttonText: "Request Specification",
        imageName: "logistic.png",
        isDarkButton: false
      }
    ],
    industriesSupported: [
      "FMCG",
      "Food & Beverage",
      "Consumer Goods",
      "Automotive Components",
      "Pharmaceuticals",
      "Retail & Distribution",
      "Manufacturing"
    ],
    whyChooseUs: [
      "End-to-End 3PL Solutions",
      "Factory Job Work Expertise",
      "In-Plant Logistics Specialists",
      "Skilled & Certified Workforce",
      "Modern MHE Fleet",
      "Barcode-Enabled Traceability",
      "FEFO/FIFO Compliance",
      "High-Volume Warehouse Operations",
      "On-Time Dispatch Execution",
      "Scalable Operations",
      "Technology-Driven Inventory Management",
      "Compliance & Safety Focus"
    ],
    cta: {
      title: "Ready to Optimize Your Operations?",
      subtitle: "Connect with our logistics and industrial automation experts to discuss a tailored solution for your enterprise.",
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
        phone: "+91 98050 02582",
        email: "prakashgupta@thevaishnavi.com",
        whatsapp: "https://wa.me/919805002582"
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
        { name: "Hindustan Unilever Limited", image: "Brand_Logos/hindustan_uniliver_limited.png" },
        { name: "Unilever", image: "Brand_Logos/unilever.png" },
        { name: "Kwality Wall's", image: "Brand_Logos/kwality_walls.png" },
        { name: "Pidilite", image: "Brand_Logos/pidilite.png" },
        { name: "Lotus Herbals", image: "Brand_Logos/lotus_herbals.png" },
        { name: "RM Group", image: "Brand_Logos/RM_Group.png" }
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
        description: "To deliver reliable, efficient, and technology-driven manufacturing support and 3PL solutions that help businesses optimize operations, enhance productivity, and build resilient supply chains.",
        iconName: "Rocket"
      },
      vision: {
        title: "Our Vision",
        description: "To become the preferred manufacturing support and logistics partner for organizations seeking operational excellence, innovation, and long-term value across the supply chain.",
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
          description: "Vaishnavi Enterprises was established with a single warehouse and a vision to redefine B2B logistics in the manufacturing sector.",
          imageName: "inception.png"
        },
        {
          badge: "Expansion",
          title: "National Expansion",
          description: "Expanded operations to key industrial hubs across the country, implementing our first proprietary fleet management system.",
          imageName: "nation_expectation.png"
        },
        {
          badge: "Innovation",
          title: "Technological Era",
          description: "Today, we manage modern warehousing spaces, powered by advanced logistics and 100% sustainable energy practices.",
          imageName: "Technology_era.png"
        }
      ]
    },
    leadership: {
      title: "The Leadership Team",
      subtitle: "Guided by decades of collective experience in global logistics and industrial engineering.",
      members: [
        {
          name: "Prakash Gupta",
          role: "Founder & Owner",
          imageName: "Team/owner.jpeg"
        },
        {
          name: "Surender Rana",
          role: "Head of Compliance",
          imageName: "Team/hr_rana.png"
        },
        {
          name: "Urvashi Thakur",
          role: "Sales & Administration",
          imageName: "Team/sales_and_administration.png"
        },
        {
          name: "Nilesh Barot",
          role: "Site Incharge",
          imageName: "Team/site_Incharge.png"
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
        imageName: "checker.png"
      }
    },
    story: [
      "At **Vaishnavi Enterprises**, we specialize in delivering End-to-End (E2E) Third-Party Logistics (3PL) and manufacturing support solutions that help businesses streamline operations, improve productivity, and maintain complete supply chain visibility.",
      "We work as an extension of our clients' operations, providing reliable factory job work, in-plant logistics, warehousing, inventory management, depot operations, and dispatch execution. By combining skilled manpower, modern equipment, and technology-driven processes, we enable manufacturers to focus on production while we efficiently manage the movement of materials and finished goods.",
      "Our expertise spans every stage of the supply chain—from **Semi-Finished Goods (SFG) to Finished Goods (FG) conversion** and **warehouse management** to **barcode-enabled inventory control**, **Material Handling Equipment (MHE) operations**, and **order dispatch**. Every solution is designed to improve operational efficiency, reduce costs, and ensure timely product delivery.",
      "With a strong commitment to safety, compliance, and operational excellence, we follow standardized processes that deliver consistent quality and complete traceability across manufacturing and logistics operations. Whether supporting production lines inside factories or managing high-volume distribution centers, our experienced team ensures smooth, accurate, and uninterrupted operations.",
      "We proudly serve industries including **FMCG, Food & Beverage, Consumer Goods, Automotive Components, Electrical & Electronics, Pharmaceuticals, and Retail & Distribution**, providing scalable solutions tailored to each industry's unique operational requirements."
    ],
    coreValues: [
      {
        title: "Operational Excellence",
        description: "We focus on efficiency, precision, and continuous improvement in every operation.",
        iconName: "Award"
      },
      {
        title: "Customer Partnership",
        description: "We build long-term relationships by understanding our clients' business goals and delivering customized solutions.",
        iconName: "Users"
      },
      {
        title: "Safety & Compliance",
        description: "We maintain the highest standards of workplace safety, regulatory compliance, and operational discipline.",
        iconName: "ShieldCheck"
      },
      {
        title: "Integrity",
        description: "We conduct every project with honesty, transparency, and accountability.",
        iconName: "Check"
      },
      {
        title: "Innovation",
        description: "We embrace technology and process improvements to deliver smarter, faster, and more accurate supply chain solutions.",
        iconName: "Zap"
      },
      {
        title: "Reliability",
        description: "We are committed to delivering dependable services that keep our clients' operations running smoothly.",
        iconName: "Clock"
      }
    ],
    whyChooseUs: [
      "End-to-End 3PL Supply Chain Solutions",
      "Specialized Factory Job Work & Contract Manufacturing Support",
      "Expertise in SFG to FG & SFG to SFG Conversion",
      "In-Plant Logistics & Material Movement",
      "Comprehensive Warehouse & Depot Management",
      "Barcode-Based Inventory Tracking & Traceability",
      "FEFO/FIFO Compliant Inventory Management",
      "Material Handling Equipment (MHE) with Certified Operators",
      "Skilled Workforce & Scalable Operations",
      "Accurate Documentation, Invoicing & Dispatch Management",
      "Technology-Driven Processes",
      "Commitment to Safety, Quality & Customer Satisfaction"
    ],
    closingText: "At **Vaishnavi Enterprises**, we don't just provide logistics services—we become your trusted operational partner, ensuring your manufacturing, warehousing, and supply chain processes run efficiently, accurately, and on time."
  },
  industriesPage: {
    banner: {
      title: "Global Expertise. Industry Precision.",
      subtitle: "We deliver specialized logistics and manufacturing solutions tailored to the unique complexities of the world's most demanding sectors."
    },
    sectors: [
      {
        id: "fmcg",
        iconName: "ShoppingBag",
        title: "FMCG (Fast-Moving Consumer Goods)",
        description: "High-volume production requires speed, precision, and complete traceability. We help FMCG manufacturers streamline operations through agile manufacturing support, efficient warehouse management, and technology-driven inventory control.",
        howWeSupport: [
          "Contract Manufacturing (SFG to FG)",
          "Secondary Packaging",
          "In-Plant Logistics",
          "FEFO/FIFO Inventory Management",
          "Barcode & Batch Traceability",
          "Depot Management",
          "Order Fulfillment",
          "Dispatch Execution"
        ]
      },
      {
        id: "food-beverage",
        iconName: "Coffee",
        title: "Food & Beverage",
        description: "The food industry requires strict inventory rotation, hygiene standards, and efficient warehousing to protect product quality and shelf life.",
        howWeSupport: [
          "Inventory Control",
          "Batch Tracking",
          "FEFO Inventory Management",
          "Warehouse Operations",
          "Dispatch & Documentation"
        ]
      },
      {
        id: "automotive-components",
        iconName: "Car",
        title: "Automotive Components",
        description: "Automotive manufacturing depends on uninterrupted production and just-in-time material movement. Our logistics solutions help maintain smooth factory operations and efficient inventory management.",
        howWeSupport: [
          "Material Movement",
          "Line Feeding",
          "In-Plant Logistics",
          "Warehouse Operations",
          "MHE Support"
        ]
      },
      {
        id: "electrical-electronics",
        iconName: "Cpu",
        title: "Electrical & Electronics",
        description: "Electronic products require careful handling, accurate inventory tracking, and organized warehouse operations.",
        howWeSupport: [
          "Component Handling",
          "Barcode Traceability",
          "Inventory Management",
          "Packaging Support",
          "Dispatch Coordination"
        ]
      },
      {
        id: "pharma-healthcare",
        iconName: "PlusCircle",
        title: "Pharmaceuticals & Healthcare",
        description: "Compliance, traceability, and inventory accuracy are essential in pharmaceutical supply chains. We provide organized warehouse and logistics operations that support these requirements.",
        howWeSupport: [
          "Batch Tracking",
          "Barcode Scanning",
          "Inventory Management",
          "Warehouse Operations",
          "Dispatch Documentation"
        ]
      },
      {
        id: "consumer-goods",
        iconName: "Package",
        title: "Consumer Goods",
        description: "Consumer goods manufacturers need flexible logistics and warehouse support to meet changing market demand and maintain efficient distribution.",
        howWeSupport: [
          "Packaging & Repacking",
          "Warehouse Management",
          "Inventory Control",
          "Order Fulfillment",
          "Dispatch Operations"
        ]
      },
      {
        id: "retail-distribution",
        iconName: "TrendingUp",
        title: "Retail & Distribution",
        description: "We help retail and distribution businesses optimize warehouse operations, improve inventory visibility, and ensure timely order fulfillment.",
        howWeSupport: [
          "Depot Management",
          "Pick & Pack Operations",
          "Inventory Management",
          "Dispatch Coordination",
          "Warehouse Handling"
        ]
      }
    ],
    whyChooseUs: [
      "End-to-End 3PL Supply Chain Solutions",
      "Contract Manufacturing Expertise",
      "In-Plant Logistics Support",
      "Skilled & Certified Workforce",
      "Modern Material Handling Equipment (MHE)",
      "Barcode-Enabled Inventory Accuracy",
      "FEFO/FIFO Compliant Operations",
      "Scalable Warehouse & Depot Management",
      "Fast, Reliable Dispatch Execution",
      "Technology-Driven Supply Chain Operations"
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
          imageName: "nation_expectation.png"
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
      title: "Let's Build a Smarter Supply Chain Together",
      subtitle: "Whether you're a leading FMCG manufacturer, an automotive supplier, a food producer, or a growing distribution business, we provide reliable manufacturing support and integrated 3PL solutions that keep your operations running efficiently.",
      primaryCta: "Contact Our Team",
      secondaryCta: "Partner With Us"
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
        description: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205",
        buttonText: "View on Google Maps",
        iconName: "MapPin",
        mapUrl: "https://www.google.com/maps?q=30.931992,76.833513"
      },
      {
        id: "call",
        title: "Call Us",
        numbers: [
          { label: "Main", value: "+91 9805002582" },
          { label: "Sales", value: "+91 8091352798" },
          { label: "Support", value: "+91 9825219149" }
        ],
        buttons: [
          { label: "Call Sales", href: "tel:+918091352798" },
          { label: "Call Support", href: "tel:+919825219149" }
        ],
        iconName: "Phone"
      },
      {
        id: "email",
        title: "Email Us",
        emails: [
          { label: "Head office", value: "adminho@thevaishnavi.com" },
          { label: "Management", value: "admingujrat@thevaishnavi.com" },
          { label: "Proprietor", value: "prakashgupta@thevaishnavi.com" },
          { label: "HR team", value: "hrho@thevaishnavi.com" }
        ],
        buttonText: "Send Email",
        buttonHref: "mailto:prakashgupta@thevaishnavi.com",
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
      subtitle: "Visit our Head Office in Baddi, Solan, Himachal Pradesh",
      location: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205",
      buttonText: "Get Directions"
    },
    faqs: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What industries do you specialize in for contract manufacturing?",
          answer: "We specialize in FMCG, Electronics, Pharmaceuticals, and Heavy Engineering. Our teams are fully trained in sector-specific assembly, GXP compliance, clean-room standards, and JIT dispatch."
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
  },
  termsPage: {
    banner: {
      badge: "Legal Information",
      title: "Terms of Service",
    },
    intro: "",
    sections: [
      {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: "By accessing or using this website, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use this website."
      },
      {
        id: "about-services",
        title: "2. About Our Services",
        content: "Our company provides End-to-End (E2E) 3PL Supply Chain Solutions including, but not limited to:",
        list: [
          "Contract Manufacturing",
          "Factory Job Work",
          "SFG to FG Conversion",
          "SFG to SFG Processing",
          "Warehouse Management",
          "Depot Management",
          "Inventory Control",
          "Barcode Scanning",
          "Material Handling Equipment (MHE)",
          "Skilled Manpower Solutions",
          "Dispatch & Logistics Support",
          "Documentation & Invoicing Support"
        ],
        footer: "Information provided on this website is for general business purposes only and does not constitute a binding commercial agreement."
      },
      {
        id: "service-enquiries",
        title: "3. Service Enquiries",
        content: "Submitting an enquiry, quotation request, or proposal request through our website does not create a contractual relationship.",
        subContent: "All services are subject to:",
        list: [
          "Requirement analysis",
          "Site evaluation (if applicable)",
          "Commercial discussions",
          "Final agreement",
          "Service availability"
        ]
      },
      {
        id: "accuracy-info",
        title: "4. Accuracy of Information",
        content: "You agree to provide accurate and complete information when submitting:",
        list: [
          "Contact Forms",
          "Google Forms",
          "Proposal Requests",
          "Business Enquiries"
        ],
        footer: "Providing false or misleading information may result in rejection of your request."
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual Property",
        content: "Unless otherwise stated, all website content including:",
        list: [
          "Logos",
          "Graphics",
          "Icons",
          "Website design",
          "Text",
          "Images created for this website",
          "Documents"
        ],
        footer: "are the intellectual property of the company and may not be copied, reproduced, modified, or distributed without prior written permission."
      },
      {
        id: "website-usage",
        title: "6. Website Usage",
        content: "You agree not to:",
        list: [
          "Attempt unauthorized access to the website",
          "Upload malicious software",
          "Disrupt website functionality",
          "Copy website content for commercial purposes",
          "Misuse contact forms",
          "Submit spam or fraudulent enquiries"
        ]
      },
      {
        id: "third-party",
        title: "7. Third-Party Services",
        content: "This website may use third-party services such as:",
        list: [
          "Google Maps",
          "Google Forms",
          "Google Analytics",
          "Email Services"
        ],
        footer: "These services operate under their own terms and privacy policies."
      },
      {
        id: "pricing-quotations",
        title: "8. Pricing & Quotations",
        content: "Any pricing, estimates, or quotations shared through this website are indicative only and may change based on:",
        list: [
          "Project scope",
          "Operational requirements",
          "Location",
          "Workforce requirements",
          "Equipment requirements",
          "Contract duration"
        ],
        footer: "Final pricing will be confirmed through a formal commercial proposal."
      },
      {
        id: "limitation-liability",
        title: "9. Limitation of Liability",
        content: "While we strive to keep all information accurate and up to date, we do not guarantee:",
        list: [
          "Continuous website availability",
          "Error-free content",
          "Uninterrupted access"
        ],
        footer: "We shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website."
      },
      {
        id: "confidentiality",
        title: "10. Confidentiality",
        content: "Business information shared through our website is treated as confidential and used only for evaluating your enquiry and preparing proposals."
      },
      {
        id: "external-links",
        title: "11. External Links",
        content: "Our website may contain links to external websites. We are not responsible for the content or policies of third-party websites."
      },
      {
        id: "changes-terms",
        title: "12. Changes to Terms",
        content: "We reserve the right to update these Terms of Service at any time. Updated versions will be published on this page with the revised effective date."
      },
      {
        id: "governing-law",
        title: "13. Governing Law",
        content: "These Terms of Service shall be governed by and interpreted in accordance with the laws of India.",
        footer: "Any disputes shall be subject to the jurisdiction of the competent courts where the company is registered."
      },
      {
        id: "contact-info",
        title: "14. Contact Information",
        content: "For any questions regarding these Terms of Service, please contact us.",
        details: {
          companyName: "Vaishnavi Enterprises",
          email: "adminho@thevaishnavi.com",
          phones: ["+91 98050 02582", "+91 80913 52798", "+91 98252 19149"],
          address: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205"
        }
      }
    ]
  },
  privacyPage: {
    banner: {
      badge: "Privacy First",
      title: "Privacy Policy",
    },
    intro: "Vaishnavi Enterprises respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
    sections: [
      {
        id: "info-collection",
        title: "1. Information We Collect",
        content: "We collect information that you voluntarily provide to us when you fill out contact forms, request quotations, or submit business inquiries on our website. This may include:",
        list: [
          "Personal Identifiers: Full name, business title, or designation.",
          "Contact Information: Email address, phone number, and physical office address.",
          "Business Details: Company name, industry type, volume estimates, and operational requirements.",
          "Technical Data: IP address, browser type, operating system, and usage patterns collected automatically via cookies or Google Analytics."
        ]
      },
      {
        id: "how-we-use",
        title: "2. How We Use Your Information",
        content: "We use the collected information for specific commercial and administrative purposes, including:",
        list: [
          "Evaluating your logistics or contract manufacturing requirements.",
          "Preparing custom commercial proposals and service quotes.",
          "Communicating with you regarding your service enquiries.",
          "Improving website functionality, performance, and user experience.",
          "Complying with applicable laws, government regulations, or legal processes in India."
        ],
        footer: "We do not sell, rent, or trade your personal or business data to third-party marketers."
      },
      {
        id: "data-sharing",
        title: "3. Data Sharing and Disclosure",
        content: "We share your information only under the following limited circumstances:",
        list: [
          "With Consent: If you explicitly authorize us to share details with specific vendors or partners.",
          "Service Providers: With trusted third-party providers who manage website analytics, hosting, or email delivery.",
          "Legal Obligations: If required by law, regulatory authorities, court orders, or to protect the safety and rights of Vaishnavi Enterprises."
        ]
      },
      {
        id: "data-security",
        title: "4. Data Security",
        content: "We implement industry-standard administrative, technical, and physical security measures to protect your commercial inquiries and personal information. However, please note that no data transmission over the internet can be guaranteed to be 100% secure. While we strive to protect your data, you transmit it at your own risk."
      },
      {
        id: "data-retention",
        title: "5. Data Retention",
        content: "We retain business inquiries and contact details only as long as necessary to fulfill the purposes outlined in this policy, evaluate business needs, or comply with statutory record-keeping regulations under Indian law."
      },
      {
        id: "user-rights",
        title: "6. Your Privacy Rights",
        content: "Under the Digital Personal Data Protection Act (DPDPA), 2023 of India, you hold the following rights regarding your personal data:",
        list: [
          "Right to access the summary of personal data processed by us.",
          "Right to correct, update, or erase inaccurate or outdated contact information.",
          "Right to withdraw consent at any time for data processing.",
          "Right to nominate another individual to exercise these rights in the event of death or incapacity."
        ],
        footer: "To exercise any of these rights, please contact our privacy compliance representative at the details below."
      },
      {
        id: "contact-privacy",
        title: "7. Contact Privacy Officer",
        content: "For questions, clarifications, or requests concerning this Privacy Policy, please contact our compliance desk:",
        details: {
          companyName: "Vaishnavi Enterprises",
          email: "adminho@thevaishnavi.com",
          phones: ["+91 98050 02582", "+91 80913 52798"],
          address: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205"
        }
      }
    ]
  },
  cookiePage: {
    banner: {
      badge: "Transparency",
      title: "Cookie Policy",
    },
    intro: "This Cookie Policy explains how Vaishnavi Enterprises uses cookies and similar tracking technologies on our website. It explains what these technologies are, why we use them, and your rights to control their use.",
    sections: [
      {
        id: "what-are-cookies",
        title: "1. What Are Cookies?",
        content: "Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used by website owners to make websites work, work more efficiently, and provide reporting information."
      },
      {
        id: "why-use-cookies",
        title: "2. How We Use Cookies",
        content: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons for our website to operate (we refer to these as 'essential' or 'strictly necessary' cookies). Other cookies enable us to track and target the interests of our users to enhance their experience.",
        list: [
          "Essential Cookies: Necessary for basic website navigation and form submissions.",
          "Analytical Cookies: Like Google Analytics, which help us measure visitor traffic, popular pages, and referral sources.",
          "Functional Cookies: Used to render elements like interactive Google Maps for locating our depots and head office."
        ]
      },
      {
        id: "managing-cookies",
        title: "3. How You Can Control Cookies",
        content: "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some features and areas may be restricted.",
        list: [
          "Google Chrome: Go to Settings > Privacy and Security > Cookies and other site data.",
          "Mozilla Firefox: Go to Options > Privacy & Security > Enhanced Tracking Protection.",
          "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies.",
          "Apple Safari: Go to Preferences > Privacy > Block all cookies."
        ]
      },
      {
        id: "changes-cookie-policy",
        title: "4. Updates to This Policy",
        content: "We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed."
      },
      {
        id: "contact-cookies",
        title: "5. Contact Us",
        content: "If you have any questions about our use of cookies or other technologies, please contact us at:",
        details: {
          companyName: "Vaishnavi Enterprises",
          email: "adminho@thevaishnavi.com",
          address: "Vaishnavi Enterprises, B48 F, NEAR ROTARY CHOWK BIG -B COMPLEX, BADDI, Solan, Himachal Pradesh, 173205"
        }
      }
    ]
  }
};
