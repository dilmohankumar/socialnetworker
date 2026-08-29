import { useEffect, useState } from 'react';
import { HiOutlineNewspaper } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import { getNewsPosts } from '../services/api.js';

function formatDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime())
    ? value
    : d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function News() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    getNewsPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data || []);
          setStatus('ready');
        }
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
        <p className="text-lg text-gray-600">Something went wrong loading news. Please try again shortly.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-ink sm:text-5xl">News</h1>

        <div className="mb-10 overflow-hidden rounded-xl shadow-card">
          <img
            src="/images/pages/news.svg"
            alt="News"
            loading="lazy"
            className="h-full max-h-96 w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-600">No news posts yet.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.title} className="flex gap-4 rounded-xl bg-gray-50 p-6 shadow-card">
                <HiOutlineNewspaper className="mt-1 h-6 w-6 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                <div>
                  <p className="mb-1 text-sm font-medium text-brand-orange">{formatDate(post.date)}</p>
                  <h2 className="mb-2 text-xl font-semibold text-ink">{post.title}</h2>
                  <p className="text-gray-700">{post.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default News;
