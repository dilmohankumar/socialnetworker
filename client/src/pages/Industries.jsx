import { Link } from 'react-router-dom';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import Icon from '../components/common/Icon.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

function Industries() {
  const { settings, industries } = useSite();
  const copy = settings.sectionCopy.industries;
  usePageMeta(`Industries We Serve | ${settings.brand.name}`, copy?.subheading);
  return (
    <>
      <PageHero eyebrow={copy?.eyebrow} title={copy?.heading} subtitle={copy?.subheading} />
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <Link key={i.slug} to={`/industries/${i.slug}`} className="group rounded-2xl border border-gray-100 p-7 shadow-card transition-all hover:-translate-y-1">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-xl text-brand-orange">
                  <Icon name={i.icon} />
                </span>
                <h2 className="text-xl font-bold text-ink group-hover:text-brand-orange">{i.title}</h2>
                <p className="mt-2 text-gray-600">{i.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand cta={settings.cta} />
    </>
  );
}

export default Industries;
