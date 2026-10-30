import Async from '../components/common/Async.jsx';
import Hero from '../components/home/Hero.jsx';
import {
  ClientsStrip, StatsBand, ServicesSection, ProcessSection, CaseStudiesSection, IndustriesSection,
  TestimonialsSection, PricingSection, BlogSection, FaqSection, CtaBand,
} from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getHome } from '../services/api.js';

function Home() {
  const { settings } = useSite();
  const query = useApi(getHome, []);
  const copy = settings.sectionCopy;
  usePageMeta(settings.seo.title, settings.seo.description);

  return (
    <>
      <Hero hero={settings.hero} />
      <Async query={query} inline skeleton={<div className="h-96" />}>
        {(home) => (
          <>
            <ClientsStrip clients={home.clients} copy={copy.clients} />
            <StatsBand stats={settings.stats} />
            <ServicesSection services={home.services} copy={copy.services} />
            <ProcessSection process={settings.process} />
            <CaseStudiesSection caseStudies={home.caseStudies} copy={copy.caseStudies} />
            <IndustriesSection industries={home.industries} copy={copy.industries} />
            <TestimonialsSection testimonials={home.testimonials} copy={copy.testimonials} />
            <PricingSection packages={home.packages} copy={copy.pricing} />
            <BlogSection posts={home.posts} copy={copy.blog} />
            <FaqSection faqs={home.faqs} copy={copy.faq} />
          </>
        )}
      </Async>
      <CtaBand cta={settings.cta} />
    </>
  );
}

export default Home;
