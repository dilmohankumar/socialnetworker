// All people, companies and quotes below are fictional sample data — replace via the admin API.
export const testimonials = [
  { name: 'Neha Kapoor', role: 'Founder', company: 'UrbanCart', quote: 'They rebuilt our ads and email from the ground up. Revenue is up almost 4x and, more importantly, we finally know which channels are profitable.', rating: 5, order: 1 },
  { name: 'Rohan Desai', role: 'Sales Director', company: 'Skyline Realty', quote: 'Lead quality changed overnight. Our sales team now spends time with genuine buyers instead of chasing portal leads.', rating: 5, order: 2 },
  { name: 'Priya Nair', role: 'VP Marketing', company: 'CloudLedger', quote: 'The SEO and content programme is the best investment we have made. Organic went from a side channel to our biggest source of trials.', rating: 5, order: 3 },
  { name: 'Dr. Ananya Rao', role: 'Director', company: 'CareWell Clinics', quote: 'Professional, transparent and ethical. Appointments are up and our Google ratings have never been better.', rating: 5, order: 4 },
  { name: 'Karthik Menon', role: 'Co-founder', company: 'LearnLoop', quote: 'Reporting is clear and honest. When something does not work, they tell us and fix it — that is rare in this industry.', rating: 5, order: 5 },
];

export const clients = [
  'UrbanCart', 'Skyline Realty', 'CloudLedger', 'CareWell Clinics', 'LearnLoop',
  'Spice Route', 'FitNest', 'Brightpath Schools', 'NovaTech', 'GreenLeaf Organics',
].map((name, i) => ({ name, category: '', order: i + 1 }));

export const team = [
  { name: 'Aarav Mehta', title: 'Founder & Head of Growth', bio: 'Digital marketer for over a decade, having led SEO, paid media and analytics programmes for 150+ brands across ecommerce, SaaS and real estate.', expertise: ['Growth Strategy', 'Paid Media', 'Analytics'], linkedin: 'https://www.linkedin.com/', order: 1 },
  { name: 'Sana Iqbal', title: 'Head of SEO & Content', bio: 'Specialises in technical SEO and topical authority. Previously grew organic traffic 10x for two B2B SaaS companies.', expertise: ['Technical SEO', 'Content Strategy', 'Link Building'], linkedin: 'https://www.linkedin.com/', order: 2 },
  { name: 'Vikram Rao', title: 'Head of Performance Marketing', bio: 'Manages seven-figure ad budgets across Google, Meta and LinkedIn with a relentless focus on profit and payback.', expertise: ['Google Ads', 'Meta Ads', 'CRO'], linkedin: 'https://www.linkedin.com/', order: 3 },
  { name: 'Meera Joseph', title: 'Lifecycle & Analytics Lead', bio: 'Builds email, CRM and measurement systems that connect marketing activity to revenue.', expertise: ['Klaviyo', 'HubSpot', 'GA4'], linkedin: 'https://www.linkedin.com/', order: 4 },
];

export const packages = [
  {
    name: 'Starter',
    price: '$800',
    period: '/ month',
    description: 'For small businesses getting their digital foundation right.',
    features: ['One channel: SEO or paid ads', 'Tracking & analytics setup', 'Monthly strategy call', 'Monthly performance report', 'Email support'],
    popular: false,
    ctaLabel: 'Start with Starter',
    order: 1,
  },
  {
    name: 'Growth',
    price: '$2,200',
    period: '/ month',
    description: 'For brands ready to scale across multiple channels.',
    features: ['SEO + paid media (Google & Meta)', 'Content marketing — 4 articles / month', 'Email automation flows', 'Conversion rate optimisation', 'Bi-weekly strategy calls', 'Live reporting dashboard'],
    popular: true,
    ctaLabel: 'Choose Growth',
    order: 2,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    description: 'Full-funnel partnership for established and enterprise brands.',
    features: ['Dedicated strategist & pod', 'All channels, fully integrated', 'Advanced attribution & BI', 'Creative production', 'Weekly strategy calls', 'Priority support & Slack channel'],
    popular: false,
    ctaLabel: 'Talk to us',
    order: 3,
  },
];

export const faqs = [
  { category: 'general', question: 'What does a digital marketing agency actually do?', answer: 'We plan, run and measure the online channels that bring you customers — search engines, paid ads, social media, email and your website — and tie the results to leads and revenue.', order: 1 },
  { category: 'general', question: 'How much does digital marketing cost?', answer: 'Retainers typically start around $500–$800 per month for a single channel and $2,000+ for multi-channel programmes, plus any ad spend. Our pricing page shows our standard packages, and we tailor proposals to your goals.', order: 2 },
  { category: 'general', question: 'How soon will I see results?', answer: 'Paid ads can produce leads in days. SEO and content usually take 4–6 months to compound. We agree on leading indicators for the first 30, 60 and 90 days.', order: 3 },
  { category: 'general', question: 'Do you sign long contracts?', answer: 'Most engagements start with a 3-month commitment so strategies have time to work, then move month-to-month. There are no hidden fees or lock-ins after that.', order: 4 },
  { category: 'general', question: 'Will I own my accounts and data?', answer: 'Always. Ad accounts, analytics properties, domains and creative assets stay in your name, and we work through admin access.', order: 5 },
  { category: 'general', question: 'Do you work with businesses outside India?', answer: 'Yes. We work with clients across India, the Middle East, the UK, the US and Southeast Asia, with overlapping working hours for calls.', order: 6 },
  { category: 'general', question: 'How do you report on performance?', answer: 'You get a live Looker Studio dashboard plus a monthly report and call. We focus on leads, revenue and return on spend — not vanity metrics.', order: 7 },
  { category: 'general', question: 'What makes you different from other agencies?', answer: 'Senior practitioners do the work, not juniors. We are transparent about what is and is not working, and we only recommend what we would do with our own money.', order: 8 },
];

export const jobs = [
  { title: 'SEO Specialist', department: 'Search', type: 'Full-time', experience: '3–5 years', location: 'Remote (India)', details: 'Own technical and on-page SEO for a portfolio of ecommerce and SaaS clients, from audits to monthly reporting.', skills: ['Technical SEO', 'Ahrefs / Semrush', 'GA4', 'Content briefs'], isOpen: true },
  { title: 'Performance Marketing Manager', department: 'Paid Media', type: 'Full-time', experience: '4–7 years', location: 'Hybrid — Bengaluru', details: 'Plan and optimise Google, Meta and LinkedIn campaigns with budgets of $20k–$200k per month.', skills: ['Google Ads', 'Meta Ads', 'Conversion tracking', 'Client communication'], isOpen: true },
  { title: 'Content Strategist & Writer', department: 'Content', type: 'Full-time', experience: '2–4 years', location: 'Remote (India)', details: 'Research and write long-form content, case studies and email copy for B2B and D2C brands.', skills: ['Long-form writing', 'SEO writing', 'Research', 'Editing'], isOpen: true },
];

export const pages = [
  {
    slug: 'about',
    title: 'About socialnetworker',
    intro:
      'socialnetworker is a digital marketing partner with more than ten years of hands-on experience helping businesses grow online. We combine search, paid media, content, email and analytics into one measurable system — run by senior specialists who care about your revenue, not vanity metrics.',
    highlights: ['10+ years of experience', '250+ brands served', 'Senior-led, no junior hand-offs', 'Transparent monthly reporting'],
    sections: [
      { heading: 'Our story', body: 'We started as a one-person SEO consultancy in 2016, helping local businesses show up on Google. Word of mouth turned into a team of specialists, and a decade later we partner with ecommerce brands, SaaS companies, clinics, developers and institutions across four continents. What has not changed is our approach: understand the business first, measure honestly, and only recommend what we would do with our own money.' },
      { heading: 'What we believe', body: 'Marketing should be accountable. Every rupee or dollar you spend should be traceable to leads, revenue or learning. We favour long-term compounding channels like SEO and email alongside the speed of paid media, and we are upfront when something is not working.', bullets: ['Strategy before tactics', 'Revenue over vanity metrics', 'Radical transparency', 'Continuous testing and learning'] },
      { heading: 'How we work with you', body: 'Every engagement starts with a discovery call and a free audit. We then agree on goals, build a 90-day roadmap, and meet regularly to review results. You get a named strategist, a live reporting dashboard and direct access to the people doing the work.' },
    ],
    stats: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Brands Served', value: '250+' },
      { label: 'Ad Spend Managed', value: '$18M+' },
      { label: 'Client Retention', value: '92%' },
    ],
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    intro: 'This policy explains what information we collect through this website, how we use it, and the choices you have.',
    highlights: [],
    sections: [
      { heading: 'Information we collect', body: 'When you submit our contact or audit form we collect your name, email address and any details you choose to share, such as your phone number, company, website and budget. We also use analytics cookies to understand how visitors use the site.' },
      { heading: 'How we use your information', body: 'We use your details to respond to your enquiry, prepare your audit or proposal, and — only if you agree — to send occasional marketing updates. We do not sell your personal information.' },
      { heading: 'Cookies and analytics', body: 'We use Google Analytics and similar tools to measure traffic and improve our content. You can control cookies through your browser settings or our consent banner.' },
      { heading: 'Data retention and your rights', body: 'We keep enquiry data for as long as needed to respond and maintain our business records. You may request access to, correction of, or deletion of your data at any time by emailing us.' },
      { heading: 'Contact', body: 'For any privacy questions, please use the contact details in the website footer.' },
    ],
    stats: [],
  },
];
