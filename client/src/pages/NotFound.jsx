import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';

function NotFound() {
  return (
    <Container className="py-24 text-center">
      <HiOutlineExclamationCircle className="mx-auto mb-4 h-16 w-16 text-brand-orange" aria-hidden="true" />
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink">Page not found</h1>
      <p className="mb-8 text-lg text-gray-600">The page you're looking for doesn't exist or has moved.</p>
      <Button to="/">Back to Home</Button>
    </Container>
  );
}

export default NotFound;
