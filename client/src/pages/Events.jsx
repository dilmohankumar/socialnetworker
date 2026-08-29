import { useEffect, useState } from 'react';
import { HiOutlineCalendar, HiOutlineLocationMarker } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import { getEvents } from '../services/api.js';

function Events() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    getEvents()
      .then((data) => {
        if (!cancelled) {
          setEvents(data || []);
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
        <p className="text-lg text-gray-600">Something went wrong loading events. Please try again shortly.</p>
      </Container>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Events</h1>

        <div className="mb-10 overflow-hidden rounded-xl shadow-card">
          <img
            src="/images/pages/events.svg"
            alt="Events"
            loading="lazy"
            className="h-full max-h-96 w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {events.length === 0 ? (
          <p className="text-gray-600">No upcoming events right now.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.map((event) => (
              <div key={event.title} className="rounded-xl bg-gray-50 p-6 shadow-card">
                <div className="mb-2 flex items-center gap-2 text-brand-orange">
                  <HiOutlineCalendar className="h-5 w-5" aria-hidden="true" />
                  <h2 className="text-xl font-semibold text-ink">{event.title}</h2>
                </div>
                {event.location && (
                  <p className="mb-2 flex items-center gap-1 text-sm font-medium text-brand-orange">
                    <HiOutlineLocationMarker className="h-4 w-4" aria-hidden="true" />
                    {event.location}
                  </p>
                )}
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default Events;
