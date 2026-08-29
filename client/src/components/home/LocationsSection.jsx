import Container from '../common/Container.jsx';
import { locations } from '../../data/mockData.js';

/**
 * The reference uses a real dotted-world-map illustration behind the pins.
 * Swap `/images/world-map-dots.png` (or an inline SVG) into the background
 * once you have that asset — the pin positions (top/left %, per location in
 * mockData) are already tuned to sit roughly where the real screenshot has
 * them, so the swap is visual-only.
 */
function LocationPin({ location }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 flex-col items-center"
      style={{ top: location.top, left: location.left }}
    >
      <div
        className="flex items-center gap-2 whitespace-nowrap rounded-full border-2 bg-white py-1.5 pl-1.5 pr-4 shadow-card"
        style={{ borderColor: location.color }}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: location.color }}
        >
          {location.code}
        </span>
        <span className="text-sm font-bold leading-tight" style={{ color: location.color }}>
          {location.country}
          {location.city && (
            <>
              <br />
              {location.city}
            </>
          )}
        </span>
      </div>
      <span className="h-16 w-0.5" style={{ backgroundColor: location.color }} />
    </div>
  );
}

function LocationsSection() {
  return (
    <section className="overflow-hidden py-16 md:py-24">
      <Container>
        <h2 className="mb-14 text-4xl font-bold tracking-tight text-ink sm:text-5xl">LOCATE US</h2>

        <div className="relative mx-auto h-[420px] max-w-5xl sm:h-[480px]">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: 'radial-gradient(circle, #c9c9c9 1.4px, transparent 1.4px)',
              backgroundSize: '10px 10px',
              WebkitMaskImage:
                'radial-gradient(ellipse 90% 70% at 50% 45%, black 55%, transparent 90%)',
              maskImage: 'radial-gradient(ellipse 90% 70% at 50% 45%, black 55%, transparent 90%)',
            }}
            aria-hidden="true"
          />

          {locations.map((loc) => (
            <LocationPin key={loc.id} location={loc} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default LocationsSection;
