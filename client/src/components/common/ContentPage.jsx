import { useEffect, useState } from 'react';
import {
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import Container from './Container.jsx';
import { getPageContent } from '../../services/api.js';

// Cycled by index rather than matched by heading text — section headings vary
// too widely across the ~20 pages that share this component for a keyword map
// to stay accurate, so a fixed rotation keeps every page visually consistent.
const SECTION_ICONS = [
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineLightningBolt,
  HiOutlineUserGroup,
];

/**
 * Generic renderer for slug-driven prose pages (About/Company Overview,
 * Client & Partners, Life at socialnetworker, SAP Testing, etc.) backed by the
 * PageContent model. Handles loading/error/empty states so individual
 * page files only need to supply a slug.
 */
function ContentPage({ slug }) {
  const [page, setPage] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    setStatus('loading');
    getPageContent(slug)
      .then((data) => {
        if (cancelled) return;
        if (!data) {
          setStatus('empty');
          return;
        }
        setPage(data);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === 'loading') {
    return (
      <Container className="py-24">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-2/3 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-5/6 rounded bg-gray-200" />
        </div>
      </Container>
    );
  }

  if (status === 'error') {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg text-gray-600">
          Something went wrong loading this page. Please try again shortly.
        </p>
      </Container>
    );
  }

  if (status === 'empty' || !page) {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg text-gray-600">This page's content is coming soon.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{page.title}</h1>

        {page.image && (
          <div className="mb-10 overflow-hidden rounded-xl shadow-card">
            <img
              src={page.image}
              alt={page.title}
              loading="lazy"
              className="h-full max-h-96 w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}

        {page.intro && <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">{page.intro}</p>}

        {page.highlights?.length > 0 && (
          <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {page.highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 shadow-card">
                <HiOutlineCheckCircle className="h-5 w-5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        )}

        {page.stats?.length > 0 && (
          <div className="mb-12 grid grid-cols-2 gap-6 rounded-xl bg-gray-50 p-8 sm:grid-cols-4">
            {page.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-ink">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {page.sections?.length > 0 && (
          <div className="space-y-10">
            {page.sections.map((section, i) => {
              const Icon = SECTION_ICONS[i % SECTION_ICONS.length];
              return (
                <div key={section.heading}>
                  <h2 className="mb-3 flex items-center gap-2 text-2xl font-semibold text-ink">
                    <Icon className="h-6 w-6 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed text-gray-700">{section.body}</p>
                  {section.bullets?.length > 0 && (
                    <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-gray-700">
                          <HiOutlineCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ContentPage;
