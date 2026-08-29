import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';
import { heroContent } from '../../data/mockData.js';

/**
 * Lightweight inline SVG standing in for the "network of people" illustration
 * on the right of the reference hero. Swap for a real illustration/photo in
 * src/assets when available — layout and positioning stay the same.
 */
function NetworkIllustration() {
  const nodes = [
    { x: 250, y: 40, r: 8 }, { x: 60, y: 90, r: 22 }, { x: 340, y: 90, r: 22 },
    { x: 150, y: 150, r: 30 }, { x: 260, y: 190, r: 44 }, { x: 40, y: 240, r: 30 },
    { x: 340, y: 250, r: 26 }, { x: 150, y: 300, r: 24 }, { x: 290, y: 330, r: 18 },
    { x: 80, y: 350, r: 16 },
  ];
  const edges = [
    [0, 2], [1, 3], [2, 6], [3, 4], [1, 5], [4, 6], [3, 5], [4, 7], [6, 8], [5, 9], [7, 9], [4, 8],
  ];

  return (
    <svg viewBox="0 0 400 400" className="h-full w-full max-w-md" aria-hidden="true">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="rgba(255,255,255,0.25)" strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y} r={n.r}
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
        />
      ))}
      {[3, 4, 5].map((idx) => (
        <circle key={idx} cx={nodes[idx].x} cy={nodes[idx].y} r={nodes[idx].r - 6} fill="#ffffff" opacity="0.9" />
      ))}
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* faint starfield dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 70% 60%, white, transparent), radial-gradient(1px 1px at 40% 80%, white, transparent), radial-gradient(1px 1px at 85% 20%, white, transparent)',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />

      <Container className="relative grid min-h-[560px] grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
            <span className="block text-brand-orange">We build made-to-order</span>
            <span className="block text-white">software teams that are</span>
            <span className="block text-brand-orange">exclusive to your company</span>
          </h1>

          <div className="mt-9">
            <Button to={heroContent.ctaTo} variant="primary">
              {heroContent.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="hidden justify-center lg:flex">
          <NetworkIllustration />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
