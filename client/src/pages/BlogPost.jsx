import { Link, useParams } from 'react-router-dom';
import Async from '../components/common/Async.jsx';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import { BlogCard } from '../components/common/Cards.jsx';
import { CtaBand } from '../components/home/Sections.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { useApi } from '../hooks/useApi.js';
import { usePageMeta } from '../hooks/usePageMeta.js';
import { getBlogPost, getBlogPosts } from '../services/api.js';

/** Renders typed content blocks as plain React elements (no raw HTML injection). */
function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="mb-3 mt-10 text-2xl font-bold text-ink">{block.text}</h2>;
    case 'h3':
      return <h3 className="mb-2 mt-8 text-xl font-bold text-ink">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="my-4 list-disc space-y-2 pl-6 text-lg text-gray-700">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol className="my-4 list-decimal space-y-2 pl-6 text-lg text-gray-700">
          {block.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      );
    case 'quote':
      return <blockquote className="my-8 border-l-4 border-brand-orange pl-6 text-xl font-medium italic text-ink">{block.text}</blockquote>;
    default:
      return <p className="my-4 text-lg leading-relaxed text-gray-700">{block.text}</p>;
  }
}

function Detail({ post }) {
  const { settings } = useSite();
  const related = useApi(() => getBlogPosts({ category: post.category, limit: 4 }), [post.category]);
  const date = new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  usePageMeta(`${post.title} | ${settings.brand.name}`, post.excerpt);

  return (
    <>
      <PageHero eyebrow={post.category} title={post.title}>
        <p className="text-sm text-white/70">
          {[post.author, post.authorRole].filter(Boolean).join(' · ')} · {date} · {post.readTime} min read
        </p>
      </PageHero>

      <article className="py-12 md:py-16">
        <Container className="max-w-3xl">
          <p className="text-xl leading-relaxed text-gray-600">{post.excerpt}</p>
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
          {post.tags?.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <li key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  #{t}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-8">
            <Link to="/blog" className="text-sm font-semibold text-brand-purple hover:underline">
              ← Back to all articles
            </Link>
          </p>
        </Container>
      </article>

      <Async query={related} inline skeleton={null}>
        {(posts) => {
          const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
          return (
            others.length > 0 && (
              <section className="bg-gray-50 py-16">
                <Container>
                  <SectionHeading heading="Keep reading" />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {others.map((p) => (
                      <BlogCard key={p.slug} post={p} />
                    ))}
                  </div>
                </Container>
              </section>
            )
          );
        }}
      </Async>

      <CtaBand cta={settings.cta} />
    </>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const query = useApi(() => getBlogPost(slug), [slug]);
  return <Async query={query}>{(post) => <Detail post={post} />}</Async>;
}

export default BlogPost;
