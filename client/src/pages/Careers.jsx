import { useEffect, useState } from 'react';
import {
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlinePlusCircle,
  HiOutlineEmojiHappy,
  HiOutlineClock,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
} from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import { getPageContent, getJobPostings } from '../services/api.js';

const SECTION_ICONS = {
  Insurance: HiOutlineHeart,
  'Free Medical Camp': HiOutlinePlusCircle,
  Entertainment: HiOutlineEmojiHappy,
  'Flexible Timing': HiOutlineClock,
  'Onsite Opportunities': HiOutlineGlobeAlt,
};

function Careers() {
  const [page, setPage] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    Promise.all([getPageContent('careers'), getJobPostings()])
      .then(([pageData, jobData]) => {
        if (cancelled) return;
        setPage(pageData);
        setJobs(jobData || []);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === 'loading') {
    return (
      <Container className="py-24">
        <div className="animate-pulse space-y-4">
          <div className="h-10 w-1/3 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
        </div>
      </Container>
    );
  }

  if (status === 'error') {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg text-gray-600">Something went wrong loading careers. Please try again shortly.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {page?.title || 'Be a Part of Something Bigger'}
        </h1>
        {page?.image && (
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
        {page?.intro && <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">{page.intro}</p>}

        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-ink">
          <HiOutlineBriefcase className="h-6 w-6 text-brand-orange" aria-hidden="true" />
          Open Positions
        </h2>
        {jobs.length === 0 ? (
          <p className="mb-12 text-gray-600">Looking for opportunities...</p>
        ) : (
          <div className="mb-12 space-y-4">
            {jobs.map((job) => (
              <div key={job.title} className="rounded-xl bg-gray-50 p-6 shadow-card">
                <h3 className="text-lg font-semibold text-ink">{job.title}</h3>
                <p className="text-sm text-gray-600">
                  {job.experience} {job.location && `· ${job.location}`}
                </p>
                {job.details && <p className="mt-2 text-sm text-gray-700">{job.details}</p>}
              </div>
            ))}
          </div>
        )}

        {page?.sections?.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {page.sections.map((section) => {
              const Icon = SECTION_ICONS[section.heading] || HiOutlineSparkles;
              return (
                <div key={section.heading} className="rounded-xl bg-gray-50 p-6 shadow-card">
                  <div className="mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-ink">{section.heading}</h3>
                  </div>
                  <p className="leading-relaxed text-gray-700">{section.body}</p>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

export default Careers;
