import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

function NotFound() {
  usePageMeta('Page not found');
  return (
    <Container className="py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-brand-orange">404</p>
      <h1 className="mt-4 text-3xl font-bold text-ink">We couldn&apos;t find that page</h1>
      <p className="mx-auto mt-3 max-w-md text-gray-600">The page may have moved or no longer exists. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button to="/">Back to home</Button>
        <Button to="/services" variant="secondary">
          Our services
        </Button>
      </div>
    </Container>
  );
}

export default NotFound;
