let data = [
  {
    "name": "Rahul Sharma",
    "email": "rahul.sharma.dev@example.com",
    "phone": "+91-9876543210",
    "location": "Bangalore",
    "summary": "Results-driven Frontend Engineer with 4 years of experience building scalable single-page applications. Passionate about web performance, accessibility, and crafting pixel-perfect user interfaces using React and TypeScript.",
    "skills":["React.js", "TypeScript", "Next.js", "Redux Toolkit", "Tailwind CSS", "Jest"],
    "social":["https://linkedin.com/in/rahulsharmadev", "https://github.com/rahulsharmacodes"],
    "preferredJob": "Frontend Engineer",
    "experience":[
      {
        "title": "Frontend Engineer",
        "company": "ZippyTech Solutions",
        "startDate": "2022-03-01",
        "endDate": "2026-03-01",
        "location": "Bangalore",
        "description": "Spearheaded the development of a high-traffic e-commerce storefront using Next.js and Tailwind CSS. Implemented advanced server-side rendering and static site generation, reducing initial load time by 45%. Collaborated directly with the design team to build a comprehensive UI component library, which improved team delivery speed by 30%."
      },
      {
        "title": "Junior UI Developer",
        "company": "StartupGenix",
        "startDate": "2020-07-01",
        "endDate": "2022-02-28",
        "location": "Pune",
        "description": "Developed dynamic and interactive user interfaces for a B2B SaaS analytics dashboard using React.js and D3.js. Refactored legacy vanilla JavaScript codebases into modular React components, decreasing bug reports by 20%. Integrated RESTful APIs and set up automated UI testing with Cypress, ensuring 95% test coverage across critical user flows."
      }
    ],
    "projects":[
      {
        "name": "FinDash Analytics",
        "description": "Designed and developed a real-time financial dashboard for retail investors to track portfolio performance. Utilized WebSockets to stream live market data directly into React components without performance degradation. The application successfully scaled to support 10,000 concurrent users with sub-second latency.",
        "technologies":["React", "TypeScript", "Socket.io", "Chart.js"],
        "impact":["Supported 10,000+ concurrent users", "Reduced data latency by 60%", "Achieved 99.9% frontend uptime"]
      },
      {
        "name": "Component UI Kit",
        "description": "Created an open-source, accessible React component library focused on high performance and customizability. Built comprehensive documentation using Storybook to allow developers to easily integrate components into their projects. The library gained over 500 stars on GitHub and was adopted by 3 internal company teams.",
        "technologies":["React", "Storybook", "Styled Components", "Rollup"],
        "impact":["500+ GitHub Stars", "Adopted by 3 enterprise teams", "Improved internal dev speed by 25%"]
      }
    ],
    "languages":["English", "Hindi"],
    "softSkills": ["Problem Solving", "Team Collaboration", "Agile Methodologies"],
    "totalExperienceYears": 4
  },
  {
    "name": "Priya Patel",
    "email": "priyapatel.ui@example.com",
    "phone": "+91-8765432109",
    "location": "Hyderabad",
    "summary": "Senior React Developer with 6 years of expertise in building complex, data-heavy enterprise web applications. Proven track record of optimizing frontend architecture and mentoring junior developers to achieve engineering excellence.",
    "skills":["React.js", "GraphQL", "Apollo Client", "Material UI", "Node.js", "Cypress"],
    "social":["https://linkedin.com/in/priyapatelui", "https://github.com/priyaui"],
    "preferredJob": "Senior React Developer",
    "experience":[
      {
        "title": "Senior React Developer",
        "company": "FinServe Technologies",
        "startDate": "2021-06-01",
        "endDate": "2026-03-01",
        "location": "Hyderabad",
        "description": "Architected the frontend infrastructure for a next-generation wealth management platform serving over 50,000 active users. Migrated the legacy REST architecture to GraphQL using Apollo Client, resulting in a 40% reduction in network payload size. Mentored a team of 5 frontend engineers, establishing strict code quality guidelines and reducing PR review times by 2 days."
      },
      {
        "title": "Frontend Developer",
        "company": "Innovate Software",
        "startDate": "2018-08-01",
        "endDate": "2021-05-31",
        "location": "Ahmedabad",
        "description": "Developed custom CRM solutions for healthcare providers, ensuring strict compliance with data privacy standards. Built responsive, mobile-first layouts using CSS Grid and Flexbox, improving mobile user retention by 35%. Automated deployment pipelines using GitHub Actions, decreasing release cycle times from weekly to daily."
      }
    ],
    "projects":[
      {
        "name": "HealthTrack Portal",
        "description": "Built a comprehensive patient management portal allowing doctors to securely access medical records and schedule appointments. Implemented end-to-end encryption on the client side before transmitting sensitive data to the backend. The system processed over 5,000 daily appointments with zero data breaches reported.",
        "technologies": ["React", "Redux", "Material UI", "Web Crypto API"],
        "impact":["Processed 5,000+ daily appointments", "0 data breaches", "Increased clinic efficiency by 40%"]
      },
      {
        "name": "E-Learning Platform",
        "description": "Developed an interactive video-based learning platform tailored for high school students in tier-2 Indian cities. Optimized video streaming capabilities for low-bandwidth connections using adaptive bitrate streaming techniques. The platform acquired 20,000 active students within the first six months of launch.",
        "technologies":["React", "Video.js", "Node.js", "Redis"],
        "impact":["20,000 active users", "Reduced buffering by 70%", "High user retention rate of 85%"]
      }
    ],
    "languages": ["English", "Gujarati", "Hindi"],
    "softSkills":["Mentoring", "System Architecture", "Time Management"],
    "totalExperienceYears": 6
  },
  {
    "name": "Amit Singh",
    "email": "amit.singh.vue@example.com",
    "phone": "+91-7654321098",
    "location": "Pune",
    "summary": "Innovative UI Developer with 3 years of experience specializing in Vue.js and modern CSS frameworks. Adept at translating complex Figma designs into highly interactive, accessible, and performant web applications.",
    "skills":["Vue.js", "Nuxt.js", "Vuex", "SCSS", "Bootstrap", "JavaScript", "Figma"],
    "social":["https://linkedin.com/in/amitsinghvue", "https://github.com/amitcodes"],
    "preferredJob": "UI Developer",
    "experience":[
      {
        "title": "UI Developer",
        "company": "DesignPro Labs",
        "startDate": "2023-01-01",
        "endDate": "2026-03-01",
        "location": "Pune",
        "description": "Engineered pixel-perfect, responsive web interfaces for multiple e-commerce clients using Vue.js and SCSS. Optimized core web vitals by implementing lazy loading and code splitting, boosting Lighthouse scores from 65 to 95. Collaborated seamlessly with UX designers to create smooth micro-interactions that increased user engagement by 15%."
      },
      {
        "title": "Web Developer Intern",
        "company": "TechTribe Solutions",
        "startDate": "2022-01-01",
        "endDate": "2022-12-31",
        "location": "Mumbai",
        "description": "Assisted in the development of corporate websites and internal administration panels using HTML, CSS, and vanilla JavaScript. Resolved over 100 UI bugs and cross-browser compatibility issues across Safari, Chrome, and Firefox. Contributed to the migration of legacy jQuery code to modern ES6 standards, improving script execution speed."
      }
    ],
    "projects":[
      {
        "name": "Travel Booking Engine",
        "description": "Developed the frontend of a flight and hotel booking platform with complex search filters and real-time pricing updates. Created a dynamic caching system on the client side to store previous search results, drastically improving perceived performance. The application successfully handled a 300% spike in traffic during holiday sale events.",
        "technologies":["Vue.js", "Vuex", "Tailwind CSS", "Axios"],
        "impact":["Handled 300% traffic spikes", "Improved load times by 2 seconds", "Increased conversion rate by 12%"]
      },
      {
        "name": "Inventory Management UI",
        "description": "Designed a responsive dashboard for warehouse managers to track stock levels and automate reordering processes. Implemented complex data grids with sorting, filtering, and bulk action capabilities handling datasets of up to 50,000 rows. Reduced the time taken to generate inventory reports from 15 minutes to under 5 seconds.",
        "technologies":["Nuxt.js", "SCSS", "Ag-Grid", "Chart.js"],
        "impact":["Processed 50k+ data rows", "Reduced report generation time by 99%", "Adopted by 5 major warehouses"]
      }
    ],
    "languages": ["English", "Hindi", "Marathi"],
    "softSkills": ["Creativity", "Attention to Detail", "Adaptability"],
    "totalExperienceYears": 3
  },
  {
    "name": "Neha Gupta",
    "email": "neha.g.frontend@example.com",
    "phone": "+91-9988776655",
    "location": "Gurgaon",
    "summary": "Detail-oriented Frontend Developer with 5 years of experience in building scalable enterprise applications. Strong focus on state management, performance tuning, and delivering robust software solutions within Agile environments.",
    "skills":["React.js", "Redux", "TypeScript", "Styled Components", "Webpack", "Playwright"],
    "social":["https://linkedin.com/in/nehaguptadev", "https://github.com/nehag"],
    "preferredJob": "Frontend Developer",
    "experience":[
      {
        "title": "Frontend Developer",
        "company": "CloudScale Inc.",
        "startDate": "2021-11-01",
        "endDate": "2026-03-01",
        "location": "Gurgaon",
        "description": "Led the frontend migration of a monolithic application to a micro-frontend architecture using Webpack Module Federation. Developed complex state management solutions using Redux Toolkit, managing real-time data streams for a logistics tracking application. Reduced application bundle size by 35% through aggressive tree-shaking and dependency optimization."
      },
      {
        "title": "Software Engineer",
        "company": "DataMatics Solutions",
        "startDate": "2019-06-01",
        "endDate": "2021-10-31",
        "location": "Noida",
        "description": "Built interactive dashboards for HR management software, facilitating payroll processing and employee onboarding. Implemented comprehensive unit and integration testing strategies using Jest and React Testing Library, achieving 85% code coverage. Collaborated with backend engineers to define REST API contracts, ensuring seamless data integration."
      }
    ],
    "projects":[
      {
        "name": "Logistics Tracker",
        "description": "Engineered a real-time fleet tracking interface displaying live GPS coordinates of over 2,000 delivery vehicles. Integrated Google Maps API with custom clustering algorithms to prevent browser lag during high-density data rendering. Improved dispatcher response times by 40% due to the immediate visibility of fleet statuses.",
        "technologies": ["React", "Redux", "Google Maps API", "WebSockets"],
        "impact":["Tracked 2,000+ live vehicles", "Improved dispatcher response by 40%", "Zero browser crashing incidents"]
      },
      {
        "name": "HR Portal Modernization",
        "description": "Revamped an outdated employee self-service portal, introducing a modern, accessible, and mobile-friendly user interface. Conducted extensive accessibility audits and implemented ARIA standards, ensuring compliance with WCAG 2.1 AA guidelines. The redesign led to a 50% decrease in support tickets related to portal navigation issues.",
        "technologies": ["React", "TypeScript", "Styled Components", "Axe Core"],
        "impact":["Decreased support tickets by 50%", "Achieved WCAG 2.1 AA compliance", "Increased employee usage by 60%"]
      }
    ],
    "languages":["English", "Hindi"],
    "softSkills": ["Analytical Thinking", "Cross-functional Collaboration", "Leadership"],
    "totalExperienceYears": 5
  },
  {
    "name": "Vikram Reddy",
    "email": "vikram.reddy.lead@example.com",
    "phone": "+91-9123456780",
    "location": "Chennai",
    "summary": "Lead Frontend Engineer with 7 years of deep expertise in modern web technologies and architectural design. Passionate about building high-performance teams, driving technical strategy, and delivering world-class digital experiences.",
    "skills":["React.js", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "AWS"],
    "social":["https://linkedin.com/in/vikramreddy", "https://github.com/vickyreddy"],
    "preferredJob": "Frontend Architect",
    "experience":[
      {
        "title": "Lead Frontend Engineer",
        "company": "FinTech Innovators",
        "startDate": "2022-04-01",
        "endDate": "2026-03-01",
        "location": "Chennai",
        "description": "Directed a team of 12 frontend developers in building a comprehensive banking platform processing millions of transactions daily. Architected a micro-frontend ecosystem using Next.js and AWS, enabling independent deployments for 5 distinct product squads. Enhanced application security by implementing strict Content Security Policies and robust XSS prevention mechanisms."
      },
      {
        "title": "Senior Frontend Developer",
        "company": "TechSynergy",
        "startDate": "2018-05-01",
        "endDate": "2022-03-31",
        "location": "Bangalore",
        "description": "Developed a suite of internal productivity tools that automated manual data entry processes for the operations team. Optimized rendering performance of complex data visualizations, ensuring smooth 60fps scrolling on low-end devices. Initiated and led a weekly frontend guild meeting to share knowledge, discuss new technologies, and establish coding standards."
      }
    ],
    "projects":[
      {
        "name": "OmniChannel Banking App",
        "description": "Led the development of a unified banking interface that provided a consistent experience across web, mobile, and tablet platforms. Orchestrated the transition from a legacy Java server-rendered app to a modern React SPA consumed via GraphQL APIs. Increased customer satisfaction scores by 30% and boosted mobile web conversions by 45%.",
        "technologies":["Next.js", "GraphQL", "Tailwind CSS", "AWS CloudFront"],
        "impact":["Processed 1M+ daily transactions", "Boosted mobile conversions by 45%", "Increased CSAT by 30%"]
      },
      {
        "name": "Internal Design System",
        "description": "Architected and maintained an enterprise-wide design system used by over 50 developers across various global teams. Automated the release process using semantic versioning and GitHub Actions, ensuring seamless updates without breaking changes. Reduced UI development time by 40% for new feature implementations.",
        "technologies": ["React", "TypeScript", "Storybook", "NPM"],
        "impact":["Adopted by 50+ developers", "Reduced UI dev time by 40%", "Zero breaking changes in 2 years"]
      }
    ],
    "languages": ["English", "Tamil", "Telugu"],
    "softSkills": ["Strategic Planning", "Team Leadership", "Conflict Resolution"],
    "totalExperienceYears": 7
  },
  {
    "name": "Sneha Iyer",
    "email": "sneha.iyer.dev@example.com",
    "phone": "+91-8877665544",
    "location": "Mumbai",
    "summary": "Enthusiastic React Developer with 2 years of experience creating dynamic web applications. Adept at rapid prototyping, agile development, and translating business requirements into technical solutions.",
    "skills":["React.js", "JavaScript", "HTML/CSS", "Bootstrap", "Redux", "Git"],
    "social":["https://linkedin.com/in/snehaiyer", "https://github.com/sneha-codes"],
    "preferredJob": "React Developer",
    "experience":[
      {
        "title": "React Developer",
        "company": "MediaTech Solutions",
        "startDate": "2024-01-01",
        "endDate": "2026-03-01",
        "location": "Mumbai",
        "description": "Developed interactive user interfaces for a digital media streaming platform using React and Redux. Integrated third-party payment gateways like Stripe and Razorpay, ensuring seamless and secure subscription checkouts. Improved overall code maintainability by writing comprehensive unit tests with Jest, achieving 75% coverage."
      },
      {
        "title": "Junior Web Developer",
        "company": "CreativeWeb Agency",
        "startDate": "2023-06-01",
        "endDate": "2023-12-31",
        "location": "Pune",
        "description": "Assisted in the development of responsive landing pages for various marketing campaigns, boosting conversion rates by 10%. Collaborated with graphic designers to implement CSS animations that enhanced the visual appeal of client websites. Managed content updates and bug fixes for 5 active client projects simultaneously."
      }
    ],
    "projects":[
      {
        "name": "StreamBox Web App",
        "description": "Built the frontend for a video streaming service allowing users to browse, search, and play content seamlessly. Implemented an infinite scrolling feature to efficiently load large catalogs of movie thumbnails without crashing the browser. The application successfully supported 5,000 active beta testers with positive feedback on performance.",
        "technologies": ["React", "Redux", "Intersection Observer", "Axios"],
        "impact":["Supported 5,000 beta users", "Increased session duration by 15%", "Smooth infinite scroll performance"]
      },
      {
        "name": "Campaign Dashboard",
        "description": "Created an internal dashboard for the marketing team to track the performance of various ad campaigns in real-time. Integrated RESTful APIs to fetch and display metrics using interactive charts and graphs. Saved the marketing team approximately 10 hours a week in manual reporting tasks.",
        "technologies": ["React", "Bootstrap", "Recharts", "Node.js"],
        "impact":["Saved 10 hours/week in reporting", "Used by 15 marketing managers", "100% data accuracy"]
      }
    ],
    "languages":["English", "Hindi", "Marathi"],
    "softSkills": ["Fast Learner", "Communication", "Team Player"],
    "totalExperienceYears": 2
  },
  {
    "name": "Rohit Verma",
    "email": "rohit.verma.arch@example.com",
    "phone": "+91-9988112233",
    "location": "Noida",
    "summary": "Seasoned Frontend Architect with 8 years of experience spearheading large-scale web platform development. Expert in performance optimization, architecture design, and driving technical innovation across enterprise organizations.",
    "skills":["Angular", "React.js", "TypeScript", "RxJS", "Micro-frontends", "CI/CD"],
    "social":["https://linkedin.com/in/rohitverma", "https://github.com/rohitv"],
    "preferredJob": "Frontend Architect",
    "experience":[
      {
        "title": "Frontend Architect",
        "company": "Enterprise Solutions Corp",
        "startDate": "2021-08-01",
        "endDate": "2026-03-01",
        "location": "Noida",
        "description": "Defined the frontend technical vision and architecture for a global ERP software suite used by Fortune 500 companies. Successfully migrated a legacy AngularJS application to modern Angular, improving application load time by 60% and developer productivity by 40%. Established continuous integration pipelines that enforced strict code quality, security scanning, and automated testing."
      },
      {
        "title": "Lead UI Developer",
        "company": "DataDriven Apps",
        "startDate": "2017-04-01",
        "endDate": "2021-07-31",
        "location": "Delhi",
        "description": "Led a team of 8 engineers to build a complex data visualization platform capable of handling millions of data points in real-time. Implemented advanced state management strategies using RxJS and NgRx, ensuring predictable data flows across the application. Collaborated closely with product managers to define roadmaps and deliver features that increased MRR by 25%."
      }
    ],
    "projects":[
      {
        "name": "Global ERP Migration",
        "description": "Spearheaded the multi-year migration of an enterprise resource planning tool from a monolithic architecture to a modular Angular framework. Developed custom schematics and CLI tools to automate repetitive scaffolding tasks for the engineering team. The new architecture reduced deployment times from 4 hours to 15 minutes and eliminated critical downtime.",
        "technologies":["Angular", "RxJS", "TypeScript", "Jenkins"],
        "impact":["Reduced deployment time by 93%", "Improved app load time by 60%", "Zero downtime during migration"]
      },
      {
        "name": "Real-time Analytics Engine",
        "description": "Architected a high-performance analytics dashboard that processed and visualized streaming data from IoT devices. Utilized Web Workers to offload heavy data parsing tasks from the main thread, keeping the UI highly responsive. The system reliably handled 10,000 messages per second, enabling real-time decision-making for clients.",
        "technologies":["Angular", "Web Workers", "D3.js", "WebSockets"],
        "impact":["Processed 10k msgs/sec", "Maintained 60fps UI performance", "Increased client MRR by 25%"]
      }
    ],
    "languages": ["English", "Hindi", "Punjabi"],
    "softSkills":["Visionary Leadership", "Technical Strategy", "Mentoring"],
    "totalExperienceYears": 8
  },
  {
    "name": "Anjali Desai",
    "email": "anjali.desai.next@example.com",
    "phone": "+91-7766554433",
    "location": "Ahmedabad",
    "summary": "Proficient Frontend Engineer with 4 years of experience specializing in React and Next.js. Passionate about creating SEO-friendly, highly performant web applications that drive business growth and user engagement.",
    "skills":["Next.js", "React.js", "Tailwind CSS", "GraphQL", "Vercel", "Framer Motion"],
    "social":["https://linkedin.com/in/anjalidesai", "https://github.com/anjalid"],
    "preferredJob": "Frontend Engineer",
    "experience":[
      {
        "title": "Frontend Engineer",
        "company": "E-Comm Builders",
        "startDate": "2022-05-01",
        "endDate": "2026-03-01",
        "location": "Ahmedabad",
        "description": "Developed and maintained multiple high-conversion e-commerce storefronts using Next.js and Headless CMS integrations. Optimized technical SEO elements and implemented Server-Side Rendering (SSR), resulting in a 50% increase in organic search traffic. Integrated complex animations using Framer Motion to enhance user experience without compromising performance metrics."
      },
      {
        "title": "UI Developer",
        "company": "WebCraft Agency",
        "startDate": "2020-08-01",
        "endDate": "2022-04-30",
        "location": "Pune",
        "description": "Built responsive, interactive corporate websites for diverse clients using React and Tailwind CSS. Collaborated with backend teams to consume REST APIs and implement dynamic content rendering. Improved website accessibility scores to 99% on Lighthouse by adhering strictly to semantic HTML and ARIA standards."
      }
    ],
    "projects":[
      {
        "name": "Headless E-Commerce Store",
        "description": "Engineered a headless e-commerce solution integrating Shopify backend with a custom Next.js frontend for lightning-fast browsing. Implemented Incremental Static Regeneration (ISR) to ensure product data remained up-to-date while serving static pages. The platform achieved a 98/100 Google PageSpeed score and increased sales conversions by 20%.",
        "technologies":["Next.js", "Shopify Storefront API", "Tailwind CSS", "Vercel"],
        "impact":["Increased organic traffic by 50%", "Boosted conversions by 20%", "Achieved 98/100 PageSpeed score"]
      },
      {
        "name": "Interactive Portfolio Builder",
        "description": "Developed a SaaS platform allowing creative professionals to build and customize their portfolios via a drag-and-drop interface. Managed complex application state and user interactions using React Context and custom hooks. The platform successfully onboarded 2,000 paid subscribers within the first year.",
        "technologies":["React", "Framer Motion", "Firebase", "Styled Components"],
        "impact":["Onboarded 2,000 paid users", "Maintained 99% accessibility score", "High user satisfaction rating"]
      }
    ],
    "languages": ["English", "Gujarati", "Hindi"],
    "softSkills": ["SEO Optimization", "Design Thinking", "Problem Solving"],
    "totalExperienceYears": 4
  },
  {
    "name": "Karan Malhotra",
    "email": "karan.m.dev@example.com",
    "phone": "+91-8899001122",
    "location": "Delhi",
    "summary": "Versatile Frontend Developer with 5 years of experience in building modern web applications. Skilled in bridging the gap between design and engineering to deliver intuitive and visually appealing digital products.",
    "skills":["React.js", "Vue.js", "TypeScript", "SASS", "Redux", "Jest"],
    "social":["https://linkedin.com/in/karanmalhotra", "https://github.com/karanm"],
    "preferredJob": "Frontend Developer",
    "experience":[
      {
        "title": "Frontend Developer",
        "company": "TravelTech Solutions",
        "startDate": "2021-02-01",
        "endDate": "2026-03-01",
        "location": "Delhi",
        "description": "Developed dynamic user interfaces for a comprehensive travel booking system using React and Redux. Implemented complex search and filtering algorithms on the client side, reducing backend API calls by 30%. Collaborated with QA to establish automated end-to-end testing, which decreased production bug rates by 25%."
      },
      {
        "title": "Software Engineer",
        "company": "InfoSysPro",
        "startDate": "2019-07-01",
        "endDate": "2021-01-31",
        "location": "Gurgaon",
        "description": "Contributed to the development of a large-scale CRM application utilizing Vue.js and Vuex. Optimized application performance by implementing lazy loading for images and asynchronous components. Participated in daily stand-ups and agile ceremonies, consistently delivering sprint commitments on time."
      }
    ],
    "projects":[
      {
        "name": "Flight Booking Portal",
        "description": "Built a seamless flight search and booking interface that aggregated data from multiple airline APIs. Designed a responsive calendar component for date selection that handled complex edge cases like international time zones. The portal processed over 10,000 bookings monthly with an error rate of less than 0.5%.",
        "technologies":["React", "Redux", "SASS", "Jest"],
        "impact":["Processed 10,000+ monthly bookings", "Reduced API calls by 30%", "Decreased bug rate by 25%"]
      },
      {
        "name": "CRM Dashboard Redesign",
        "description": "Led the UI redesign of a legacy CRM dashboard, shifting from plain HTML/CSS to a reactive Vue.js architecture. Implemented customizable widgets allowing users to tailor their dashboard views according to their workflow needs. The redesign increased daily active usage by 40% among the sales team.",
        "technologies":["Vue.js", "Vuex", "Bootstrap", "Chart.js"],
        "impact":["Increased daily usage by 40%", "Improved load time by 3 seconds", "Enhanced user customization"]
      }
    ],
    "languages": ["English", "Hindi"],
    "softSkills":["Agile Development", "Cross-functional Teamwork", "Time Management"],
    "totalExperienceYears": 5
  },
  {
    "name": "Pooja Joshi",
    "email": "pooja.joshi.ui@example.com",
    "phone": "+91-9900112233",
    "location": "Pune",
    "summary": "Creative UI Engineer with 3 years of experience specializing in crafting visually stunning and highly accessible user interfaces. Passionate about design systems, CSS architecture, and delivering pixel-perfect implementations.",
    "skills":["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Storybook"],
    "social":["https://linkedin.com/in/poojajoshi", "https://github.com/poojaj"],
    "preferredJob": "UI Engineer",
    "experience":[
      {
        "title": "UI Engineer",
        "company": "PixelPerfect Designs",
        "startDate": "2023-04-01",
        "endDate": "2026-03-01",
        "location": "Pune",
        "description": "Collaborated closely with UX/UI designers to translate complex Figma prototypes into functional React components. Developed and maintained a centralized design system using Storybook, serving 4 different product teams. Ensured strict adherence to web accessibility standards, achieving 100% compliance with WCAG guidelines across all new features."
      },
      {
        "title": "Frontend Intern",
        "company": "TechNova",
        "startDate": "2022-06-01",
        "endDate": "2023-03-31",
        "location": "Mumbai",
        "description": "Assisted in revamping the company's public-facing website using modern CSS grid layouts and Flexbox. Optimized web assets and images, contributing to a 2-second reduction in average page load time. Wrote comprehensive technical documentation for the frontend codebase to assist future onboarding."
      }
    ],
    "projects":[
      {
        "name": "Enterprise Design System",
        "description": "Played a key role in building an internal design system from scratch to standardize UI components across the company. Implemented robust CSS-in-JS solutions to ensure style encapsulation and prevent specificity conflicts. The system accelerated new feature development time by an estimated 30%.",
        "technologies":["React", "Storybook", "Styled Components", "Jest"],
        "impact":["Accelerated dev time by 30%", "Adopted by 4 product teams", "100% WCAG compliance achieved"]
      },
      {
        "name": "Marketing Website Revamp",
        "description": "Redesigned a high-traffic marketing website to improve user engagement and lead generation. Implemented advanced CSS animations and scroll-triggered effects to create an immersive browsing experience. The revamp led to a 25% increase in user time-on-site and a 15% boost in newsletter signups.",
        "technologies": ["HTML5", "CSS3", "JavaScript", "GSAP"],
        "impact":["Increased time-on-site by 25%", "Boosted signups by 15%", "Reduced page load time by 2s"]
      }
    ],
    "languages": ["English", "Marathi", "Hindi"],
    "softSkills":["Attention to Detail", "Design Sense", "Collaboration"],
    "totalExperienceYears": 3
  },
  {
    "name": "Manish Kumar",
    "email": "manish.k.react@example.com",
    "phone": "+91-7788990011",
    "location": "Bangalore",
    "summary": "Dedicated React Developer with 6 years of experience engineering robust, scalable web applications for the fintech sector. Strong expertise in state management, API integration, and performance optimization.",
    "skills":["React.js", "TypeScript", "Redux Saga", "Node.js", "Material UI", "Docker"],
    "social":["https://linkedin.com/in/manishkumar", "https://github.com/manishk"],
    "preferredJob": "Senior React Developer",
    "experience":[
      {
        "title": "Senior React Developer",
        "company": "PayStream Technologies",
        "startDate": "2021-03-01",
        "endDate": "2026-03-01",
        "location": "Bangalore",
        "description": "Led the frontend development of a high-security payment gateway portal processing over $1M in daily transactions. Implemented complex asynchronous state management using Redux Saga to handle intricate payment flows and error recoveries securely. Mentored junior developers and instituted rigorous pull request reviews, reducing production bugs by 40%."
      },
      {
        "title": "Frontend Web Developer",
        "company": "FinApp Solutions",
        "startDate": "2018-09-01",
        "endDate": "2021-02-28",
        "location": "Hyderabad",
        "description": "Developed personal finance management dashboards using React.js and Chart.js for data visualization. Integrated robust OAuth 2.0 authentication flows ensuring secure user access to sensitive financial data. Improved application performance by 30% through strategic code splitting and memoization techniques."
      }
    ],
    "projects":[
      {
        "name": "Secure Payment Gateway UI",
        "description": "Engineered a responsive, accessible checkout interface integrating multiple payment methods including credit cards, UPI, and net banking. Utilized strict TypeScript interfaces to ensure data integrity between the frontend and backend microservices. The interface maintained a 99.99% uptime and handled peak loads during major sale events without degradation.",
        "technologies":["React", "TypeScript", "Redux Saga", "Material UI"],
        "impact":["Processed $1M+ daily transactions", "Reduced production bugs by 40%", "Maintained 99.99% uptime"]
      },
      {
        "name": "Finance Analytics Dashboard",
        "description": "Built a comprehensive dashboard allowing users to visualize their spending habits across various categories in real-time. Implemented custom hooks to manage WebSocket connections for live transaction updates. The feature became the most used tool in the application, increasing user retention by 20%.",
        "technologies": ["React", "Chart.js", "WebSockets", "Node.js"],
        "impact":["Increased user retention by 20%", "Improved app performance by 30%", "High user engagement"]
      }
    ],
    "languages": ["English", "Hindi"],
    "softSkills": ["Security Awareness", "Mentoring", "Analytical Thinking"],
    "totalExperienceYears": 6
  },
  {
    "name": "Riya Sen",
    "email": "riya.sen.vue@example.com",
    "phone": "+91-6677889900",
    "location": "Kolkata",
    "summary": "Passionate Frontend Developer with 4 years of experience delivering high-quality web applications using Vue.js and modern JavaScript. Focused on building intuitive user interfaces and optimizing web performance.",
    "skills":["Vue.js", "Vuex", "JavaScript (ES6+)", "Tailwind CSS", "Nuxt.js", "Cypress"],
    "social":["https://linkedin.com/in/riyasen", "https://github.com/riyas"],
    "preferredJob": "Frontend Developer",
    "experience":[
      {
        "title": "Frontend Developer",
        "company": "EduTech Innovations",
        "startDate": "2022-07-01",
        "endDate": "2026-03-01",
        "location": "Kolkata",
        "description": "Developed interactive learning modules for a prominent online education platform using Vue.js and Nuxt.js. Implemented server-side rendering to significantly improve SEO rankings, resulting in a 35% increase in organic student enrollments. Collaborated with backend engineers to design and consume RESTful APIs for seamless data flow."
      },
      {
        "title": "Junior Developer",
        "company": "WebMakers Inc.",
        "startDate": "2020-05-01",
        "endDate": "2022-06-30",
        "location": "Pune",
        "description": "Assisted in the development of custom content management systems for local businesses using Vue.js and Bootstrap. Conducted cross-browser testing and resolved compatibility issues ensuring a consistent experience for all users. Wrote automated UI tests using Cypress, improving release confidence and reducing manual testing time."
      }
    ],
    "projects":[
      {
        "name": "Interactive Learning Portal",
        "description": "Built a dynamic portal featuring video lectures, real-time quizzes, and progress tracking for over 50,000 active students. Managed complex global state using Vuex to ensure instantaneous updates across different components when a user completes a course module. The platform saw a 40% increase in course completion rates after the UI overhaul.",
        "technologies":["Vue.js", "Nuxt.js", "Vuex", "Tailwind CSS"],
        "impact":["Supported 50,000+ active students", "Increased enrollments by 35%", "Boosted completion rates by 40%"]
      },
      {
        "name": "Custom CMS Dashboard",
        "description": "Developed a lightweight content management system enabling non-technical users to easily update website content. Implemented a WYSIWYG editor and drag-and-drop media upload functionality. Reduced the time clients spent on content updates by approximately 50%.",
        "technologies":["Vue.js", "Bootstrap", "Axios", "Cypress"],
        "impact":["Reduced content update time by 50%", "Improved client satisfaction", "Decreased manual testing time"]
      }
    ],
    "languages":["English", "Bengali", "Hindi"],
    "softSkills": ["Communication", "Empathy", "Team Collaboration"],
    "totalExperienceYears": 4
  },
  {
    "name": "Arjun Nair",
    "email": "arjun.nair.angular@example.com",
    "phone": "+91-5566778899",
    "location": "Trivandrum",
    "summary": "Results-oriented Frontend Engineer with 5 years of experience specializing in Angular framework. Proven ability to architect complex enterprise solutions, optimize performance, and deliver robust software on time.",
    "skills":["Angular", "TypeScript", "RxJS", "SCSS", "NgRx", "Jasmine"],
    "social":["https://linkedin.com/in/arjunnair", "https://github.com/arjun-n"],
    "preferredJob": "Frontend Engineer",
    "experience":[
      {
        "title": "Frontend Engineer",
        "company": "HealthCore Systems",
        "startDate": "2021-05-01",
        "endDate": "2026-03-01",
        "location": "Trivandrum",
        "description": "Architected and developed a comprehensive hospital management system utilizing Angular and NgRx for state management. Optimized application performance by employing lazy loading and OnPush change detection, reducing initial load time by 3 seconds. Ensured high code quality by writing extensive unit tests with Jasmine and Karma, maintaining 90% test coverage."
      },
      {
        "title": "Software Engineer",
        "company": "TechSolutions",
        "startDate": "2019-08-01",
        "endDate": "2021-04-30",
        "location": "Kochi",
        "description": "Developed responsive web applications for logistics clients to track shipments and manage inventory. Integrated third-party APIs for real-time tracking and mapping functionalities. Participated in code reviews and contributed to the establishment of internal coding standards."
      }
    ],
    "projects":[
      {
        "name": "Hospital Management System",
        "description": "Engineered a secure portal for medical staff to manage patient records, appointments, and billing information. Implemented complex role-based access control (RBAC) on the frontend to ensure data privacy and security compliance. The system is currently deployed across 12 hospitals, managing over 100,000 patient records.",
        "technologies":["Angular", "NgRx", "RxJS", "SCSS"],
        "impact":["Deployed across 12 hospitals", "Managed 100k+ patient records", "Reduced load time by 3s"]
      },
      {
        "name": "Logistics Tracking Dashboard",
        "description": "Built a real-time dashboard displaying the status and location of thousands of active shipments. Utilized RxJS extensively to handle asynchronous data streams and WebSocket connections efficiently. Improved tracking accuracy and reduced customer support inquiries regarding shipment status by 30%.",
        "technologies":["Angular", "TypeScript", "Google Maps API", "WebSockets"],
        "impact":["Reduced support inquiries by 30%", "Maintained 90% test coverage", "Improved tracking accuracy"]
      }
    ],
    "languages": ["English", "Malayalam", "Hindi"],
    "softSkills":["Critical Thinking", "Problem Solving", "Attention to Detail"],
    "totalExperienceYears": 5
  },
  {
    "name": "Kritika Rao",
    "email": "kritika.rao.lead@example.com",
    "phone": "+91-4455667788",
    "location": "Hyderabad",
    "summary": "Highly accomplished Frontend Lead with 7 years of experience driving the technical direction of large-scale web applications. Expert in React ecosystem, team leadership, and establishing best practices for scalable frontend architecture.",
    "skills":["React.js", "Next.js", "TypeScript", "GraphQL", "Styled Components", "Webpack"],
    "social":["https://linkedin.com/in/kritikarao", "https://github.com/kritikar"],
    "preferredJob": "Frontend Lead",
    "experience":[
      {
        "title": "Frontend Lead",
        "company": "SaaSify Technologies",
        "startDate": "2022-01-01",
        "endDate": "2026-03-01",
        "location": "Hyderabad",
        "description": "Led a cross-functional team of 10 engineers to rebuild the core SaaS product utilizing Next.js and GraphQL. Established a comprehensive CI/CD pipeline using GitHub Actions, reducing deployment time by 50% and increasing release frequency to twice daily. Mentored team members, conducted performance reviews, and successfully grew the frontend team from 4 to 10 developers."
      },
      {
        "title": "Senior Frontend Developer",
        "company": "Innovate IT",
        "startDate": "2018-06-01",
        "endDate": "2021-12-31",
        "location": "Bangalore",
        "description": "Developed robust enterprise applications focusing on data visualization and reporting tools. Architected a reusable component library that was adopted across 3 different company products, ensuring design consistency. Optimized frontend performance, achieving a Lighthouse score of 95+ across all core metrics."
      }
    ],
    "projects":[
      {
        "name": "Core SaaS Platform Rebuild",
        "description": "Spearheaded the complete rewrite of a legacy single-page application into a highly performant Next.js application. Implemented advanced caching strategies with Apollo GraphQL to minimize redundant network requests. The rebuild resulted in a 40% increase in user engagement and a significant reduction in customer churn.",
        "technologies":["Next.js", "GraphQL", "TypeScript", "Apollo Client"],
        "impact":["Increased user engagement by 40%", "Reduced deployment time by 50%", "Grew team from 4 to 10 devs"]
      },
      {
        "name": "Enterprise Data Visualizer",
        "description": "Created a flexible reporting tool allowing enterprise users to generate custom charts and graphs from large datasets. Utilized D3.js and React to render complex visualizations smoothly without lagging the main thread. The tool was critical in securing a $2M contract with a major corporate client.",
        "technologies": ["React", "D3.js", "Styled Components", "Webpack"],
        "impact":["Helped secure a $2M contract", "Achieved 95+ Lighthouse score", "Adopted by 3 products"]
      }
    ],
    "languages": ["English", "Telugu", "Hindi"],
    "softSkills": ["Leadership", "Strategic Vision", "Mentorship"],
    "totalExperienceYears": 7
  },
  {
    "name": "Saurabh Das",
    "email": "saurabh.das.dev@example.com",
    "phone": "+91-3344556677",
    "location": "Gurgaon",
    "summary": "Dynamic Frontend Developer with 3 years of experience spanning React.js and React Native. Skilled in delivering seamless, cross-platform user experiences for both web and mobile environments.",
    "skills":["React.js", "React Native", "Redux", "JavaScript", "Tailwind CSS", "Firebase"],
    "social":["https://linkedin.com/in/saurabhdas", "https://github.com/saurabhd"],
    "preferredJob": "React Developer",
    "experience":[
      {
        "title": "React Developer",
        "company": "MobileWeb Innovators",
        "startDate": "2023-02-01",
        "endDate": "2026-03-01",
        "location": "Gurgaon",
        "description": "Developed and maintained cross-platform features for a prominent social networking application using React Native and React.js. Implemented real-time chat functionality using Firebase and WebSockets, supporting over 10,000 daily active users seamlessly. Reduced app crash rates by 20% by integrating rigorous error tracking and resolving critical memory leaks."
      },
      {
        "title": "Frontend Intern",
        "company": "Startup Hub",
        "startDate": "2022-05-01",
        "endDate": "2023-01-31",
        "location": "Delhi",
        "description": "Assisted in building responsive web interfaces for early-stage startup products using React and Tailwind CSS. Integrated REST APIs to fetch and display dynamic content, ensuring fast load times. Participated actively in UI/UX design discussions to improve overall user flows."
      }
    ],
    "projects":[
      {
        "name": "Social Connect App",
        "description": "Built a comprehensive social networking mobile and web application allowing users to share posts, photos, and send direct messages. Optimized media upload processes by implementing client-side image compression before uploading to cloud storage. The application gained 50,000 downloads within the first three months of launch.",
        "technologies": ["React Native", "React.js", "Firebase", "Redux"],
        "impact":["Supported 10,000+ daily active users", "50,000 downloads in 3 months", "Reduced crash rate by 20%"]
      },
      {
        "name": "Startup Landing Pages",
        "description": "Developed highly optimized, SEO-friendly landing pages for multiple startup clients to drive early user acquisition. Utilized Tailwind CSS to rapidly prototype and iterate on designs based on A/B testing feedback. Increased average conversion rates for client waitlists by 15%.",
        "technologies": ["React", "Tailwind CSS", "Framer Motion", "Vite"],
        "impact": ["Increased waitlist conversions by 15%", "Fast rapid prototyping", "High client satisfaction"]
      }
    ],
    "languages": ["English", "Hindi", "Bengali"],
    "softSkills":["Adaptability", "Fast Learner", "Problem Solving"],
    "totalExperienceYears": 3
  },
  {
    "name": "Meera Menon",
    "email": "meera.m.ui@example.com",
    "phone": "+91-2233445566",
    "location": "Kochi",
    "summary": "Detail-focused Frontend Developer with 4 years of experience building accessible and performant web applications. Strong advocate for clean code, component reusability, and exceptional user experiences.",
    "skills":["React.js", "JavaScript", "HTML5/CSS3", "SASS", "Redux", "Jest"],
    "social":["https://linkedin.com/in/meeramenon", "https://github.com/meeram"],
    "preferredJob": "Frontend Developer",
    "experience":[
      {
        "title": "Frontend Developer",
        "company": "Creative Code Labs",
        "startDate": "2022-06-01",
        "endDate": "2026-03-01",
        "location": "Kochi",
        "description": "Developed interactive e-learning interfaces utilized by over 20,000 students globally using React and Redux. Championed web accessibility initiatives, retrofitting legacy components to meet WCAG 2.1 AA standards. Collaborated with backend teams to optimize API response payloads, improving frontend rendering speeds by 25%."
      },
      {
        "title": "Web Developer",
        "company": "Digital Reach",
        "startDate": "2020-09-01",
        "endDate": "2022-05-31",
        "location": "Trivandrum",
        "description": "Built responsive, visually appealing websites for local businesses using HTML, SASS, and vanilla JavaScript. Implemented SEO best practices that increased organic traffic for clients by an average of 30%. Managed website hosting, domain configurations, and routine maintenance tasks."
      }
    ],
    "projects":[
      {
        "name": "E-Learning Platform UI",
        "description": "Designed and implemented a user-friendly course navigation system that allowed students to easily track their progress. Integrated interactive coding environments directly into the browser using Monaco Editor. The platform saw a 20% increase in student retention due to the improved user interface.",
        "technologies":["React", "Redux", "SASS", "Monaco Editor"],
        "impact":["Served 20,000+ students globally", "Improved render speeds by 25%", "Increased student retention by 20%"]
      },
      {
        "name": "Accessible Component Library",
        "description": "Initiated an internal project to build a suite of accessible UI components that could be reused across all company projects. Ensured all components were fully navigable via keyboard and compatible with popular screen readers. This library reduced new project setup time by 40%.",
        "technologies":["React", "CSS Modules", "Jest", "Axe-core"],
        "impact":["Achieved WCAG 2.1 AA standards", "Reduced setup time by 40%", "Increased organic traffic by 30%"]
      }
    ],
    "languages": ["English", "Malayalam"],
    "softSkills":["Empathy", "Attention to Detail", "Collaboration"],
    "totalExperienceYears": 4
  },
  {
    "name": "Deepak Chawla",
    "email": "deepak.c.ui@example.com",
    "phone": "+91-1122334455",
    "location": "Chandigarh",
    "summary": "Innovative UI Developer with 5 years of experience translating complex design concepts into highly interactive, responsive web interfaces. Expert in modern CSS techniques, animations, and frontend frameworks.",
    "skills":["Vue.js", "React.js", "CSS3/SCSS", "Tailwind CSS", "GSAP", "Webpack"],
    "social":["https://linkedin.com/in/deepakchawla", "https://github.com/deepakc"],
    "preferredJob": "UI Developer",
    "experience":[
      {
        "title": "UI Developer",
        "company": "BrandTech Agency",
        "startDate": "2021-04-01",
        "endDate": "2026-03-01",
        "location": "Chandigarh",
        "description": "Spearheaded the frontend development for high-profile marketing campaigns, utilizing Vue.js and advanced CSS animations to create immersive experiences. Optimized multimedia assets and implemented lazy loading, reducing average page load times by 40% while maintaining high visual fidelity. Mentored two junior UI developers, improving the team's overall code quality and delivery speed."
      },
      {
        "title": "Frontend Developer",
        "company": "WebWorks Solutions",
        "startDate": "2019-01-01",
        "endDate": "2021-03-31",
        "location": "Delhi",
        "description": "Developed responsive, mobile-first web applications for retail clients using React.js and styled-components. Collaborated closely with UI/UX designers to ensure pixel-perfect implementation of Figma designs. Integrated payment gateways and third-party APIs to support e-commerce functionalities."
      }
    ],
    "projects":[
      {
        "name": "Immersive Brand Campaign",
        "description": "Built a highly interactive promotional website for a major automotive brand launch using Vue.js and GSAP for complex scroll-based animations. Ensured smooth 60fps performance across both desktop and mobile devices despite heavy graphical assets. The campaign site attracted over 1 million unique visitors in its first month.",
        "technologies": ["Vue.js", "GSAP", "SCSS", "Webpack"],
        "impact":["Attracted 1M+ unique visitors", "Reduced load times by 40%", "Maintained 60fps performance"]
      },
      {
        "name": "Retail E-Commerce UI",
        "description": "Redesigned the frontend of a boutique clothing retailer, focusing on mobile responsiveness and rapid checkout flows. Implemented a custom product filtering system that allowed users to sort items instantaneously without page reloads. The redesign contributed to a 35% increase in mobile sales.",
        "technologies":["React", "Styled Components", "Redux", "Stripe API"],
        "impact":["Increased mobile sales by 35%", "Improved team delivery speed", "Enhanced visual fidelity"]
      }
    ],
    "languages":["English", "Hindi", "Punjabi"],
    "softSkills": ["Creativity", "Mentoring", "Problem Solving"],
    "totalExperienceYears": 5
  },
  {
    "name": "Tanvi Bhat",
    "email": "tanvi.bhat.react@example.com",
    "phone": "+91-9988771122",
    "location": "Mumbai",
    "summary": "Proficient React Developer with 6 years of experience building scalable, data-intensive web applications. Strong background in state management, micro-frontends, and delivering seamless user experiences in agile environments.",
    "skills":["React.js", "TypeScript", "Next.js", "Redux", "GraphQL", "Material UI"],
    "social":["https://linkedin.com/in/tanvibhat", "https://github.com/tanvib"],
    "preferredJob": "React Developer",
    "experience":[
      {
        "title": "Senior React Developer",
        "company": "FinTech Forward",
        "startDate": "2021-07-01",
        "endDate": "2026-03-01",
        "location": "Mumbai",
        "description": "Architected the frontend for a robust stock trading platform capable of handling real-time data feeds for thousands of concurrent users. Implemented a micro-frontend architecture utilizing Webpack Module Federation, allowing distinct teams to deploy features independently. Optimized application performance, reducing memory leaks and improving time-to-interactive by 30%."
      },
      {
        "title": "Software Engineer",
        "company": "DataSys Inc.",
        "startDate": "2018-08-01",
        "endDate": "2021-06-30",
        "location": "Pune",
        "description": "Developed internal analytics dashboards using React and D3.js to visualize complex datasets for the operations team. Integrated RESTful APIs and managed complex application state using Redux. Participated in rigorous code reviews, ensuring adherence to strict coding standards and best practices."
      }
    ],
    "projects":[
      {
        "name": "Real-time Trading Platform",
        "description": "Engineered a high-frequency trading interface that displayed live market data and executed trades with sub-second latency. Utilized WebSockets and Web Workers to process incoming data streams without blocking the main UI thread. The platform successfully processed over $5M in daily trading volume.",
        "technologies":["React", "TypeScript", "WebSockets", "Web Workers"],
        "impact":["Processed $5M+ daily volume", "Improved time-to-interactive by 30%", "Zero UI blocking incidents"]
      },
      {
        "name": "Micro-frontend Dashboard",
        "description": "Spearheaded the migration of a monolithic administrative dashboard into 4 independent micro-frontends. Established shared component libraries and utility functions to maintain consistency across different modules. This architectural shift reduced deployment bottlenecks and increased release frequency by 50%.",
        "technologies":["Next.js", "Webpack Module Federation", "Material UI", "GraphQL"],
        "impact":["Increased release frequency by 50%", "Eliminated deployment bottlenecks", "Improved team autonomy"]
      }
    ],
    "languages":["English", "Hindi", "Marathi"],
    "softSkills": ["Analytical Thinking", "Architecture Design", "Collaboration"],
    "totalExperienceYears": 6
  },
  {
    "name": "Siddharth Kapoor",
    "email": "siddharth.k.front@example.com",
    "phone": "+91-8877661122",
    "location": "Noida",
    "summary": "Results-driven Frontend Engineer with 4 years of experience specializing in building responsive, high-performance web applications. Adept at using React and modern JavaScript to solve complex business problems.",
    "skills":["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Node.js", "Jest"],
    "social":["https://linkedin.com/in/siddharthkapoor", "https://github.com/sidkapoor"],
    "preferredJob": "Frontend Engineer",
    "experience":[
      {
        "title": "Frontend Engineer",
        "company": "E-Shop Solutions",
        "startDate": "2022-03-01",
        "endDate": "2026-03-01",
        "location": "Noida",
        "description": "Developed key features for a rapidly growing e-commerce platform using React.js and Tailwind CSS. Implemented a robust shopping cart and checkout flow, integrating multiple payment gateways and reducing cart abandonment by 15%. Collaborated with the backend team to design efficient REST APIs, improving overall data fetch times by 20%."
      },
      {
        "title": "Junior Web Developer",
        "company": "TechSprint",
        "startDate": "2020-07-01",
        "endDate": "2022-02-28",
        "location": "Delhi",
        "description": "Assisted in building custom CRM solutions for small businesses using HTML, CSS, and plain JavaScript. Resolved numerous cross-browser compatibility issues, ensuring a seamless experience across IE11, Chrome, and Safari. Wrote unit tests using Jest, which helped catch critical bugs before production releases."
      }
    ],
    "projects":[
      {
        "name": "Optimized Checkout Flow",
        "description": "Redesigned the e-commerce checkout experience to be a seamless, single-page process rather than a multi-step journey. Utilized Redux Toolkit to manage complex form states and validation logic efficiently. The new flow resulted in a 15% decrease in cart abandonment and a 10% increase in overall sales conversions.",
        "technologies":["React", "Redux Toolkit", "Tailwind CSS", "Stripe API"],
        "impact":["Decreased cart abandonment by 15%", "Increased sales conversions by 10%", "Improved fetch times by 20%"]
      },
      {
        "name": "Inventory Management Module",
        "description": "Built a comprehensive inventory tracking module within the admin panel, allowing vendors to manage stock levels easily. Implemented real-time search and filtering capabilities for datasets exceeding 10,000 items. The module saved vendors an average of 5 hours per week in inventory management tasks.",
        "technologies": ["React", "Node.js", "Express", "MongoDB"],
        "impact":["Saved vendors 5 hours/week", "Handled 10k+ item datasets", "Caught critical bugs pre-release"]
      }
    ],
    "languages":["English", "Hindi"],
    "softSkills": ["Problem Solving", "Team Player", "Time Management"],
    "totalExperienceYears": 4
  },
  {
    "name": "Nidhi Agarwal",
    "email": "nidhi.a.react@example.com",
    "phone": "+91-7766551122",
    "location": "Jaipur",
    "summary": "Enthusiastic React Developer with 3 years of experience in creating dynamic, user-centric web applications. Passionate about writing clean, maintainable code and continuously learning new frontend technologies.",
    "skills":["React.js", "TypeScript", "CSS3", "Bootstrap", "Context API", "React Router"],
    "social":["https://linkedin.com/in/nidhiagarwal", "https://github.com/nidhia"],
    "preferredJob": "React Developer",
    "experience":[
      {
        "title": "React Developer",
        "company": "TravelBug Tech",
        "startDate": "2023-01-01",
        "endDate": "2026-03-01",
        "location": "Jaipur",
        "description": "Developed a comprehensive travel itinerary planner application using React and TypeScript. Integrated various third-party APIs including Google Maps and weather services to provide real-time data to users. Improved the application's accessibility score to 95% by implementing semantic HTML and ARIA roles."
      },
      {
        "title": "Frontend Intern",
        "company": "CodeCrafters",
        "startDate": "2022-01-01",
        "endDate": "2022-12-31",
        "location": "Gurgaon",
        "description": "Assisted in the development of a blogging platform interface using React and Bootstrap. Managed application state using React Context API for themes and user authentication status. Participated in daily agile stand-ups and contributed to sprint planning sessions."
      }
    ],
    "projects":[
      {
        "name": "Interactive Itinerary Planner",
        "description": "Built a drag-and-drop interface allowing users to intuitively plan their daily travel schedules. Managed complex state interactions using Context API and custom hooks to ensure smooth performance during drag operations. The application attracted 10,000 active users within the first six months.",
        "technologies":["React", "TypeScript", "React DnD", "Google Maps API"],
        "impact":["Attracted 10,000 active users", "Achieved 95% accessibility score", "High user engagement"]
      },
      {
        "name": "Dynamic Blogging Engine",
        "description": "Developed the frontend for a lightweight blogging platform optimized for fast reading experiences. Implemented a rich text editor and lazy loading for images to significantly boost page load speeds. The platform achieved a perfect 100 on Google Lighthouse for performance.",
        "technologies":["React", "Bootstrap", "Context API", "Draft.js"],
        "impact":["Achieved 100 Lighthouse score", "Improved page load speeds", "Seamless theme switching"]
      }
    ],
    "languages": ["English", "Hindi", "Marwari"],
    "softSkills":["Fast Learner", "Adaptability", "Collaboration"],
    "totalExperienceYears": 3
  },
  {
    "name": "Varun Choudhary",
    "email": "varun.c.senior@example.com",
    "phone": "+91-6655443322",
    "location": "Bangalore",
    "summary": "Senior Frontend Engineer with 8 years of extensive experience in architecting and delivering high-scale enterprise applications. Expert in React, performance optimization, and leading engineering teams to success.",
    "skills":["React.js", "Next.js", "Node.js", "TypeScript", "GraphQL", "AWS"],
    "social":["https://linkedin.com/in/varunchoudhary", "https://github.com/varunc"],
    "preferredJob": "Senior Frontend Engineer",
    "experience":[
      {
        "title": "Senior Frontend Engineer",
        "company": "CloudTech Enterprise",
        "startDate": "2020-05-01",
        "endDate": "2026-03-01",
        "location": "Bangalore",
        "description": "Led the frontend architecture for a cloud-based resource management platform used by large-scale enterprises. Architected a highly performant data-grid capable of rendering 100,000+ rows smoothly using virtualization techniques. Mentored a team of 6 engineers, established strict coding standards, and implemented automated CI/CD pipelines that reduced deployment errors by 90%."
      },
      {
        "title": "Frontend Developer",
        "company": "WebInnovate",
        "startDate": "2016-08-01",
        "endDate": "2020-04-30",
        "location": "Hyderabad",
        "description": "Developed responsive, interactive user interfaces for a suite of B2B SaaS products using React and Redux. Optimized legacy codebases, improving overall application load times by 40%. Collaborated with product managers to define feature specifications and deliver projects consistently ahead of schedule."
      }
    ],
    "projects":[
      {
        "name": "Enterprise Resource Grid",
        "description": "Engineered a custom, high-performance data grid component to handle massive datasets for enterprise resource planning. Implemented windowing and virtualization techniques to ensure the DOM only rendered visible elements, preventing browser crashes. This component became the standard across 5 different internal products, saving hundreds of hours in development time.",
        "technologies":["React", "TypeScript", "React Window", "Styled Components"],
        "impact":["Rendered 100k+ rows smoothly", "Adopted by 5 internal products", "Reduced deployment errors by 90%"]
      },
      {
        "name": "Cloud Dashboard Portal",
        "description": "Led the development of a unified dashboard for clients to monitor their cloud infrastructure usage and billing in real-time. Integrated GraphQL to efficiently query complex, nested data structures from multiple microservices. Increased client satisfaction by providing instantaneous, accurate data visualizations.",
        "technologies":["Next.js", "GraphQL", "Apollo", "Recharts"],
        "impact":["Improved app load times by 40%", "High client satisfaction", "Efficient data querying"]
      }
    ],
    "languages":["English", "Hindi", "Telugu"],
    "softSkills": ["Leadership", "System Architecture", "Mentoring"],
    "totalExperienceYears": 8
  },
  {
    "name": "Swati Mishra",
    "email": "swati.m.ui@example.com",
    "phone": "+91-5544332211",
    "location": "Pune",
    "summary": "Creative and detail-oriented UI Developer with 5 years of experience in building visually appealing and accessible web applications. Passionate about bridging the gap between design and technology using modern CSS and JavaScript.",
    "skills":["HTML5", "CSS3/SASS", "JavaScript", "React.js", "Tailwind CSS", "Web Accessibility"],
    "social":["https://linkedin.com/in/swatimishra", "https://github.com/swatim"],
    "preferredJob": "UI Developer",
    "experience":[
      {
        "title": "UI Developer",
        "company": "DesignHub Technologies",
        "startDate": "2021-06-01",
        "endDate": "2026-03-01",
        "location": "Pune",
        "description": "Translated complex UI/UX designs into pixel-perfect, responsive React components for a leading e-commerce brand. Established a comprehensive design system using Tailwind CSS, ensuring visual consistency and accelerating new feature development by 30%. Conducted thorough accessibility audits, ensuring all products met WCAG 2.1 AA compliance standards."
      },
      {
        "title": "Frontend Developer",
        "company": "CreativeMinds Agency",
        "startDate": "2019-02-01",
        "endDate": "2021-05-31",
        "location": "Mumbai",
        "description": "Developed engaging promotional websites and landing pages with complex CSS animations and transitions. Optimized web assets and implemented lazy loading strategies, improving average page speed by 2.5 seconds. Worked closely with clients to iterate on designs and ensure technical feasibility."
      }
    ],
    "projects":[
      {
        "name": "E-Commerce Design System",
        "description": "Spearheaded the creation of a scalable design system that standardized UI components across web and mobile platforms. Documented the system meticulously using Storybook, making it easily consumable for the entire engineering team. The system reduced UI bug reports by 40% in the first quarter of implementation.",
        "technologies":["React", "Tailwind CSS", "Storybook", "Figma"],
        "impact":["Accelerated dev time by 30%", "Reduced UI bugs by 40%", "Achieved WCAG 2.1 AA compliance"]
      },
      {
        "name": "Interactive Brand Portal",
        "description": "Built an immersive, interactive portal for a major fashion brand to showcase their new seasonal collection. Utilized advanced CSS Grid layouts and sophisticated scroll animations to create a magazine-like browsing experience. The portal won an internal design award and increased user engagement metrics by 25%.",
        "technologies": ["HTML5", "SASS", "JavaScript", "GSAP"],
        "impact":["Increased user engagement by 25%", "Improved page speed by 2.5s", "Won internal design award"]
      }
    ],
    "languages": ["English", "Hindi", "Marathi"],
    "softSkills": ["Design Thinking", "Attention to Detail", "Collaboration"],
    "totalExperienceYears": 5
  },
  {
    "name": "Abhishek Pillai",
    "email": "abhishek.p.front@example.com",
    "phone": "+91-4433221100",
    "location": "Chennai",
    "summary": "Dedicated Frontend Engineer with 4 years of experience specializing in React and modern state management. Proven track record of delivering high-quality, performant software solutions for the healthcare sector.",
    "skills":["React.js", "Redux", "TypeScript", "Material UI", "Webpack", "Jest"],
    "social":["https://linkedin.com/in/abhishekpillai", "https://github.com/abhishekp"],
    "preferredJob": "Frontend Engineer",
    "experience":[
      {
        "title": "Frontend Engineer",
        "company": "HealthTech Solutions",
        "startDate": "2022-01-01",
        "endDate": "2026-03-01",
        "location": "Chennai",
        "description": "Developed custom healthcare dashboards using React and Material UI, allowing doctors to seamlessly access patient records. Implemented secure token-based authentication and enforced strict data handling protocols compliant with HIPAA standards. Reduced API response times by 35% by closely collaborating with backend engineers on payload optimization."
      },
      {
        "title": "Junior React Developer",
        "company": "CodeStream",
        "startDate": "2020-05-01",
        "endDate": "2021-12-31",
        "location": "Bangalore",
        "description": "Assisted in the migration of legacy jQuery applications to modern React.js architectures. Built reusable UI components and contributed to the internal component library documentation. Wrote robust unit tests with Jest, improving overall code coverage to 80%."
      }
    ],
    "projects":[
      {
        "name": "Patient Monitoring Dashboard",
        "description": "Built a real-time patient monitoring system using React and WebSockets to display live vitals to medical staff. Optimized frontend rendering logic to handle high-frequency data updates without causing browser memory leaks. The dashboard is actively used by over 500 nurses across 5 different hospital branches.",
        "technologies": ["React", "TypeScript", "WebSockets", "Redux"],
        "impact":["Actively used by 500+ nurses", "Zero memory leak incidents", "Reduced API times by 35%"]
      },
      {
        "name": "Internal Clinic Portal",
        "description": "Developed a comprehensive portal for clinic administrators to manage staff schedules and patient appointments efficiently. Implemented a complex calendar component with drag-and-drop functionality for easy rescheduling. The portal decreased administrative overhead by 20 hours per week per clinic.",
        "technologies": ["React", "Material UI", "Webpack", "Moment.js"],
        "impact":["Decreased admin overhead by 20 hrs/week", "Improved code coverage to 80%", "Enhanced scheduling efficiency"]
      }
    ],
    "languages": ["English", "Tamil", "Malayalam"],
    "softSkills": ["Problem Solving", "Adaptability", "Team Collaboration"],
    "totalExperienceYears": 4
  },
  {
    "name": "Divya Sharma",
    "email": "divya.sharma.vue@example.com",
    "phone": "+91-3322110099",
    "location": "Indore",
    "summary": "Passionate Vue.js Developer with 3 years of experience in building lightweight and responsive single-page applications. Dedicated to writing clean, modular code and improving user experience through intuitive design.",
    "skills":["Vue.js", "Vuex", "JavaScript", "HTML/CSS", "Bootstrap", "Git"],
    "social":["https://linkedin.com/in/divyasharma", "https://github.com/divyas"],
    "preferredJob": "Vue Developer",
    "experience":[
      {
        "title": "Vue Developer",
        "company": "TechTonic Labs",
        "startDate": "2023-03-01",
        "endDate": "2026-03-01",
        "location": "Indore",
        "description": "Designed and developed interactive frontend features for a popular real estate platform using Vue.js and Vuex. Integrated third-party mapping services to display property locations and neighborhood amenities dynamically. Improved page load performance by implementing lazy loading for high-resolution property images."
      },
      {
        "title": "Frontend Intern",
        "company": "WebSphere",
        "startDate": "2022-06-01",
        "endDate": "2023-02-28",
        "location": "Bhopal",
        "description": "Assisted in the development of corporate portfolio websites utilizing HTML5, CSS3, and JavaScript. Fixed responsive layout issues across various screen sizes, ensuring mobile-friendly user experiences. Collaborated with the marketing team to implement SEO best practices on client sites."
      }
    ],
    "projects":[
      {
        "name": "Real Estate Property Finder",
        "description": "Developed a robust search and filtering interface allowing users to find properties based on complex criteria. Managed application state efficiently using Vuex to store user preferences and recently viewed properties. The feature increased user engagement and time spent on the site by 25%.",
        "technologies":["Vue.js", "Vuex", "Bootstrap", "Google Maps API"],
        "impact":["Increased user engagement by 25%", "Improved page performance", "Enhanced property discoverability"]
      },
      {
        "name": "Corporate Intranet Portal",
        "description": "Built a secure internal portal for company employees to access HR policies, company news, and submit leave requests. Implemented role-based access controls to ensure sensitive information was only accessible to authorized personnel. Adopted by over 200 employees, streamlining internal communications significantly.",
        "technologies":["Vue.js", "CSS3", "JavaScript", "Axios"],
        "impact":["Adopted by 200+ employees", "Streamlined HR processes", "Ensured secure data access"]
      }
    ],
    "languages":["English", "Hindi"],
    "softSkills": ["Continuous Learning", "Communication", "Attention to Detail"],
    "totalExperienceYears": 3
  },
  {
    "name": "Kartik Gupta",
    "email": "kartik.g.react@example.com",
    "phone": "+91-2211009988",
    "location": "Lucknow",
    "summary": "Skilled Frontend Developer with 4 years of experience focusing on React.js and modern web standards. Proven ability to translate business requirements into technical solutions that drive user engagement and performance.",
    "skills":["React.js", "Redux", "Tailwind CSS", "REST APIs", "JavaScript (ES6+)", "Figma"],
    "social":["https://linkedin.com/in/kartikgupta", "https://github.com/kartikg"],
    "preferredJob": "Frontend Developer",
    "experience":[
      {
        "title": "Frontend Developer",
        "company": "EduSmart Technologies",
        "startDate": "2022-08-01",
        "endDate": "2026-03-01",
        "location": "Lucknow",
        "description": "Developed scalable and interactive frontend modules for an online tutoring platform using React and Redux. Integrated a real-time whiteboard feature using WebSockets, facilitating seamless collaboration between tutors and students. Reduced application bundle size by 20% through rigorous code refactoring and dependency management."
      },
      {
        "title": "Junior UI Engineer",
        "company": "Creative Solutions",
        "startDate": "2020-09-01",
        "endDate": "2022-07-31",
        "location": "Kanpur",
        "description": "Built responsive landing pages for various client marketing campaigns using HTML, CSS, and React. Collaborated with UI/UX designers to implement pixel-perfect designs from Figma prototypes. Participated in daily stand-ups and ensured timely delivery of assigned sprint tasks."
      }
    ],
    "projects":[
      {
        "name": "Virtual Classroom Platform",
        "description": "Engineered the frontend interface for a virtual classroom supporting live video streaming and interactive chat. Utilized Redux to manage complex state interactions during live sessions, ensuring zero UI lag. The platform successfully hosted over 1,000 concurrent students during peak hours without performance degradation.",
        "technologies":["React", "Redux", "WebSockets", "WebRTC"],
        "impact":["Hosted 1,000+ concurrent students", "Zero UI lag during live sessions", "Reduced bundle size by 20%"]
      },
      {
        "name": "Marketing Campaign Dashboard",
        "description": "Created a centralized dashboard for the marketing team to track campaign metrics and ROI in real-time. Integrated multiple third-party analytics APIs and visualized the data using interactive charts. The dashboard saved the team approximately 8 hours of manual reporting work each week.",
        "technologies":["React", "Tailwind CSS", "Chart.js", "Axios"],
        "impact":["Saved 8 hours/week in reporting", "Centralized data tracking", "Improved decision-making speed"]
      }
    ],
    "languages":["English", "Hindi"],
    "softSkills": ["Team Player", "Problem Solving", "Time Management"],
    "totalExperienceYears": 4
  }
]

console.log(data.length)