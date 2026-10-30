import Container from './Container.jsx';
import Button from './Button.jsx';
import NotFound from '../../pages/NotFound.jsx';

export function PageSkeleton() {
  return (
    <Container className="py-24">
      <div className="animate-pulse space-y-4" role="status" aria-label="Loading">
        <div className="h-10 w-2/3 rounded bg-gray-200" />
        <div className="h-4 w-full rounded bg-gray-200" />
        <div className="h-4 w-5/6 rounded bg-gray-200" />
        <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-3">
          <div className="h-40 rounded-xl bg-gray-200" />
          <div className="h-40 rounded-xl bg-gray-200" />
          <div className="h-40 rounded-xl bg-gray-200" />
        </div>
      </div>
    </Container>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <Container className="py-24 text-center">
      <p className="mb-6 text-lg text-gray-600">{message || 'Something went wrong while loading this section.'}</p>
      {onRetry && (
        <Button onClick={onRetry} variant="secondary">
          Try again
        </Button>
      )}
    </Container>
  );
}

/**
 * Renders loading / 404 / error states for a useApi() query and calls
 * `children(data)` once data is ready. `inline` is for sections inside a page
 * (no full-page 404).
 */
function Async({ query, children, skeleton, inline = false }) {
  if (query.loading) return skeleton || <PageSkeleton />;
  if (query.error) {
    if (query.error.status === 404 && !inline) return <NotFound />;
    return <ErrorState message={query.error.message} onRetry={query.reload} />;
  }
  return children(query.data);
}

export default Async;
