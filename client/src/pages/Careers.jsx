import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getJobs } from '../services/api.js';

function Careers() {
  const { settings } = useSite();
  const jobs = useApi(getJobs, []);
  usePageMeta(`Careers | ${settings.brand.name}`, `Join the ${settings.brand.name} team.`);

  return (
    <>
      <PageHero eyebrow="Careers" title="Build your marketing career with us" subtitle="We hire curious, data-minded people and give them real ownership from week one." />
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <Async query={jobs} inline>
            {(items) =>
              items.length === 0 ? (
                <div className="rounded-2xl bg-gray-50 p-10 text-center">
                  <p className="text-lg text-gray-700">No open roles right now — but we&apos;re always happy to hear from great people.</p>
                  <a href={`mailto:${settings.contact.email}`} className="mt-4 inline-block font-semibold text-brand-purple hover:underline">
                    {settings.contact.email}
                  </a>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((job) => (
                    <li key={job._id} className="rounded-2xl border border-gray-100 p-7 shadow-card">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <h2 className="text-xl font-bold text-ink">{job.title}</h2>
                          <p className="mt-1 text-sm text-gray-500">
                            {[job.department, job.type, job.experience, job.location].filter(Boolean).join(' · ')}
                          </p>
                        </div>
                        <a
                          href={`mailto:${settings.contact.email}?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                          className="rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orangeDark"
                        >
                          Apply now
                        </a>
                      </div>
                      {job.details && <p className="mt-4 leading-relaxed text-gray-700">{job.details}</p>}
                      {job.skills?.length > 0 && (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {job.skills.map((s) => (
                            <li key={s} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                              {s}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )
            }
          </Async>
        </Container>
      </section>
    </>
  );
}

export default Careers;
