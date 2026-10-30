import { useParams } from 'react-router-dom';
import { HiExclamationCircle } from 'react-icons/hi';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { ServiceCard } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getIndustry } from '../services/api.js';

function Detail({ industry }) {
  const { settings, services } = useSite();
  const related = services.filter((s) => industry.serviceSlugs?.includes(s.slug));
  usePageMeta(`${industry.title} Digital Marketing | ${settings.brand.name}`, industry.summary);

  return (
    <>
      <PageHero eyebrow="Industry" title={`Digital marketing for ${industry.title}`} subtitle={industry.summary} />

      <section className="py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-gray-700">{industry.description}</p>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h2 className="mb-5 text-xl font-bold text-ink">Challenges we solve</h2>
            <ul className="space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 text-gray-700">
                  <HiExclamationCircle className="mt-0.5 flex-shrink-0 text-xl text-brand-orange" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <Container>
          <SectionHeading eyebrow="Our approach" heading="Strategies that work in this market" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {industry.strategies.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-white p-7 shadow-card">
                <span className="font-display text-4xl font-extrabold text-brand-orange/30">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Recommended services" heading="Where we'd start" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand cta={settings.cta} />
    </>
  );
}

function IndustryDetail() {
  const { slug } = useParams();
  const query = useApi(() => getIndustry(slug), [slug]);
  return <Async query={query}>{(industry) => <Detail industry={industry} />}</Async>;
}

export default IndustryDetail;
