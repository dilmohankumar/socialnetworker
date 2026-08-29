import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import { getLocations } from '../services/api.js';
import { footerData } from '../data/mockData.js';

function LocationDetail() {
  const { country } = useParams();
  const [location, setLocation] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    getLocations()
      .then((data) => {
        if (cancelled) return;
        const match = (data || []).find((loc) => loc.country.toLowerCase() === country.toLowerCase());
        setLocation(match || null);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });
    return () => {
      cancelled = true;
    };
  }, [country]);

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

  if (status === 'error' || !location) {
    return (
      <Container className="py-24 text-center">
        <p className="text-lg text-gray-600">We couldn't find that office location.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-2 flex items-center gap-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          <HiOutlineLocationMarker className="h-9 w-9 text-brand-orange" aria-hidden="true" />
          {location.country}
        </h1>
        {location.city && <p className="mb-8 text-xl text-gray-600">{location.city}</p>}

        <div className="max-w-md rounded-xl bg-gray-50 p-6 shadow-card">
          <p className="mb-2 flex items-center gap-2 text-gray-700">
            <HiOutlineMail className="h-4 w-4 text-brand-orange" aria-hidden="true" />
            {footerData.contact.email}
          </p>
          <ul className="space-y-1 text-gray-700">
            {footerData.contact.phones.map((p) => (
              <li key={p.country} className="flex items-center gap-2">
                <HiOutlinePhone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                {p.country}: {p.number}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default LocationDetail;
