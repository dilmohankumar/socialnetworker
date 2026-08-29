import { useEffect, useState } from 'react';
import Container from '../common/Container.jsx';
import ServiceCard from './ServiceCard.jsx';
import { getServices } from '../../services/api.js';
import { services as mockServices } from '../../data/mockData.js';

function ServicesSection() {
  const [services, setServices] = useState(mockServices);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    getServices().then((data) => {
      if (mounted) {
        setServices(data);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h2 className="mb-12 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          DIGITAL TRANSFORMATION
          <br />
          SERVICES
        </h2>

        <div
          className={`grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 ${
            loading ? 'opacity-70' : ''
          }`}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
