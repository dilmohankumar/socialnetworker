import { useMemo, useState } from 'react';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import { BlogCard } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getBlogPosts } from '../services/api.js';

function Posts({ posts }) {
  const [category, setCategory] = useState('All');
  const categories = useMemo(() => [...new Set(posts.map((p) => p.category))], [posts]);
  const shown = category === 'All' ? posts : posts.filter((p) => p.category === category);
  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {['All', ...categories].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              category === c ? 'border-brand-orange bg-brand-orange text-white' : 'border-gray-300 text-gray-700 hover:border-brand-orange hover:text-brand-orange'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
    </>
  );
}

function Blog() {
  const { settings } = useSite();
  const copy = settings.sectionCopy.blog;
  const query = useApi(() => getBlogPosts({ limit: 100 }), []);
  usePageMeta(`Digital Marketing Blog | ${settings.brand.name}`, copy?.subheading);

  return (
    <>
      <PageHero eyebrow={copy?.eyebrow} title={copy?.heading} subtitle={copy?.subheading} />
      <section className="py-16 md:py-24">
        <Container>
          <Async query={query} inline>
            {(posts) => (posts.length ? <Posts posts={posts} /> : <p className="text-gray-600">No articles yet — check back soon.</p>)}
          </Async>
        </Container>
      </section>
      <CtaBand cta={settings.cta} />
    </>
  );
}

export default Blog;
