import { useEffect, useState } from 'react';
import { HiOutlineOfficeBuilding, HiOutlinePuzzle } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import { getPageContent, getClients, getPartners } from '../services/api.js';

function ClientPartners() {
  const [page, setPage] = useState(null);
  const [clients, setClients] = useState([]);
  const [partners, setPartners] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    Promise.all([getPageContent('client-partners'), getClients(), getPartners()])
      .then(([pageData, clientData, partnerData]) => {
        if (cancelled) return;
        setPage(pageData);
        setClients(clientData || []);
        setPartners(partnerData || []);
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
          {page?.title || 'Client & Partners'}
        </h1>
        {page?.image && (
          <div className="mb-10 overflow-hidden rounded-xl shadow-card">
            <img
              src={page.image}
              alt={page.title}
              loading="lazy"
              className="h-full max-h-96 w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
        {page?.intro && <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">{page.intro}</p>}

        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-ink">
          <HiOutlineOfficeBuilding className="h-6 w-6 text-brand-orange" aria-hidden="true" />
          Clients
        </h2>
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center rounded-lg bg-gray-50 px-4 py-6 text-center text-sm font-medium text-gray-700 shadow-card"
            >
              {c.name}
            </div>
          ))}
        </div>

        <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-ink">
          <HiOutlinePuzzle className="h-6 w-6 text-brand-orange" aria-hidden="true" />
          Technology Partners
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center rounded-lg bg-gray-50 px-4 py-6 text-center text-sm font-medium text-gray-700 shadow-card"
            >
              {p.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ClientPartners;
