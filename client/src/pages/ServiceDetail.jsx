import { useParams } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import Faq from '../components/common/Faq.jsx';
import { CaseStudyCard, ResultStats } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getService, getCaseStudies } from '../services/api.js';

function Detail({ service }) {
  const { settings } = useSite();
  const related = useApi(() => getCaseStudies({ service: service.slug, limit: 3 }), [service.slug]);
  usePageMeta(`${service.title} | ${settings.brand.name}`, service.shortDescription);

  return (
    <>
      <PageHero eyebrow="Service" title={service.title} subtitle={service.tagline}>
        <div className="flex flex-wrap items-center gap-4">
          <Button to="/contact?type=audit">Get a free audit</Button>
          {service.startingPrice && <span className="text-sm text-white/70">Starting at {service.startingPrice}</span>}
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-ink">Overview</h2>
            <p className="text-lg leading-relaxed text-gray-700">{service.overview}</p>
          </div>
          <div className="rounded-2xl bg-gray-50 p-8">
            <h3 className="mb-5 text-xl font-bold text-ink">What you get</h3>
            <ul className="space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <HiCheckCircle className="mt-0.5 flex-shrink-0 text-xl text-brand-orange" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {service.results?.length > 0 && (
        <section className="bg-navy py-14">
          <Container>
            <ResultStats results={service.results} dark />
          </Container>
        </section>
      )}

      {service.deliverables?.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Deliverables" heading="What's included" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {service.deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl border border-gray-100 p-7 shadow-card">
                  <h3 className="text-lg font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-600">{d.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {service.process?.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Our process" heading={`How we deliver ${service.title}`} />
            <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {service.process.map((step, i) => (
                <li key={step.title} className="rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange font-bold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
                </li>
              ))}
            </ol>
            {service.tools?.length > 0 && (
              <div className="mt-12">
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">Tools we use</p>
                <ul className="flex flex-wrap gap-2">
                  {service.tools.map((t) => (
                    <li key={t} className="rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm text-gray-700">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      )}

      <Async query={related} inline skeleton={null}>
        {(studies) =>
          studies.length > 0 && (
            <section className="py-16 md:py-24">
              <Container>
                <SectionHeading eyebrow="Proof" heading={`${service.title} in action`} />
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {studies.map((s) => (
                    <CaseStudyCard key={s.slug} study={s} />
                  ))}
                </div>
              </Container>
            </section>
          )
        }
      </Async>

      {service.faqs?.length > 0 && (
        <section className="bg-gray-50 py-16 md:py-24">
          <Container className="max-w-4xl">
            <SectionHeading eyebrow="FAQ" heading={`${service.title}: common questions`} align="center" />
            <Faq items={service.faqs} />
          </Container>
        </section>
      )}

      <CtaBand cta={settings.cta} />
    </>
  );
}

function ServiceDetail() {
  const { slug } = useParams();
  const query = useApi(() => getService(slug), [slug]);
  return <Async query={query}>{(service) => <Detail service={service} />}</Async>;
}

export default ServiceDetail;
