import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { PackageCards, CtaBand, FaqSection } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getPackages, getFaqs } from '../services/api.js';

function Pricing() {
  const { settings } = useSite();
  const copy = settings.sectionCopy.pricing;
  const packages = useApi(getPackages, []);
  const faqs = useApi(() => getFaqs({ category: 'general' }), []);
  usePageMeta(`Pricing | ${settings.brand.name}`, copy?.subheading);

  return (
    <>
      <PageHero eyebrow={copy?.eyebrow} title={copy?.heading} subtitle={copy?.subheading} />
      <section className="py-16 md:py-24">
        <Container>
          <Async query={packages} inline>
            {(items) => <PackageCards packages={items} />}
          </Async>
        </Container>
      </section>
      <Async query={faqs} inline skeleton={<div className="h-40" />}>
        {(items) => <FaqSection faqs={items} copy={settings.sectionCopy.faq} />}
      </Async>
      <CtaBand cta={settings.cta} />
    </>
  );
}

export default Pricing;
