import { HiCheckCircle } from 'react-icons/hi';
import Async from './Async.jsx';
import Container from './Container.jsx';
import PageHero from './PageHero.jsx';
import { useApi } from '../../hooks/useApi.js';
import { usePageMeta } from '../../hooks/usePageMeta.js';
import { getPage } from '../../services/api.js';

function Page({ page, after }) {
  usePageMeta(page.title, page.intro);
  return (
    <>
      <PageHero title={page.title} subtitle={page.intro} />
      <section className="py-16 md:py-20">
        <Container className="max-w-5xl">
          {page.highlights?.length > 0 && (
            <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 shadow-card">
                  <HiCheckCircle className="h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
          )}

          {page.stats?.length > 0 && (
            <dl className="mb-12 grid grid-cols-2 gap-6 rounded-xl bg-navy p-8 sm:grid-cols-4">
              {page.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="font-display text-3xl font-extrabold text-brand-orange">{stat.value}</dd>
                  <dt className="mt-1 text-sm text-white/75">{stat.label}</dt>
                </div>
              ))}
            </dl>
          )}

          <div className="space-y-10">
            {page.sections?.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-2xl font-bold text-ink">{section.heading}</h2>
                <p className="text-lg leading-relaxed text-gray-700">{section.body}</p>
                {section.bullets?.length > 0 && (
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-gray-700">
                        <HiCheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
      {after}
    </>
  );
}

/** Generic renderer for prose pages stored in the PageContent collection, keyed by slug. */
function ContentPage({ slug, after }) {
  const query = useApi(() => getPage(slug), [slug]);
  return <Async query={query}>{(page) => <Page page={page} after={after} />}</Async>;
}

export default ContentPage;
