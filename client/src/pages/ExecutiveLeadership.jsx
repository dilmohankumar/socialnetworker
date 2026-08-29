import { useEffect, useState } from 'react';
import Container from '../components/common/Container.jsx';
import { getPageContent, getTeamMembers } from '../services/api.js';

function ExecutiveLeadership() {
  const [page, setPage] = useState(null);
  const [members, setMembers] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    Promise.all([getPageContent('executive-leadership'), getTeamMembers()])
      .then(([pageData, memberData]) => {
        if (cancelled) return;
        setPage(pageData);
        setMembers(memberData || []);
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
          <div className="h-10 w-2/3 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
        </div>
      </Container>
    );
  }

  if (status === 'error') {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg text-gray-600">Something went wrong loading this page. Please try again shortly.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {page?.title || 'Leadership & Management'}
        </h1>
        {page?.intro && <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">{page.intro}</p>}

        {members.length === 0 ? (
          <p className="text-gray-600">Leadership profiles are coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <div key={member.name} className="rounded-xl bg-gray-50 p-6 shadow-card">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="mb-4 h-20 w-20 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <h3 className="text-xl font-semibold text-ink">{member.name}</h3>
                <p className="mb-3 text-sm font-medium text-brand-orange">{member.title}</p>
                <p className="text-sm leading-relaxed text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ExecutiveLeadership;
