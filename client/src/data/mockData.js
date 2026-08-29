/**
 * Mock/local fallback data.
 * Shape here mirrors exactly what the backend API returns
 * (see server/src/models + server/src/data/seedData.js) so swapping
 * from mock -> live API later is a no-op for every component.
 */

export const navDropdowns = {
  about: {
    label: 'About',
    to: '/about',
    items: [
      { label: 'Company Overview', to: '/about/company-overview' },
      { label: 'Executive Leadership', to: '/about/executive-leadership' },
      { label: 'Client & Partners', to: '/about/client-partners' },
      { label: 'News', to: '/about/news' },
      { label: 'Events', to: '/about/events' },
      { label: 'Life at socialnetworker', to: '/about/life-at-socialnetworker' },
    ],
  },
  services: {
    label: 'Services',
    to: '/services',
    items: [
      { label: 'Services', to: '/services' },
      {
        label: 'Product Engineering',
        to: '/services/product-engineering',
        hasChildren: true,
        children: [
          { label: 'Mobile + App', to: '/services/mobile-apps' },
          { label: 'Cloud + Web', to: '/services/cloud-web' },
          { label: 'UI-UX', to: '/services/design-ui-ux' },
          { label: 'AI/ML + BI', to: '/services/ai-ml-bi' },
          { label: 'BPS', to: '/services/bps' },
        ],
      },
      {
        label: 'Quality Engineering',
        to: '/services/quality-engineering',
        hasChildren: true,
        children: [
          { label: 'Quality Engineering', to: '/services/quality-engineering' },
          { label: 'Functional Testing', to: '/services/quality-engineering/functional-testing' },
          { label: 'Test Automation', to: '/services/quality-engineering/test-automation' },
          { label: 'Non Functional Testing', to: '/services/quality-engineering/non-functional' },
          { label: 'Performance Testing', to: '/services/quality-engineering/performance-testing' },
          { label: 'Security Testing', to: '/services/quality-engineering/security-testing' },
        ],
      },
      { label: 'SAP Testing', to: '/sap-testing' },
      { label: 'Factoring Solutions', to: '/services/factoring-solutions' },
    ],
  },
  verticals: {
    label: 'Verticals',
    to: '/verticals',
    items: [
      { label: 'Seffo', to: '/verticals/seffo' },
      { label: 'E-commerce', to: '/verticals/e-commerce' },
      { label: 'Digital Health', to: '/verticals/digital-health' },
      { label: 'Banking & Financial Services', to: '/verticals/banking-financial-services' },
    ],
  },
};

export const simpleNavLinks = [
  { label: 'Technologies', to: '/technologies' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Careers', to: '/careers' },
];

export const heroContent = {
  eyebrow: null,
  headline: 'We build made-to-order software teams that are exclusive to your company',
  ctaLabel: 'Services',
  ctaTo: '/services',
};

export const services = [
  {
    id: 'mobile-apps',
    title: 'Mobile + Apps',
    description:
      "In today's world, mobile technology is everything. To cater to your customers' needs, your software must be mobile-friendly.",
    image: '/images/services/mobile-apps.svg',
    to: '/services/mobile-apps',
  },
  {
    id: 'cloud-web',
    title: 'Cloud + Web',
    description:
      'The cloud has changed everything and powers nearly anything. Your software should work everywhere.',
    image: '/images/services/cloud-web.svg',
    to: '/services/cloud-web',
  },
  {
    id: 'design-ui-ux',
    title: 'Design + UI / UX',
    description:
      'Design is not how something looks, but how it works. Your application should work beautifully.',
    image: '/images/services/design-ui-ux.svg',
    to: '/services/design-ui-ux',
  },
  {
    id: 'ai-ml-bi',
    title: 'AI / ML + BI',
    description:
      'AI & ML technologies are transforming every industry. Are you ready.',
    image: '/images/services/ai-ml-bi.svg',
    to: '/services/ai-ml-bi',
  },
  {
    id: 'quality-engineering',
    title: 'Quality Engineering',
    description:
      "Software Testing & Quality Assurance ensure's a great user experience and ensure a bug free environment.",
    image: '/images/services/quality-engineering.svg',
    to: '/services/quality-engineering',
  },
  {
    id: 'sap-testing',
    title: 'SAP Testing',
    description:
      'SAP testing services ensure that the SAP system performs as expected and meets the quality standards.',
    image: '/images/services/sap-testing.svg',
    to: '/sap-testing',
  },
  {
    id: 'bps',
    title: 'BPS',
    description:
      'We focus on what\u2019s important, Simplify, Productive, speed-up and streamline processes.',
    image: '/images/services/bps.svg',
    to: '/services/bps',
  },
];

export const aboutContent = {
  heading: 'About socialnetworker',
  paragraph:
    'socialnetworker, founded in 2000, has an impressive two-decade track record of successfully designing, developing, delivering, and supporting software and technology solutions. We work around the world: from the US and Canada to Europe & Africa, to Japan & Southeast Asia to India and South Asia. From start-ups to large enterprises, from small jobs to big projects, from the simple to the complex, we deliver on-time and on-budget for our clients and partners.',
  image: '/images/about/team.svg',
  ctaLabel: 'Read More',
  ctaTo: '/about/company-overview',
};

export const locations = [
  { id: 1, code: '01', country: 'CANADA', city: 'Toronto', color: '#2E86C1', top: '18%', left: '29%' },
  { id: 2, code: '02', country: 'UAE', city: 'Dubai', color: '#17A589', top: '32%', left: '58%' },
  { id: 3, code: '03', country: 'INDIA', city: 'Trivandrum', color: '#E24A6E', top: '40%', left: '68%' },
  { id: 4, code: '04', country: 'SINGAPORE', city: '', color: '#8E44AD', top: '48%', left: '76%' },
];

export const pageContent = {
  'company-overview': {
    slug: 'company-overview',
    title: 'Company Overview',
    image: '/images/pages/company-overview.svg',
    intro:
      "Founded in 2000, we've spent more than two decades designing, building, delivering, and supporting software and technology solutions for clients across the globe. Our team works with organizations ranging from early-stage start-ups to large enterprises, spanning North America, Europe, Africa, Japan, Southeast Asia, and South Asia. Whatever the scale or complexity of a project, we pride ourselves on delivering on time and on budget for every client and partner.",
    highlights: [
      'Founded in 2000',
      'Global delivery across the Americas, Europe, Africa, and Asia',
      'Serves start-ups through large enterprises',
      'On-time, on-budget delivery track record',
    ],
    sections: [
      {
        heading: 'Who We Are',
        body: "Since founding, we've supported companies worldwide with their technology outsourcing needs. We partner with everyone from small start-ups to large global enterprises, helping them navigate today's fast-moving technology landscape and stay a step ahead of competitors. Our expertise spans the full range of modern computing, from smartphones and the web to desktops and cloud infrastructure, and from artificial intelligence to Big Data — giving client companies the tools they need to compete at every level of the technology stack.",
      },
      {
        heading: 'Our Vision',
        body: 'We are dedicated to reshaping the technology services and solutions landscape by delivering best-in-class technical expertise to every client and partner we work with. We see our people as the true engine of the business rather than simply employees, and we are committed to cultivating a culture built on excellence, empowerment, and continuous growth for each individual on the team. This vision is grounded in a firm commitment to ethical business practices — integrity, mutual respect, accountability, and responsible corporate citizenship are woven into every aspect of how we operate.',
      },
      {
        heading: 'Digital Transformation Services',
        body: 'We deliver a full spectrum of digital transformation capabilities designed to help businesses compete in a mobile-first, cloud-powered world.',
        bullets: [
          'Mobile + Apps — mobile technology is central to reaching customers today, so software must be built mobile-friendly from the ground up',
          'Cloud + Web — cloud computing has transformed how software is delivered and powers nearly every modern application; our solutions are built to work everywhere',
          'Design + UI/UX — good design is about how a product works, not just how it looks, so every application is crafted to function as beautifully as it appears',
          'AI/ML + BI — artificial intelligence, machine learning, and business intelligence technologies are reshaping every industry, and we help clients get ready for that shift',
          'Quality Engineering — dedicated software testing and quality assurance practices ensure a great user experience and a bug-free environment',
          'SAP Testing — specialized SAP testing services confirm that SAP systems perform as expected and meet rigorous quality standards',
          'BPS (Business Process Services) — a focus on simplifying, streamlining, and speeding up processes so clients can concentrate on what matters most',
        ],
      },
    ],
    stats: [
      { label: 'Founded', value: '2000' },
      { label: 'Years of Experience', value: '20+' },
      { label: 'Global Locations', value: '4' },
      { label: 'Core Service Lines', value: '7' },
    ],
  },
};

pageContent['executive-leadership'] = {
  slug: 'executive-leadership',
  title: 'Leadership & Management',
  intro:
    'socialnetworker is led by a team of technology and operations veterans with two decades of combined experience delivering software and digital transformation across North America, Europe, and Asia.',
  sections: [],
  stats: [],
};

pageContent['services-overview'] = {
  slug: 'services-overview',
  title: 'Services Overview',
  image: '/images/pages/services-overview.svg',
  intro:
    "We offer a broad portfolio of services spanning product engineering, quality engineering, SAP testing, and factoring solutions, supporting clients across verticals like e-commerce, digital health, and banking & financial services. At the core of this portfolio are our Digital Transformation Services, which help businesses modernize across mobile, cloud, design, AI, and quality assurance.",
  highlights: ['Mobile + Apps', 'Cloud + Web', 'Design + UI/UX', 'AI/ML + BI', 'Quality Engineering', 'SAP Testing', 'BPS'],
  sections: [
    {
      heading: 'Digital Transformation Services',
      body: 'These core service lines form the foundation of how we help clients modernize their technology stack and stay competitive.',
      bullets: [
        'Mobile + Apps — mobile technology sits at the center of the customer experience today, so client software is built to be mobile-friendly from the start',
        'Cloud + Web — cloud computing has reshaped what software can do, and we build solutions designed to run everywhere',
        'Design + UI/UX — design is treated as a functional discipline, not just an aesthetic one, so applications are built to work as beautifully as they look',
        'AI/ML + BI — with AI and ML technologies transforming every industry, we help clients prepare to adopt and benefit from them',
        'Quality Engineering — a dedicated practice covering functional testing, test automation, non-functional testing, and performance testing',
        'SAP Testing — focused testing services that verify SAP systems perform reliably and meet high quality standards',
        'BPS (Business Process Services) — services centered on simplifying, boosting productivity, and speeding up and streamlining client processes',
      ],
    },
    {
      heading: 'Broader Service & Industry Coverage',
      body: "Beyond our core Digital Transformation Services, our offerings are organized into Product Engineering, Quality Engineering (including Functional Testing, Test Automation, Non-Functional Testing, Performance Testing, and Security Testing), SAP Testing, and Factoring Solutions. These services are applied across multiple industry verticals, including HR/Workforce Management, E-commerce, Digital Health, and Banking & Financial Services, reflecting our focus on tailoring technology expertise to sector-specific needs.",
    },
  ],
  stats: [],
};

pageContent['mobile-apps'] = {
  slug: 'mobile-apps',
  title: 'Mobile + Apps',
  image: '/images/services/mobile-apps.svg',
  intro:
    'We bring deep capability across the entire mobile app lifecycle — from initial strategy and design through development, testing, deployment, and ongoing support and upgrades. Mobile efforts are treated as an extension of broader cloud and backend strategy rather than a standalone product, ensuring apps integrate cleanly with existing services. We build natively with Swift for iOS and Kotlin for Android, as well as cross-platform using React Native, and also cover hybrid and mobile web approaches.',
  highlights: ['Hybrid', 'iOS & Android', 'Mobile Web', 'Cross Platform Frameworks', 'Swift', 'Kotlin', 'React Native'],
  sections: [
    {
      heading: 'Design & User Experience',
      body: 'Mobile UX is guided by a small set of disciplined principles rather than added as an afterthought. Interfaces are kept as simple as possible, interactions are made intuitive and immediately obvious, and layouts are designed with one-handed use in mind since that is how most people actually hold their phones. Design is never treated as finished — it is continuously iterated based on real user feedback after launch.',
      bullets: ['Keep designs as simple as possible', 'Aim for intuitive, obvious user interactions', 'Design for one-handed use', 'Iterate continuously based on user feedback'],
    },
    {
      heading: 'Security',
      body: 'Security is built in from day one of development rather than bolted on later. We follow industry-standard security design practices, regularly probe for weak points both before and after an app ships, and bring in independent third-party security testers for an unbiased assessment. Because threats and best practices keep evolving, we stay current on new security techniques and implementations.',
      bullets: ['Security considered from the earliest stages of development', 'Follow industry-standard security design best practices', 'Regular testing for weak points pre- and post-deployment', 'Engage third-party security testers for unbiased review'],
    },
    {
      heading: 'Analysis & Analytics',
      body: 'Once an app is live, ongoing measurement is what turns launch data into real improvement. We track downloads and adoption trends, study how people actually use the app to surface UX opportunities, and pay close attention to the highest-value interactions to confirm the app is delivering its intended outcomes. Retention, ratings, and direct user surveys round out the feedback loop.',
      bullets: ['Track downloads and user adoption over time', 'Study usage patterns to inform UX improvements', 'Review high-value interactions to verify outcomes', 'Monitor retention, ratings, and run user surveys'],
    },
  ],
  stats: [],
};

pageContent['cloud-web'] = {
  slug: 'cloud-web',
  title: 'Cloud + Web',
  image: '/images/services/cloud-web.svg',
  intro:
    'The cloud sits at the center of nearly every modern digital transformation strategy, powering everything from small businesses to large enterprises. We bring broad, hands-on experience across the major public clouds — Amazon Web Services, Microsoft Azure, and Google Cloud Platform — along with the skill to design and deploy private and hybrid cloud environments, spanning servers, storage, compute, testing services, and databases.',
  highlights: ['Microsoft Azure', 'Amazon Web Services', 'Google Cloud Platform', 'Cloud Management'],
  sections: [
    { heading: 'Be Cloud Focused', body: "A genuinely cloud-centered strategy — rather than a piecemeal, bolt-on approach — is what unlocks the cloud's full advantages, running through every layer: architecture, data, engagement, and security." },
    { heading: 'Scale', body: 'Cloud implementations need to be architected so they scale quickly, delivering a consistently strong and responsive experience while only consuming the resources actually needed at any given time.' },
    { heading: 'Speed', body: 'Being able to stand up new tools, services, and technologies quickly is essential for staying responsive to shifting business and customer demands.' },
    { heading: 'Security', body: 'We help navigate security risk from the application layer down to user endpoints, treating security as an ongoing process with consistent, continuous testing rather than a fixed, one-time state.' },
    { heading: 'New Features', body: 'Cloud providers constantly roll out new services and capabilities — we track these updates and understand how they can cut costs, add functionality, and improve business processes.' },
    { heading: 'Technologies & Services', body: 'Work spans all three major public cloud platforms, giving clients flexibility to choose the provider that best fits their stack, cost model, or regulatory requirements — or to combine them in hybrid and private cloud setups.', bullets: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)'] },
  ],
  stats: [],
};

pageContent['design-ui-ux'] = {
  slug: 'design-ui-ux',
  title: 'Design + UI / UX',
  image: '/images/services/design-ui-ux.svg',
  intro:
    'Great design is about far more than surface-level polish — it combines visual appeal with real functionality to make a product genuinely more useful and enjoyable to use. We field a team of designers, business analysts, commercial artists, and technical writers who are fluent in both the technical design process and digital media.',
  highlights: ['UI/UX', 'Prototyping', 'Design Services'],
  sections: [
    { heading: 'Understand Your Business', body: "The process begins by understanding the client's business focus and the real purpose behind what needs to be built, so the final product actually serves its intended business objectives rather than just looking good." },
    { heading: 'Research & Requirements', body: 'Next comes learning what real users are trying to accomplish and how they will actually use the end product — directly interviewing prospective users and mapping out the key use cases the product needs to support.' },
    { heading: 'Design & Prototype', body: 'With research in hand, the core product takes shape and wireframes are built, then go back out to users for feedback. Prototyping lets people visualize how the product will look and behave.' },
    { heading: 'Test & Refine', body: 'The final step is hands-on user testing: designs and prototypes go back to users, their feedback is folded in, and the cycle repeats until the design earns real acceptance from key users and stakeholders.' },
  ],
  stats: [],
};

pageContent['ai-ml-bi'] = {
  slug: 'ai-ml-bi',
  title: 'AI/ML + BI',
  image: '/images/services/ai-ml-bi.svg',
  intro:
    'Artificial intelligence and machine learning have become critical levers for improving customer engagement, marketing, sales, and internal process efficiency. We bring hands-on experience building AI/ML-powered applications, covering the full journey of identifying, accessing, organizing, and extracting data, then using it to learn, understand, and forecast with AI/ML and BI tooling.',
  highlights: ['Google Cloud Platform', 'Amazon Web Services', 'Microsoft Azure'],
  sections: [
    { heading: 'Data Labeling for Machine Learning', body: 'Dedicated teams review and label data specifically for machine learning workflows, since accurate labeling is foundational to getting good results out of any ML model. Labelers go through rigorous training to meet the standard needed for reliable outcomes.' },
    {
      heading: 'Text and Data Extraction',
      body: 'Using current text-extraction and image-processing technology, we help organizations pull structured, usable data out of documents that arrive in inconsistent or unusable formats — reading virtually any document type accurately without manual review or custom code.',
      bullets: ['Computer vision-based document reading', 'Form field extraction', 'Table data extraction', 'Replaces manual entry and traditional OCR workflows'],
    },
    {
      heading: 'AI/ML Cloud Implementations',
      body: 'As AI/ML tooling matures, the major cloud providers each offer their own proven frameworks. We have direct experience installing and operating AI/ML cloud frameworks across AWS, Azure, and Google Cloud.',
      bullets: ['AWS AI/ML frameworks', 'Azure AI/ML frameworks', 'Google Cloud AI/ML frameworks'],
    },
  ],
  stats: [],
};

pageContent['bps'] = {
  slug: 'bps',
  title: 'Business Process Services (BPS)',
  image: '/images/services/bps.svg',
  intro:
    'Many businesses carry a load of repetitive tasks and processes that eat up time and budget and pull people away from higher-value work. We provide both the people and the technology to handle these routine tasks and automate processes so they run faster and at lower cost.',
  highlights: ['Process Automation', 'Data Validation', 'Data Entry'],
  sections: [
    {
      heading: 'Process Automation',
      body: "Internal business processes often run in isolation from one another — a common example being customer support systems that don't talk to CRM systems. We connect these disparate systems using RPA (Robotic Process Automation) and other automation techniques so data flows seamlessly between them.",
      bullets: ['Robotic Process Automation (RPA)', 'System-to-system data integration', 'Elimination of manual intervention between disconnected processes'],
    },
    {
      heading: 'Data Validation',
      body: 'Ensuring data is accurate and complete is essential, particularly for data-heavy, user-input-driven industries like insurance and banking. Validation can be handled by dedicated, specially trained manual review teams or driven by technology such as AI/ML paired with computer vision for text and image processing.',
      bullets: ['Manual validation by trained teams', 'AI/ML-driven validation', 'Computer vision for text and image processing'],
    },
    {
      heading: 'Data Entry',
      body: "Some processes — like customer support or data entry — need a human touch and resist full automation, but remain highly process-driven. We build specialized, extensively trained data entry teams to take this burden off internal staff.",
    },
    {
      heading: 'Application Areas',
      body: 'Process outsourcing and automation can be applied across a wide range of business functions beyond core operations.',
      bullets: ['Customer management', 'Sales & marketing automation', 'Supply chain', 'Inventory control', 'Administration'],
    },
  ],
  stats: [],
};

pageContent['privacy-policy'] = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  image: '/images/pages/privacy-policy.svg',
  intro:
    'All content on this website is the property of socialnetworker Technologies Pvt Ltd and is protected under applicable copyright laws. Unauthorized use or reproduction of any content is strictly prohibited.',
  sections: [
    { heading: 'Data We Collect', body: 'When you submit a contact form, we collect your name, email, phone number, and company so our team can respond to your inquiry.' },
    { heading: 'How We Use Your Data', body: 'Contact submissions are used solely to respond to your inquiry and are never sold or shared with third parties for marketing purposes.' },
    { heading: 'Contact Us', body: 'Questions about this policy can be directed to sales@socialnetworker.com.' },
  ],
  stats: [],
};

pageContent['seffo'] = {
  slug: 'seffo',
  title: 'Digitize Your HR Operations with the SEFFO Platform',
  image: '/images/verticals/seffo.svg',
  intro:
    'SEFFO is our Human Resource Management System, integrating employee management, payroll processing, attendance and leave tracking, asset and inventory management, recruitment, and performance evaluation into a single unified platform — accessible via web and mobile, and fully configurable to your organization’s policies.',
  highlights: [
    'Employee Self-Service Portal',
    'Attendance & Leave Management',
    'Payroll Processing & Salary Slips',
    'Asset & Inventory Tracking',
    'Performance Evaluation & Reviews',
    'Recruitment & Onboarding',
    'Role-Based Access & Security',
    'Reports & Analytics Dashboard',
    'HR Analytics and Reporting',
    'Cloud-Based HR Solution',
  ],
  sections: [
    {
      heading: 'Employee Management',
      body: 'A comprehensive employee management module that helps HR teams streamline workforce data and daily operations. From onboarding to retirement, every stage of the employee lifecycle is tracked and managed through a centralized hub.',
      bullets: ['Centralized Employee Database', 'Role & Department Management', 'Attendance & Leave Tracking'],
    },
    {
      heading: 'Payroll & Administration',
      body: 'Simplifies the entire salary and compliance process. It automates payroll calculations, manages deductions, and ensures employees are paid accurately and on time — reducing manual errors and saving HR valuable time.',
      bullets: ['Automated Payroll Processing', 'Tax & Compliance Management', 'Employee Payslip Generation'],
    },
    {
      heading: 'Asset & Inventory Management',
      body: 'Helps organizations efficiently manage and monitor all physical assets and accessories assigned to employees, tracking issuance, returns, and inventory levels in real time for complete visibility and accountability.',
      bullets: ['Asset Allocation to Employees', 'Accessory Tracking & Lifecycle Management', 'Return & Replacement Logs'],
    },
    {
      heading: 'Reports & Analytics',
      body: 'Powerful reporting and analytics tools give HR and management real-time insight into workforce performance and operations. Custom dashboards help identify trends, monitor KPIs, and make data-driven decisions.',
      bullets: ['Customizable HR Reports', 'Attendance & Performance Analytics', 'Department-wise Insights'],
    },
    {
      heading: 'Employee Self-Service Portal',
      body: 'A secure, user-friendly login portal where employees access all HR-related information in one place — view and download payslips, manage attendance, submit leave requests, update personal details, and track performance reviews in real time, with role-based access and mobile/web compatibility.',
    },
    {
      heading: 'Inventory Module',
      body: 'Manages organizational assets and accessories throughout their lifecycle. HR and admin teams allocate laptops, ID cards, mobile devices, and other equipment with complete visibility, maintaining real-time records of issued and returned assets with automated reminders and approval workflows.',
    },
    {
      heading: 'Admin Module',
      body: 'The central control hub for HR teams and administrators — configure, monitor, and manage all HRMS functionality from one secure dashboard. Oversee employee profiles, departments, roles, leave policies, payroll structures, and system permissions with role-based controls and compliance reporting.',
    },
    {
      heading: 'Recruitment Module',
      body: 'Streamlines and automates the entire hiring process from job posting to onboarding. Create and manage job openings, track applications, let candidates upload resumes directly, and shortlist, review, and schedule interviews seamlessly, with automated notifications and progress tracking.',
    },
    {
      heading: 'Ticket Management System',
      body: 'Simplifies issue tracking and internal support. Employees raise tickets for HR, IT, or administrative requests; HR and admin teams categorize, prioritize, and assign them while tracking real-time progress, SLA compliance, and resolution metrics through an interactive dashboard.',
    },
    {
      heading: 'Invoice Management System',
      body: 'Automates the billing and payment lifecycle. Finance and admin teams generate, send, and track invoices, link them to clients or departments, and monitor payment status in real time, with automated reminders, tax/discount configuration, and digital payment integration.',
    },
    {
      heading: 'Customer Relationship Management (CRM)',
      body: 'Helps organizations build and strengthen client relationships through a unified platform for tracking interactions, managing leads, and optimizing the sales pipeline — with customer segmentation, integrated analytics, and performance dashboards.',
    },
  ],
  stats: [],
};

pageContent['ecommerce'] = {
  slug: 'ecommerce',
  title: 'Grow Your Business Online with Our E-Com Solutions',
  image: '/images/verticals/ecommerce.svg',
  intro:
    "We bring deep expertise in building e-commerce platforms across many business models, having delivered web and mobile (iOS and Android) commerce solutions for years. Rather than forcing every client onto one template, we build custom business logic tailored to how each business actually operates, spanning groceries, restaurants, apparel, mixed-product catalogs, and services.",
  highlights: ['Individual branded online shops', 'Aggregator portals', 'Multi-location store networks', 'Multi-vendor marketplaces', 'Delivery tracking & logistics integration', 'Real-time analytics & reporting', 'Integrated CRM & customer engagement', 'Full QA and long-term support'],
  sections: [
    { heading: 'Commerce Models Supported', body: 'We have shipped e-commerce platforms across every common commercial structure, from single-brand storefronts to full multi-vendor marketplaces.', bullets: ['Individually branded online shops for a single business', 'General aggregator portals bringing multiple vendors onto one platform', 'Multi-location setups where several branches operate under one brand', 'Marketplace platforms where many vendors run independent storefronts side by side'] },
    { heading: 'Core Platform Capabilities', body: 'Every build is engineered to be full-featured and production-robust out of the box.', bullets: ['Product listing and catalog management', 'Search', 'Inventory management', 'Administration dashboards', 'Point of sale', 'Analytics and real-time reporting', 'Coupons and promotions', 'Integrated CRM tooling'] },
    { heading: 'Delivery', body: "Order fulfillment is handled end-to-end, from dispatch to the customer's door.", bullets: ['Delivery management and live tracking', 'Delivery pricing and service-area management', 'Integration with third-party delivery partner APIs'] },
    { heading: 'Customer Engagement', body: 'Tools to understand shoppers and keep them coming back.', bullets: ['Customer and product attribute tracking', 'Customer referral programs', 'Email marketing', 'Messaging and chatbot tools'] },
    { heading: 'Third-Party Integrations', body: 'Platforms are built to connect cleanly into the surrounding commerce and marketing ecosystem.', bullets: ['Other e-commerce platforms', 'Social media platforms', 'Customer engagement & CRM systems', 'Delivery and logistics providers'] },
    { heading: 'Testing, Support & Maintenance', body: 'A complete testing spectrum covers the platform before and after launch — manual, automated, and security testing — and we support legacy e-commerce applications through digital transformation as platforms evolve.' },
    { heading: 'Case Study: Multi-Format Marketplace Suite', body: 'A client needed a comprehensive, scalable, and configurable suite of e-commerce platforms rather than a single site. We delivered support for marketplaces, aggregator portals, multi-store deployments, fully configurable business logic, and a DIY website builder — serving clients ranging from banks integrating proprietary payment solutions down to individual small businesses needing custom logic.' },
  ],
  stats: [],
};

pageContent['digital-health'] = {
  slug: 'digital-health',
  title: 'Digital Health',
  image: '/images/verticals/digital-health.svg',
  intro:
    'We have spent over a decade in digital health, building one of the earliest telehealth portals in the region alongside clinic management systems and patient/doctor mobile apps. Every product is engineered to keep patient data secure and private, following HIPAA standards, and serves the full spectrum of healthcare stakeholders: patients, doctors, dentists, clinics, insurers, and pharma.',
  highlights: ['Clinic management systems', 'Telehealth video/text/audio consultations', 'Branded patient/doctor apps', 'Electronic health records', 'HIPAA-compliant, AWS-hosted security', 'Configurable consultation pricing'],
  sections: [
    { heading: 'Clinic Management Systems', body: 'Full clinic management systems scale from single practitioners up to polyclinics, hosted on AWS with best-of-breed, HIPAA-compliant security. Solutions ship as both cloud-based and fully offline applications.', bullets: ['Prescriptions', 'Billing & GST', 'Specialized case sheets', 'Patient health cards', 'Treatment plan creation', 'Lab-order management', 'Multiple doctor & staff logins'] },
    { heading: 'Key Clinic Features', body: 'Beyond the core management modules, clinics get a deeper operational feature set.', bullets: ['Electronic health records', 'Automated SMS reminders', 'Inventory tracking', 'Graphical vital-signs display', 'Pharmacy management', 'Online and in-person appointment booking', 'Medical consent forms', 'Analytics and reporting'] },
    { heading: 'Telehealth Technology', body: 'Telehealth and teleconsulting systems connect patients and doctors on their own schedule, with support for video, text, and audio consultations. Pricing is fully configurable — per session, per minute, or other custom models.', bullets: ['Video chat', 'Text chat', 'Audio chat'] },
    { heading: 'Branded Websites and Mobile Apps', body: "Patient-facing web and mobile experiences can be built from templates or fully custom-designed, matched to a provider's own branding.", bullets: ['Choice of templates or fully custom design', 'Integrated patient appointment booking', 'Built-in telehealth (video, message, call)', 'Doctor profile modules', 'Mobile-friendly, responsive design', 'Native iOS and Android apps'] },
    { heading: 'Security & Data Ownership', body: 'Patient trust is protected through strict data governance and industry-standard security infrastructure.', bullets: ['Client data is owned by the client and fully exportable', 'Hosted on Amazon Web Services', 'Automated backups', 'HIPAA compliant'] },
    { heading: 'Case Study: Multi-Clinic Health Platform', body: 'A digital health technology client needed both B2C and B2B cloud software for patients and for providers such as clinics, hospitals, and insurers. We delivered a practice management system, telehealth technologies, white-label platforms for insurance partners, and connected IoT health-monitoring technology — now running across more than 1,000 clinics and hospitals.' },
  ],
  stats: [],
};

pageContent['banking-financial-services'] = {
  slug: 'banking-financial-services',
  title: 'Banking & Financial Services',
  image: '/images/verticals/banking-financial-services.svg',
  intro:
    'We have a 20+ year track record designing, developing, delivering, and supporting technology solutions for banks and financial institutions worldwide. We work across start-ups and large enterprises alike, delivering projects of every size on time and on budget.',
  highlights: ['Agile, ALM & DevOps consultancy', 'Test automation frameworks', 'Core banking testing (Temenos T24, iMAL, ETHIX)', 'Mobile banking testing', 'Digital assurance', 'Non-functional and functional testing suites'],
  sections: [
    { heading: 'Agile, ALM & DevOps Consultancy', body: "Guidance and hands-on delivery to modernize a bank's development lifecycle and cloud posture.", bullets: ['Continuous integration, development, and delivery', 'ALM and DevOps assessments and audits', 'CI/CD pipeline development and tooling', 'Agile transformation and coaching', 'Cloud adoption across Azure, AWS, and other providers'] },
    { heading: 'Test Automation', body: 'Automation capability built to scale across web, API, and mobile banking channels.', bullets: ['Automation framework design and implementation', 'API and RPA automation services', 'Mobile automation', 'Continuous testing', 'Dedicated Automation Centre of Excellence'] },
    { heading: 'Test Strategy & Guidance', body: "Advisory services that raise the maturity of a client's existing test organization.", bullets: ['Quality and test process reviews', 'Test process improvement', 'Executive and senior manager mentoring', 'Training, coaching, and facilitation'] },
    { heading: 'Managed Testing Services', body: "Flexible delivery models that fit around a client's existing teams and locations.", bullets: ['On-site/off-site and on-shore/near-shore/off-shore delivery', 'Flexible blended delivery models', 'Partnering on integration services', 'Software upgrade assurance'] },
    { heading: 'Non-Functional Testing', body: 'Coverage of the operational qualities banking systems must guarantee beyond core functionality.', bullets: ['Security testing', 'Usability testing', 'Operational Acceptance Testing (OAT) planning and coordination', 'Disaster recovery validation and reviews', 'Cloud readiness, performance, load, and volume testing'] },
    { heading: 'Functional Testing', body: 'End-to-end functional validation across every layer of a banking application.', bullets: ['SIT/UAT', 'Mobility testing', 'UI/UX testing', 'Web service testing', 'Data migration testing', 'Regression testing', 'Roles and permissions testing'] },
    { heading: 'Core Banking Expertise', body: 'A Core Banking Solution (CBS) is the shared IT backbone where a central database supports the entire banking application, with every branch updating the same consolidated data center in real time. A CBS also enables integration of third-party and in-house banking software.', bullets: ['Temenos T24 expertise', 'iMAL expertise', 'ETHIX expertise'] },
    { heading: 'Mobile Banking & Digital Assurance', body: 'Testing and engineering expertise extends the same core-banking rigor to mobile banking channels, ensuring consistent, secure behavior across devices as digital banking channels evolve and connect to third-party applications.' },
    { heading: 'Case Study: Core-Banking Test Automation', body: 'A dedicated engagement covering automation, security, functional, and performance testing for a core-banking deployment, using Katalon Studio, Groovy Script, and Jira, alongside a separate automation/compatibility engagement built on Azure DevOps, Selenium, Xamarin, BitBar, and Test Complete.' },
  ],
  stats: [],
};

pageContent['technologies'] = {
  slug: 'technologies',
  title: 'Technologies',
  image: '/images/pages/technologies.svg',
  intro: 'We work across a broad, modern technology stack spanning mobile, web, backend, cloud, database, and AI tooling — the range of platforms and languages our team has hands-on experience delivering production work in.',
  sections: [
    { heading: 'Mobile', body: 'Native and cross-platform mobile development capability.', bullets: ['Android', 'iOS', 'Kotlin', 'Swift', 'React Native'] },
    { heading: 'Web / Frontend', body: 'Frontend frameworks and markup technologies for building modern web interfaces.', bullets: ['Angular', 'HTML5', 'React JS', 'Vue'] },
    { heading: 'Backend', body: 'Server-side languages and runtimes powering application logic and APIs.', bullets: ['Java', '.NET', 'Node JS', 'Python'] },
    { heading: 'Cloud', body: 'Cloud infrastructure platforms used for hosting, scaling, and managing deployments.', bullets: ['AWS', 'Azure', 'GCP'] },
    { heading: 'Databases', body: 'Database technology used for data storage and management.', bullets: ['MySQL'] },
    { heading: 'AI', body: 'Emerging AI tooling incorporated into the technology practice.', bullets: ['ChatGPT'] },
  ],
  stats: [],
};

pageContent['our-work'] = {
  slug: 'our-work',
  title: 'Case Studies',
  image: '/images/pages/our-work.svg',
  intro: 'Examples of projects socialnetworker has delivered across e-commerce, healthcare, banking, AI/ML, and more.',
  sections: [],
  stats: [],
};

pageContent['careers'] = {
  slug: 'careers',
  title: 'Be a Part of Something Bigger',
  image: '/images/pages/careers.svg',
  intro:
    'socialnetworker is looking for high character & hard working people who like challenges and working in a fast-paced, dynamic environment.',
  sections: [
    { heading: 'Insurance', body: 'We provide diverse health insurance plans demonstrating our commitment to employee wellness.' },
    { heading: 'Free Medical Camp', body: 'socialnetworker collaborates with multiple medical institutions to offer complimentary health screenings for staff.' },
    { heading: 'Entertainment', body: 'We support work enjoyment through movies, games, Fun Friday events, sports, and recreational activities.' },
    { heading: 'Flexible Timing', body: 'We prioritize work-life balance by offering flexible scheduling arrangements.' },
    { heading: 'Onsite Opportunities', body: 'Employees gain valuable international career exposure through available onsite assignments.' },
  ],
  stats: [],
};

export const workProjects = [
  { title: 'Online Ecommerce Platform', industry: 'E-commerce', description: 'Serverless e-commerce platform with cross-platform mobile apps.', technologies: ['AWS', 'React.js', 'iOS', 'Android', 'React Native'] },
  { title: 'Online Retail Marketplace', industry: 'Retail', description: 'Multi-vendor retail marketplace built on serverless Lambda functions.', technologies: ['AWS', 'Lambda', 'React.js'] },
  { title: 'Online Digital Health Platform', industry: 'Healthcare', description: 'Serverless digital health platform with native and hybrid mobile apps.', technologies: ['AWS', 'React.js'] },
  { title: 'Banking Automation Testing', industry: 'Financial Services', description: 'Automation, compatibility, and functional testing for a banking client.', technologies: ['Azure DevOps', 'Selenium'] },
  { title: 'Animal Husbandry', industry: 'AgriTech', description: 'Private cloud application for livestock management.', technologies: ['React.js', 'Android', 'React Native'] },
  { title: 'iMAL Core-Banking Testing', industry: 'Banking', description: 'Automation, security, functional, and performance testing for a core-banking platform.', technologies: ['Katalon Studio', 'Groovy'] },
  { title: 'Text & Image Recognition Software', industry: 'AI/ML', description: 'OCR and NLP-powered recognition software across web and mobile.', technologies: ['OCR', 'NLP'] },
  { title: 'Digital Health Platform', industry: 'Healthcare', description: 'Multi-platform digital health solution with mobile support.', technologies: ['AWS', 'React.js'] },
  { title: 'Insurance Telehealth Platform', industry: 'Insurance', description: 'Serverless telehealth platform integrating insurance workflows.', technologies: ['AWS', 'React.js', 'iOS', 'Android'] },
  { title: 'Government Asset Management Software', industry: 'Public Sector', description: 'Asset management application for a government agency.', technologies: ['Java'] },
  { title: 'Cloud-based Digital Health Software', industry: 'Healthcare', description: 'Cloud-hosted digital health platform with mobile clients.', technologies: ['AWS', 'Vue.js', 'iOS', 'Android'] },
  { title: 'Telemedicine/Telehealth Software', industry: 'Healthcare', description: 'Telemedicine platform built on serverless Lambda architecture.', technologies: ['AWS Lambda', 'React.js'] },
  { title: 'DoctorsCabin Health Technologies', industry: 'Healthcare', description: 'Healthcare provider platform with serverless architecture and multi-platform support.', technologies: ['AWS'] },
  { title: 'Global Marketing Agency', industry: 'Marketing', description: 'Automation testing and design tooling for a global marketing agency.', technologies: ['Microsoft Azure', '.NET', 'Adobe Photoshop'] },
  { title: 'Solution to Content Creation Bottlenecks', industry: 'Media', description: 'Serverless media production tool with mobile applications.', technologies: ['AWS', 'React.js'] },
].map((project) => ({
  ...project,
  image: `/images/work/${project.industry.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.svg`,
}));

pageContent['quality-engineering'] = {
  slug: 'quality-engineering',
  title: 'Independent Software Testing & Quality Engineering',
  image: '/images/pages/quality-engineering.svg',
  intro:
    'When systems go through legacy integration, platform migration, or application modernization, things can break in unexpected ways. We treat quality as a deliberate, engineered discipline rather than an afterthought. Our QA and Testing Center of Excellence brings together standards, methodologies, and tooling drawn from many industries, technologies, and domains to cut down the time and effort testing normally demands.',
  highlights: ['Functional Testing', 'Managed Testing', 'Test Automation', 'Non-Functional Testing'],
  sections: [
    { heading: 'Functional Testing', body: 'Focused on making sure your product behaves exactly as intended and goes beyond what customers expect, powered by AI-driven QA practices and modern testing solutions.', bullets: ['System Integration Testing (SIT)', 'User Acceptance Testing (UAT)', 'Regression Testing', 'Product Validation Testing (PVT)', 'Webservices API Testing'] },
    { heading: 'Managed Testing', body: 'An outsourced model where a dedicated team plans, executes, and manages testing activities across a software project end to end.', bullets: ['Managing the overall testing process', 'Test management for migration, implementation, and upgrade projects', 'Partnering on integration services', 'Flexible on-site, off-shore, and near-shore delivery models'] },
    { heading: 'Test Automation', body: 'Built for teams that can no longer rely on manual testing alone while competitors ship multiple releases in the time it takes to ship one.', bullets: ['Framework design and implementation', 'API and RPA automation services', 'Mobile automation', 'Automation Center of Excellence', 'Continuous testing'] },
    { heading: 'Non-Functional Testing', body: 'Plays a critical role across the development lifecycle, surfacing performance, security, and usability issues that functional testing alone would miss.', bullets: ['Security Testing', 'Performance Testing', 'Usability Testing', 'Compatibility Testing'] },
    { heading: 'Industries We Serve', body: 'Our quality engineering practice spans multiple verticals, each with its own compliance and reliability demands.', bullets: ['BFSI (Banking, Financial Services and Insurance)', 'Retail & Consumer Goods', 'Digital Health', 'Marketing & Advertisement', 'Education', 'Independent Software Vendors'] },
  ],
  stats: [],
};

pageContent['functional-testing'] = {
  slug: 'functional-testing',
  title: 'Functional Testing',
  image: '/images/pages/functional-testing.svg',
  intro:
    'Our functional testing practice exists to make sure what you build lines up precisely with what you set out to build — and then goes a step further to exceed customer expectations. We combine deep QA expertise with AI-assisted testing techniques and current-generation tooling to validate software behavior across every layer.',
  highlights: ['System Integration Testing', 'User Acceptance Testing', 'Regression Testing', 'Product Validation Testing', 'Web Services API Testing'],
  sections: [
    { heading: 'System Integration Testing (SIT)', body: 'Verifies that combined components work together coherently as a single integrated system, catching interface-level defects that only appear once pieces are joined.' },
    { heading: 'User Acceptance Testing (UAT)', body: 'Puts functionality and usability in front of real end users to confirm the system matches stated requirements, forming the final checkpoint before real-world deployment.' },
    { heading: 'Regression Testing', body: 'Repeatedly retests the system after every change to guarantee new modifications have not broken existing functionality.' },
    { heading: 'Product Validation Testing (PVT)', body: 'Systematically checks a product against predefined criteria to confirm it operates smoothly and meets its intended purpose.' },
    { heading: 'Web Services API Testing', body: 'Closely examines the operation and performance of APIs to ensure reliable, efficient communication between different software systems.' },
    { heading: 'Why It Pays Off', body: 'Clients choose our functional testing services for the measurable outcomes they deliver.', bullets: ['Improved quality and reliability', 'Reduced downtime', 'Improved efficiency', 'Mitigated risk', 'Faster time to market', 'Improved customer satisfaction'] },
  ],
  stats: [],
};

pageContent['test-automation'] = {
  slug: 'test-automation',
  title: 'Test Automation',
  image: '/images/pages/test-automation.svg',
  intro:
    'Test automation lets software test software with a predefined set of tools and minimal human involvement, running through cases and producing detailed reports on critical outcomes. It has become essential as digital disruption keeps compressing release cycles.',
  highlights: ['Framework Design & Implementation', 'API & RPA Automation', 'Mobile Automation', 'Automation Centre of Excellence', 'Continuous Testing'],
  sections: [
    { heading: 'Automated Testing Services', body: 'A full range of automation services covering every layer of a modern application.', bullets: ['Automation testing consultancy', 'Test automation framework implementation', 'Automated regression testing', 'Automated functional testing', 'Automated API testing', 'Test automation for mobile applications', 'Test automation for web applications', 'CI/CD pipeline implementation'] },
    { heading: 'Framework Expertise', body: 'We match the automation framework style to the project rather than forcing one approach everywhere.', bullets: ['Linear frameworks', 'Data-driven frameworks', 'Keyword-driven frameworks', 'Hybrid frameworks'] },
    { heading: 'Benefits of Automation', body: 'Automation compounds in value the longer a codebase lives.', bullets: ['Faster releases with greater precision', 'Elimination of human error across repeated test iterations', 'Stronger support for digital transformation initiatives', 'Significantly reduced testing effort'] },
    { heading: 'Our Methodology', body: 'A proprietary framework combining industry-standard tools with custom drivers and connectors, automation best practices, and sophisticated reporting — flexible and easy to maintain, letting teams add or remove modules to test applications or APIs across desktop and mobile platforms.', bullets: ['Decision to automate testing', 'Test tool application', 'Test planning, design, and development', 'Execution and management of tests', 'Test program review and assessment'] },
  ],
  stats: [],
};

pageContent['non-functional-testing'] = {
  slug: 'non-functional-testing',
  title: 'Non-Functional Testing',
  image: '/images/pages/non-functional-testing.svg',
  intro:
    'Non-functional testing looks past core functionality to evaluate the qualities that determine how well a system holds up in the real world — performance, scalability, security, and usability among them.',
  highlights: ['Security Testing', 'Performance Testing', 'Usability Testing', 'Compatibility Testing'],
  sections: [
    { heading: 'Security Testing', body: "An evaluative process aimed at pinpointing vulnerabilities and weaknesses across a system's infrastructure, applications, and procedures.", bullets: ['Penetration Testing', 'Vulnerability Assessment', 'Security Code Review'] },
    { heading: 'Performance Testing', body: 'A methodical process that measures the responsiveness, stability, scalability, and overall efficiency of an application under a range of scenarios.', bullets: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Spike Testing', 'Endurance Testing'] },
    { heading: 'Usability Testing', body: 'A structured evaluation focused on how user-friendly and effective a product, application, or system is in practice.' },
    { heading: 'Compatibility Testing', body: 'A structured evaluation that confirms an application interacts smoothly across a wide range of operating systems, browsers, devices, and network environments.' },
    { heading: 'Value Delivered', body: 'What non-functional testing brings to a release beyond bug counts.', bullets: ['Elevated user experience', 'Performance enhancement', 'Reliability and steadfastness', 'Security and compliance', 'Scalability and accessibility', 'Risk mitigation', 'Cost efficiency'] },
  ],
  stats: [],
};

pageContent['performance-testing'] = {
  slug: 'performance-testing',
  title: 'Performance Testing',
  image: '/images/pages/performance-testing.svg',
  intro:
    "Performance testing systematically measures how responsive, fast, stable, and scalable an application is under varying conditions. By simulating different user load levels, we surface bottlenecks and help organizations tune speed, resource usage, and reliability ahead of peak demand.",
  highlights: ['Load Testing', 'Stress Testing', 'Volume Testing', 'Spike Testing', 'Endurance Testing'],
  sections: [
    { heading: 'Our Approach', body: "We evaluate the performance of databases, networks, web servers, and next-generation applications using a client-first, process-based path built around each customer's targets." },
    { heading: 'Our Methods', body: 'The concrete steps we take to validate and tune performance.', bullets: ['Handling the defined load of concurrent users', 'Equipping the architecture with appropriate scalability levels', 'Planning for and carrying out proactive maintenance', 'Optimizing application and database server performance', 'Identifying and resolving bottlenecks'] },
    { heading: 'Value Additions', body: 'What clients gain from a mature performance testing practice.', bullets: ['Identifying bottlenecks', 'Enhancing user experience', 'Scalability assurance', 'Capacity planning', 'Preventing downtime', 'Optimizing resource usage', 'Regulatory compliance', 'Cost savings'] },
  ],
  stats: [],
};

pageContent['security-testing'] = {
  slug: 'security-testing',
  title: 'Security Testing',
  image: '/images/pages/security-testing.svg',
  intro:
    'Our security testing practice uncovers vulnerabilities across applications, infrastructure, and procedural controls before attackers do. We blend automated scanning with hands-on manual assessment, deliver customized reports with remediation guidance, and validate every finding to rule out false positives.',
  highlights: ['Vulnerability Assessment & Penetration Testing', 'Secure Code Review', 'Threat Modeling', 'Compliance Audits'],
  sections: [
    { heading: 'Security Testing Services', body: 'Coverage across every layer of the application and infrastructure surface.', bullets: ['Application/infrastructure security testing — VAPT (black and grey box)', 'Application and infrastructure architecture & design review', 'Configuration audit of servers and devices', 'Test program review and assessment', 'Secure code review (white box)', 'Threat modeling'] },
    { heading: 'Audit Services', body: 'Formal compliance and governance audits layered on top of technical testing.', bullets: ['Information security audit', 'DPA, SOX, FFIEC, GLBA & HIPAA compliance reviews', 'Vendor risk management audit', 'Gap assessment against ISO 27001, PCI DSS, and ITIL standards', 'Data centre audit'] },
    { heading: 'Our Approach', body: 'A hybrid methodology pairing automated scanning with manual testing to uncover both industry-known vulnerabilities and what scanners typically miss — business logic flaws and privilege escalation among them — with every vulnerability verified to eliminate false positives.', bullets: ['Customized reports supporting strategic and tactical decisions', 'Detailed remediation plans to track mitigation', 'Confirmatory retesting to validate closure of prior findings'] },
    { heading: 'Frameworks & Standards We Apply', body: 'Testing is grounded in recognized industry frameworks, not ad-hoc checklists.', bullets: ['DREAD / STRIDE — threat risk modeling', 'OSSTMM — penetration testing metrics', 'OWASP Top 10', 'PCI-DSS', 'WASC-TC — Web Application Security Consortium Threat Classification'] },
  ],
  stats: [],
};

pageContent['sap-testing'] = {
  slug: 'sap-testing',
  title: 'SAP Testing',
  image: '/images/services/sap-testing.svg',
  intro:
    'We deliver dedicated testing services across the core SAP application landscape, covering both S/4HANA and ECC deployments. The practice validates the major functional modules businesses depend on daily — finance, materials, sales, and warehouse operations — while layering in a structured Testing-as-a-Service model that keeps SAP systems reliable, secure, and performant as they evolve.',
  highlights: ['SAP FICO', 'SAP MM', 'SAP SD', 'SAP EWM/WM', 'S/4HANA & ECC'],
  sections: [
    { heading: 'SAP FICO (Finance & Controlling)', body: "SAP FICO sits at the center of the ERP's financial backbone, giving an organization a single, complete record of every financial transaction. Testing ensures the system can reliably produce the financial statements finance teams depend on." },
    { heading: 'SAP MM (Materials Management)', body: 'As one of the most heavily used modules in the SAP ERP suite, MM governs the procurement and inventory activity that keeps day-to-day operations running. Test coverage validates purchasing, stock movement, and inventory processes.' },
    { heading: 'SAP SD (Sales & Distribution)', body: "SD covers the end-to-end commercial cycle: selling, shipping, and billing. Because it integrates tightly with MM and PP, testing confirms not just that SD's own processes work, but that data flows correctly across module boundaries." },
    { heading: 'SAP EWM (Extended Warehouse Management)', body: "EWM manages high-volume warehouse operations and ties complex supply chain logistics into a company's broader distribution processes. Testing verifies operations teams get the visibility and control needed for large-scale logistics activity." },
    { heading: 'Why SAP Testing as a Service Pays Off', body: 'Treating SAP testing as an ongoing managed service, rather than a one-off effort, delivers compounding benefits across quality, risk, and speed.', bullets: ['Improved quality and reliability', 'Reduced downtime', 'Improved efficiency', 'Mitigated risk', 'Faster time to market', 'Improved customer satisfaction'] },
    { heading: 'Key Activities Covered', body: 'The SAP testing practice is built around a structured set of activities that take a release from planning through to performance validation.', bullets: ['Test planning & strategy', 'Test design & execution', 'Test automation', 'Security testing', 'Performance testing under varying load conditions'] },
  ],
  stats: [],
};

pageContent['factoring-solutions'] = {
  slug: 'factoring-solutions',
  title: 'Factoring Solutions',
  image: '/images/pages/factoring-solutions.svg',
  intro:
    "We have formed a strategic partnership with a global leader in factoring software with more than two decades of experience serving the multi-trillion-dollar global factoring market. Through this partnership, we help banking and finance clients implement, customize, and support the platform — bringing deep domain expertise to one of the most operationally complex corners of financial services.",
  highlights: ['ef3', 'efOnline', 'Consulting & Support'],
  sections: [
    { heading: 'ef3 — Core Factoring Platform', body: 'Built to handle the full spectrum of factoring events and transactions, including the most complex cases, at a high standard of quality and accuracy. Offered in basic and premium editions so clients can scale functionality to their needs.', bullets: ['Available as ef3 basic or ef3 premium', 'Integrated subledger accounting', 'Freely definable charts of accounts', 'Full transparency across every process step', 'Maximum automation of factoring workflows', 'Highly secure Oracle database connectivity', 'Robust audit trail with item-level traceability'] },
    { heading: 'efOnline — Client Communication Portal', body: 'The web-based counterpart to ef3, built specifically to streamline communication between the factor and its clients — cutting down friction while giving clients a much more active role in the process.', bullets: ['Removes usual constraints on factor-to-customer communication', 'Gives customers greater, more direct involvement in the process', 'Delivers a best-in-class user experience for customers', 'Supports on-demand, real-time, flexible data exchange'] },
    { heading: 'Consulting & Support', body: "Beyond the platforms themselves, the partnership includes consulting services tailored to each client's specific needs, backed by a dedicated help desk system that ensures inquiries are handled smoothly and consistently." },
    { heading: 'Why This Platform', body: 'Six core strengths of the platform are why clients choose it for factoring transformation.', bullets: ['Stellar transparency', 'Top performance', 'Super smart design', 'Future-ready by design', 'Maximum scalability', 'Reliable migration performance'] },
  ],
  stats: [],
};

pageContent['life-at-socialnetworker'] = {
  slug: 'life-at-socialnetworker',
  title: 'Life at socialnetworker',
  image: '/images/pages/life-at-socialnetworker.svg',
  intro: "Our culture is built around the belief that a modern, high-tech business is won through the strength of its people. We invest in the wellbeing, growth, and work-life balance of every employee through a range of benefits, events, and career opportunities, alongside a lively calendar of team celebrations, sports, and gatherings.",
  highlights: ['Comprehensive health insurance', 'Free medical camps', 'Entertainment & team events', 'Flexible working hours', 'Onsite global opportunities'],
  sections: [
    { heading: 'Insurance', body: 'We prioritize the health and wellbeing of our employees, offering a range of diverse health insurance plans to suit different employee needs.' },
    { heading: 'Free Medical Camp', body: 'In collaboration with multiple medical institutions, we organize free medical camps for employees, giving them convenient access to health checkups and care.' },
    { heading: 'Entertainment', body: 'Regular movie outings, games, "Fun Friday" activities, and sports events keep the workplace lively and give employees a chance to unwind and connect outside of daily work.' },
    { heading: 'Flexible Timing', body: 'We support a strong work-life balance by offering employees flexible working hours tailored to their needs.' },
    { heading: 'Onsite Opportunities', body: 'Employees are given remarkable career exposure through onsite assignments, offering real-world global experience and professional growth.' },
    { heading: 'Company Life & Culture', body: 'Beyond formal benefits, we maintain an active photo and video gallery documenting company life, with content organized into categories such as Company, Celebration, Sports, and Hangouts — reflecting a culture that blends professional achievement with camaraderie and fun.' },
  ],
  stats: [],
};

export const newsPosts = [
  {
    title: 'socialnetworker Announces Strategic Partnership with SmartBear',
    date: '2023-04-12',
    summary: "The company expanded enterprise access to SmartBear's software development tools in India.",
  },
  {
    title: 'The socialnetworker Partnership with EFCOM opens up new opportunities for Asia, the Middle East and North Africa',
    date: '2022-12-12',
    summary: 'EFCOM GmbH partnered with socialnetworker to serve additional regional markets.',
  },
  {
    title: 'socialnetworker announces strategic partnership with Clari5 to help Middle East Banks combat financial crime in real-time',
    date: '2022-08-08',
    summary: 'Partnership with Clari5 aims to provide banking fraud management capabilities.',
  },
  {
    title: 'socialnetworker and Archon Solutions Join Forces to Elevate SAP Implementation and SAP Testing Services',
    date: '2023-12-18',
    summary: 'Partnership to enhance enterprise resource planning implementation capabilities.',
  },
  {
    title: 'LambdaTest Teams Up with socialnetworker to Tackle Testing Challenges',
    date: '2024-03-26',
    summary: 'Alliance aims to provide superior testing capabilities and streamline processes globally.',
  },
];

export const events = [
  {
    title: 'Fintech Revolution Summit',
    location: 'Saudi Arabia',
    description:
      "Highlights Saudi Arabia's emergence as a MENA fintech leader, with emphasis on digital payments, eCommerce, and Vision 2030's Financial Sector Development Program.",
  },
  {
    title: 'Optimise Software Quality with AI: A User-Centric Approach',
    description:
      'Addresses testing gaps where coverage meets requirements yet misses bugs, exploring how testing approaches diverge from actual user behavior in production.',
  },
  {
    title: 'Back to Basics: Test Automation',
    description: 'Focuses on automation testing as crucial for establishing transformation goals in contemporary business settings.',
  },
  {
    title: 'Application Ready for FIFA by socialnetworker Powered by Micro Focus',
    description: "Promotes socialnetworker's World Cup readiness solution developed with technology partner Micro Focus.",
  },
];

pageContent['client-partners'] = {
  slug: 'client-partners',
  title: 'Client & Partners',
  image: '/images/pages/client-partners.svg',
  intro:
    'Over two decades, socialnetworker has partnered with organizations ranging from global banks and technology leaders to fast-growing startups, delivering software that scales across industries.',
  sections: [],
  stats: [],
};

export const clients = [
  { name: 'Dubai Islamic Bank', category: 'Financial Services' },
  { name: 'Trade Bank Iraq', category: 'Financial Services' },
  { name: 'Ajman Bank', category: 'Financial Services' },
  { name: 'NBK', category: 'Financial Services' },
  { name: 'Bank Nizwa', category: 'Financial Services' },
  { name: 'Yes Bank', category: 'Financial Services' },
  { name: 'Kotak', category: 'Financial Services' },
  { name: 'HSBC', category: 'Financial Services' },
  { name: 'Microsoft', category: 'Technology & Communications' },
  { name: 'Oracle', category: 'Technology & Communications' },
  { name: 'IBM', category: 'Technology & Communications' },
  { name: 'Verizon', category: 'Technology & Communications' },
  { name: 'AT&T', category: 'Technology & Communications' },
  { name: 'Rogers', category: 'Technology & Communications' },
  { name: 'Merrill Lynch', category: 'Financial/Trading' },
  { name: 'Blackstone', category: 'Financial/Trading' },
  { name: 'Nasdaq', category: 'Financial/Trading' },
  { name: 'Dow Jones', category: 'Financial/Trading' },
  { name: 'GSK', category: 'Insurance & Healthcare' },
  { name: 'EY', category: 'Insurance & Healthcare' },
  { name: 'Wellpoint', category: 'Insurance & Healthcare' },
  { name: 'Lakme', category: 'Retail & Consumer' },
  { name: 'Reliance', category: 'Retail & Consumer' },
  { name: 'UPS', category: 'Other' },
];

export const partners = [
  'Efcomm',
  'Accelq',
  'BrowserStack',
  'Clari5',
  'Katalon',
  'Micro Focus',
  'NewGen',
  'SmartBear',
  'Qualitia',
  'Techurate',
].map((name) => ({ name }));

export const teamMembers = [
  {
    name: 'Vikram Nair',
    title: 'CEO',
    bio: 'Founder with 20 years in technology leadership, strategy, and product design across North America and India. Multiple startup entrepreneur believing technology can empower people, bring them closer together and change the world for the better.',
    image: '/images/team/vikram-nair.svg',
  },
  {
    name: 'Prakash Satyapalan',
    title: 'Co-Founder & CTO',
    bio: 'Ensures technology teams deliver for clients. Over 20 years in software development, design, data science, and business intelligence. Previous roles at StubHub (eBay), IBM Cognos, and SAS Institute. Holds a Master’s in Computer Science.',
    image: '/images/team/prakash-satyapalan.svg',
  },
  {
    name: 'Mini Balaraman',
    title: 'COO',
    bio: 'Oversees operational aspects ensuring organizational optimization across all company functions. 14 years in US tech roles (Blue Shield of California, Sun Microsystems/Oracle) in software development and business intelligence. Master’s in Computer Applications.',
    image: '/images/team/mini-balaraman.svg',
  },
  {
    name: 'Shalu Niyad',
    title: 'Senior Vice President - Business & Partnership',
    bio: 'Manages services division growth across Canada, Middle East, Australia, and Southeast Asia. Over 20 years in sales and operations, including a decade with Testhouse. Master’s in International Business.',
    image: '/images/team/shalu-niyad.svg',
  },
  {
    name: 'Jishnu Madan Nair',
    title: 'Vice President – Sales (UK & Europe)',
    bio: 'Two decades in IT and digital transformation across UK, Europe, and the Middle East. Specializes in Cloud and Industry 4.0. PRINCE2 Agile® Certified; Electronics & Communication Engineering degree with a Business Management postgraduate diploma.',
    image: '/images/team/jishnu-madan-nair.svg',
  },
];

export const footerData = {
  contact: {
    email: 'sales@socialnetworker.com',
    phones: [
      { country: 'Canada', number: '+1 224 323 6188' },
      { country: 'UAE', number: '+971 50 354 9541' },
      { country: 'India', number: '+91 81 11 990 340' },
    ],
  },
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'Our Work', to: '/our-work' },
    { label: 'Careers', to: '/careers' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ],
  services: [
    { label: 'Mobile + Apps', to: '/services/mobile-apps' },
    { label: 'Quality Engineering', to: '/services/quality-engineering' },
    { label: 'Cloud + Web', to: '/services/cloud-web' },
    { label: 'Design + UI-UX', to: '/services/design-ui-ux' },
    { label: 'AI/ML + BI', to: '/services/ai-ml-bi' },
  ],
  locationLinks: [
    { label: 'Canada | Toronto', to: '/locations/canada' },
    { label: 'India | Trivandrum', to: '/locations/india' },
    { label: 'Singapore | Singapore', to: '/locations/singapore' },
    { label: 'UAE | Dubai', to: '/locations/uae' },
  ],
  social: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' },
    { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
    { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
  ],
  copyright: '© 2025 socialnetworker Technologies Pvt Ltd. All rights reserved.',
  disclaimer:
    'All content on this website is the property of socialnetworker Technologies Pvt Ltd and is protected under applicable copyright laws. Unauthorized use or reproduction of any content is strictly prohibited.',
};
