import { useEffect, useState } from 'react';
import Container from '../components/common/Container.jsx';
import { getPageContent, getWorkProjects } from '../services/api.js';

function OurWork() {
  const [page, setPage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    Promise.all([getPageContent('our-work'), getWorkProjects()])
      .then(([pageData, projectData]) => {
        if (cancelled) return;
        setPage(pageData);
        setProjects(projectData || []);
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
        <p className="text-lg text-gray-600">Something went wrong loading case studies. Please try again shortly.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{page?.title || 'Case Studies'}</h1>
        {page?.intro && <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">{page.intro}</p>}

        {projects.length === 0 ? (
          <p className="text-gray-600">Case studies are coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="overflow-hidden rounded-xl bg-gray-50 shadow-card">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.industry}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <div className="p-6">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">{project.industry}</p>
                <h2 className="mb-2 text-lg font-semibold text-ink">{project.title}</h2>
                <p className="mb-4 text-sm text-gray-700">{project.description}</p>
                {project.technologies?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default OurWork;
