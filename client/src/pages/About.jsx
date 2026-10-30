import { FaLinkedinIn } from 'react-icons/fa';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ContentPage from '../components/common/ContentPage.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { getTeam } from '../services/api.js';

function Team() {
  const query = useApi(getTeam, []);
  return (
    <Async query={query} inline skeleton={<div className="h-64" />}>
      {(team) =>
        team.length > 0 && (
          <section className="bg-gray-50 py-16 md:py-24">
            <Container>
              <SectionHeading eyebrow="The team" heading="Senior specialists, not juniors" subheading="The people you meet in the pitch are the people who do the work." />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((m) => (
                  <div key={m._id} className="rounded-2xl bg-white p-6 shadow-card">
                    {m.image ? (
                      <img src={m.image} alt={m.name} className="mb-4 h-20 w-20 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <span className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy font-display text-3xl font-bold text-white">{m.name[0]}</span>
                    )}
                    <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                    <p className="text-sm font-medium text-brand-purple">{m.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{m.bio}</p>
                    {m.expertise?.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5">
                        {m.expertise.map((e) => (
                          <li key={e} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                            {e}
                          </li>
                        ))}
                      </ul>
                    )}
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.name} on LinkedIn`} className="mt-4 inline-flex text-navy hover:text-brand-orange">
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )
      }
    </Async>
  );
}

function Credentials() {
  const { settings } = useSite();
  if (!settings.tools?.length && !settings.certifications?.length) return null;
  return (
    <section className="py-16 md:py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-5 text-2xl font-bold text-ink">Our marketing stack</h2>
          <ul className="flex flex-wrap gap-2">
            {settings.tools.map((t) => (
              <li key={t} className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700">
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-5 text-2xl font-bold text-ink">Certifications</h2>
          <ul className="space-y-3">
            {settings.certifications.map((c) => (
              <li key={c.name} className="rounded-xl bg-gray-50 px-5 py-3">
                <span className="font-semibold text-ink">{c.name}</span>
                <span className="ml-2 text-sm text-gray-500">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function About() {
  const { settings } = useSite();
  return (
    <ContentPage
      slug="about"
      after={
        <>
          <Team />
          <Credentials />
          <CtaBand cta={settings.cta} />
        </>
      }
    />
  );
}

export default About;
