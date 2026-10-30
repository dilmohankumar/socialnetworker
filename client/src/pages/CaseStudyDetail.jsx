import { Link, useParams } from 'react-router-dom';
import { HiCheckCircle } from 'react-icons/hi';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { ResultStats } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getCaseStudy } from '../services/api.js';

function Detail({ study }) {
  const { settings, services } = useSite();
  const used = services.filter((s) => study.serviceSlugs?.includes(s.slug));
  usePageMeta(`${study.title} | ${settings.brand.name}`, study.summary);

  return (
    <>
      <PageHero eyebrow={`Case study · ${study.industry}`} title={study.title} subtitle={study.summary} />

      <section className="py-14">
        <Container>
          <ResultStats results={study.results} />
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-sm">
            <div>
              <dt className="text-gray-500">Client</dt>
              <dd className="font-semibold text-ink">{study.client}</dd>
            </div>
            {study.duration && (
              <div>
                <dt className="text-gray-500">Duration</dt>
                <dd className="font-semibold text-ink">{study.duration}</dd>
              </div>
            )}
            {used.length > 0 && (
              <div>
                <dt className="text-gray-500">Services</dt>
                <dd className="font-semibold">
                  {used.map((s, i) => (
                    <span key={s.slug}>
                      {i > 0 && ', '}
                      <Link to={`/services/${s.slug}`} className="text-brand-purple hover:underline">
                        {s.title}
                      </Link>
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </Container>
      </section>

      <section className="pb-16">
        <Container className="grid max-w-5xl grid-cols-1 gap-12">
          {study.challenge && (
            <div>
              <h2 className="mb-3 text-2xl font-bold text-ink">The challenge</h2>
              <p className="text-lg leading-relaxed text-gray-700">{study.challenge}</p>
            </div>
          )}
          {study.solution && (
            <div>
              <h2 className="mb-3 text-2xl font-bold text-ink">Our solution</h2>
              <p className="text-lg leading-relaxed text-gray-700">{study.solution}</p>
            </div>
          )}
          {study.actions?.length > 0 && (
            <div className="rounded-2xl bg-gray-50 p-8">
              <h2 className="mb-4 text-xl font-bold text-ink">What we did</h2>
              <ul className="space-y-3">
                {study.actions.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="mt-0.5 flex-shrink-0 text-xl text-brand-orange" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {study.quote?.text && (
            <figure className="rounded-2xl bg-navy p-8 text-white">
              <blockquote className="text-xl leading-relaxed">“{study.quote.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">
                {study.quote.author}, {study.quote.role}
              </figcaption>
            </figure>
          )}
        </Container>
      </section>

      <CtaBand cta={settings.cta} />
    </>
  );
}

function CaseStudyDetail() {
  const { slug } = useParams();
  const query = useApi(() => getCaseStudy(slug), [slug]);
  return <Async query={query}>{(study) => <Detail study={study} />}</Async>;
}

export default CaseStudyDetail;
