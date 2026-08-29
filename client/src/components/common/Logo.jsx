import { Link } from 'react-router-dom';

/**
 * Approximation of the reference infinity-loop mark (green / orange / blue)
 * next to the "socialnetworker" wordmark. Swap the <svg> for a brand SVG file in
 * src/assets once you have the real asset — the markup stays the same.
 */
function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="socialnetworker home">
      <svg width="40" height="26" viewBox="0 0 40 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 3C5 3 2 7.5 2 13s3 10 8 10c4 0 6.5-3 8.5-6.5"
          stroke="#3AA655"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M18.5 19.5C20.5 16 23 3 30 3c5 0 8 4.5 8 10s-3 10-8 10c-3.3 0-5.6-1.9-7.5-4.5"
          stroke="#F2A93B"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M10 3c4 0 6.5 3 8.5 6.5M30 3c-3.3 0-5.6 1.9-7.5 4.5"
          stroke="#3B8FD9"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-2xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        socialnetworker
      </span>
    </Link>
  );
}

export default Logo;
