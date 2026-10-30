import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { ServiceCard } from '../components/common/Cards.jsx';
import { CtaBand, FaqSection } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getFaqs } from '../services/api.js';

function Services() {
  const { settings, services } = useSite();
  const faqs = useApi(() => getFaqs({ category: 'general' }), []);
  usePageMeta(`Digital Marketing Services | ${settings.brand.name}`, settings.sectionCopy.services?.subheading);

  return (
    <>
      <PageHero eyebrow="Services" title={settings.sectionCopy.services?.heading} subtitle={settings.sectionCopy.services?.subheading} />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Container>
      </section>
      <Async query={faqs} inline skeleton={<div className="h-40" />}>
        {(items) => <FaqSection faqs={items} copy={settings.sectionCopy.faq} />}
      </Async>
      <CtaBand cta={settings.cta} />
    </>
  );
}

export default Services;
