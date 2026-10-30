import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Icon from './Icon.jsx';

export function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/40"
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-xl text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon name={service.icon} />
      </span>
      <h3 className="text-xl font-bold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{service.shortDescription}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
        Learn more <HiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}

export function CaseStudyCard({ study }) {
  const headline = study.results?.[0];
  return (
    <Link
      to={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card transition-all duration-200 hover:-translate-y-1"
    >
      <div className="p-7 text-white" style={{ background: `linear-gradient(135deg, ${study.accent || '#0E0147'}, #080028)` }}>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{study.industry}</p>
        {headline && (
          <>
            <p className="mt-4 font-display text-5xl font-extrabold leading-none">{headline.value}</p>
            <p className="mt-2 text-sm text-white/85">{headline.label}</p>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-lg font-bold leading-snug text-ink">{study.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{study.summary}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
          Read case study <HiArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export function BlogCard({ post }) {
  const date = new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-7 shadow-card transition-all duration-200 hover:-translate-y-1"
    >
      <span className="w-fit rounded-full bg-brand-purple/10 px-3 py-1 text-xs font-semibold text-brand-purple">{post.category}</span>
      <h3 className="mt-4 text-lg font-bold leading-snug text-ink group-hover:text-brand-orange">{post.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
      <p className="mt-5 text-xs text-gray-500">
        {date} · {post.readTime} min read
      </p>
    </Link>
  );
}

export function ResultStats({ results, dark = false }) {
  if (!results?.length) return null;
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {results.map((r) => (
        <div key={r.label} className={`rounded-xl p-6 text-center ${dark ? 'bg-white/10' : 'bg-gray-50'}`}>
          <div className={`font-display text-4xl font-extrabold ${dark ? 'text-white' : 'text-brand-orange'}`}>{r.value}</div>
          <div className={`mt-2 text-sm ${dark ? 'text-white/75' : 'text-gray-600'}`}>{r.label}</div>
        </div>
      ))}
    </div>
  );
}
