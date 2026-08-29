import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import { aboutContent } from '../../data/mockData.js';

function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <Container>
        <h2 className="mb-10 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {aboutContent.heading.toUpperCase()}
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-card">
            <img
              src={aboutContent.image}
              alt="socialnetworker team collaborating"
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ aspectRatio: '4 / 3' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-gray-700">{aboutContent.paragraph}</p>
            <div className="mt-8">
              <Button to={aboutContent.ctaTo} variant="secondary">
                {aboutContent.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
