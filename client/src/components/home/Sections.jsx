import { Link } from 'react-router-dom';
import { HiCheck, HiStar } from 'react-icons/hi';
import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import Icon from '../common/Icon.jsx';
import Faq from '../common/Faq.jsx';
import LeadForm from '../common/LeadForm.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import { ServiceCard, CaseStudyCard, BlogCard } from '../common/Cards.jsx';

export function ClientsStrip({ clients, copy }) {
  if (!clients?.length) return null;
  return (
    <section className="border-b border-gray-100 bg-white py-10">
      <Container>
        {copy?.text && <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">{copy.text}</p>}
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((c) => (
            <li key={c._id} className="text-lg font-bold tracking-tight text-gray-400 transition-colors hover:text-navy">
              {c.logo ? <img src={c.logo} alt={c.name} className="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0" loading="lazy" /> : c.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function StatsBand({ stats }) {
  if (!stats?.length) return null;
  return (
    <section className="bg-navy py-14 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl font-extrabold text-brand-orange sm:text-5xl">{s.value}</dd>
              <dt className="mt-2 text-sm text-white/75">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export function ServicesSection({ services, copy }) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading {...copy} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProcessSection({ process }) {
  if (!process?.steps?.length) return null;
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={process.eyebrow} heading={process.heading} subheading={process.subheading} align="center" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {process.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl bg-white p-6 shadow-card">
              <span className="absolute right-5 top-4 font-display text-5xl font-extrabold text-gray-100">{i + 1}</span>
              <span className="relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 text-lg text-brand-purple">
                <Icon name={step.icon} />
              </span>
              <h3 className="relative text-lg font-bold text-ink">{step.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export function CaseStudiesSection({ caseStudies, copy }) {
  if (!caseStudies?.length) return null;
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading {...copy} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/case-studies" variant="secondary" withArrow>
            View all case studies
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function IndustriesSection({ industries, copy }) {
  if (!industries?.length) return null;
  return (
    <section className="bg-navy py-16 text-white md:py-24">
      <Container>
        <SectionHeading {...copy} light />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} to={`/industries/${i.slug}`} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-orange/60 hover:bg-white/10">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white">
                <Icon name={i.icon} />
              </span>
              <span>
                <span className="block text-lg font-bold">{i.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-white/70">{i.summary}</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TestimonialsSection({ testimonials, copy }) {
  if (!testimonials?.length) return null;
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <SectionHeading {...copy} align="center" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t._id} className="flex flex-col rounded-2xl bg-white p-7 shadow-card">
              <div className="mb-4 flex gap-1 text-brand-orange" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <HiStar key={i} className="text-xl" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-bold text-white">{t.name[0]}</span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-gray-500">
                    {[t.role, t.company].filter(Boolean).join(', ')}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function PackageCards({ packages }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {packages.map((p) => (
        <div key={p._id} className={`relative flex flex-col rounded-2xl border bg-white p-8 ${p.popular ? 'border-brand-orange shadow-dropdown' : 'border-gray-200 shadow-card'}`}>
          {p.popular && <span className="absolute -top-3 left-8 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">Most popular</span>}
          <h3 className="text-xl font-bold text-ink">{p.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{p.description}</p>
          <p className="mt-6">
            <span className="font-display text-4xl font-extrabold text-ink">{p.price}</span>
            <span className="ml-1 text-sm text-gray-500">{p.period}</span>
          </p>
          <ul className="my-6 flex-1 space-y-3">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                <HiCheck className="mt-0.5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <Button to="/contact" variant={p.popular ? 'primary' : 'secondary'} className="justify-center">
            {p.ctaLabel}
          </Button>
        </div>
      ))}
    </div>
  );
}

export function PricingSection({ packages, copy }) {
  if (!packages?.length) return null;
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading {...copy} align="center" />
        <PackageCards packages={packages} />
      </Container>
    </section>
  );
}

export function BlogSection({ posts, copy }) {
  if (!posts?.length) return null;
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <SectionHeading {...copy} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/blog" variant="secondary" withArrow>
            Read all articles
          </Button>
        </div>
      </Container>
    </section>
  );
}

export function FaqSection({ faqs, copy }) {
  if (!faqs?.length) return null;
  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-4xl">
        <SectionHeading {...copy} align="center" />
        <Faq items={faqs} />
      </Container>
    </section>
  );
}

export function CtaBand({ cta }) {
  return (
    <section className="bg-hero-gradient py-16 text-white md:py-24" id="audit">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">{cta.heading}</h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">{cta.text}</p>
        </div>
        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur sm:p-8">
          <LeadForm source="audit" buttonLabel={cta.buttonLabel} dark />
        </div>
      </Container>
    </section>
  );
}
