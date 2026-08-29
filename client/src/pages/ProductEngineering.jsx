import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';

const items = [
  { label: 'Mobile + App', to: '/services/mobile-apps', description: 'Native and cross-platform mobile apps built for strategy, design, testing, and ongoing support.' },
  { label: 'Cloud + Web', to: '/services/cloud-web', description: 'Cloud-native architecture across AWS, Azure, and GCP — servers, storage, compute, and databases.' },
  { label: 'UI-UX', to: '/services/design-ui-ux', description: 'Research-driven design and prototyping that makes products effective, not just attractive.' },
  { label: 'AI/ML + BI', to: '/services/ai-ml-bi', description: 'Data labeling, extraction, and machine learning models deployed to the cloud.' },
  { label: 'BPS', to: '/services/bps', description: 'Process automation, data validation, and data entry teams for repetitive business operations.' },
];

function ProductEngineering() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">Product Engineering</h1>
        <p className="mb-12 max-w-4xl text-lg leading-relaxed text-gray-700">
          End-to-end product engineering across mobile, cloud, design, AI/ML, and business process services —
          made-to-order software teams exclusive to your company.
        </p>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col rounded-xl bg-gray-50 p-6 shadow-card">
              <h2 className="mb-2 text-xl font-semibold text-ink">{item.label}</h2>
              <p className="mb-6 flex-1 text-sm text-gray-700">{item.description}</p>
              <Button to={item.to} variant="secondary" withArrow>
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductEngineering;
