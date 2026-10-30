import { useMemo, useState } from 'react';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { CaseStudyCard } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getCaseStudies } from '../services/api.js';

function FilterChips({ options, value, onChange }) {
  return (
    <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter">
      {['All', ...options].map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
            value === o ? 'border-brand-orange bg-brand-orange text-white' : 'border-gray-300 text-gray-700 hover:border-brand-orange hover:text-brand-orange'
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function CaseStudies() {
  const { settings } = useSite();
  const copy = settings.sectionCopy.caseStudies;
  const query = useApi(() => getCaseStudies(), []);
  const [filter, setFilter] = useState('All');
  usePageMeta(`Case Studies | ${settings.brand.name}`, copy?.subheading);

  return (
    <>
      <PageHero eyebrow={copy?.eyebrow} title={copy?.heading} subtitle={copy?.subheading} />
      <section className="py-16 md:py-24">
        <Container>
          <Async query={query} inline>
            {(studies) => (
              <Filtered studies={studies} filter={filter} setFilter={setFilter} />
            )}
          </Async>
        </Container>
      </section>
      <CtaBand cta={settings.cta} />
    </>
  );
}

function Filtered({ studies, filter, setFilter }) {
  const industries = useMemo(() => [...new Set(studies.map((s) => s.industry))], [studies]);
  const shown = filter === 'All' ? studies : studies.filter((s) => s.industry === filter);
  return (
    <>
      <FilterChips options={industries} value={filter} onChange={setFilter} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((s) => (
          <CaseStudyCard key={s.slug} study={s} />
        ))}
      </div>
    </>
  );
}

export default CaseStudies;
