import Container from '../common/Container.jsx';
import Button from '../common/Button.jsx';

/**
 * Decorative growth chart + KPI cards. The numbers shown are the metrics
 * stored in settings.hero.metrics; the curve itself is illustrative only.
 */
function GrowthPanel({ metrics = [] }) {
  return (
    <div className="relative w-full max-w-md">
      <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-white/80">Performance overview</span>
          <span className="rounded-full bg-green-400/20 px-2.5 py-1 text-xs font-semibold text-green-300">Live</span>
        </div>
        <svg viewBox="0 0 320 140" className="h-36 w-full" role="img" aria-label="Upward growth chart">
          <defs>
            <linearGradient id="heroFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#E1552D" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#E1552D" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 120 C40 112 60 118 90 96 S150 80 180 62 S250 40 320 12 L320 140 L0 140 Z" fill="url(#heroFill)" />
          <path d="M0 120 C40 112 60 118 90 96 S150 80 180 62 S250 40 320 12" fill="none" stroke="#E1552D" strokeWidth="3" strokeLinecap="round" />
          <circle cx="320" cy="12" r="5" fill="#fff" />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-white/15 bg-white/10 p-4 text-center backdrop-blur">
            <div className="font-display text-2xl font-extrabold text-white">{m.value}</div>
            <div className="mt-1 text-xs leading-tight text-white/70">{m.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero({ hero }) {
  const idx = hero.highlight ? hero.headline.indexOf(hero.highlight) : -1;
  const before = idx >= 0 ? hero.headline.slice(0, idx) : hero.headline;
  const accent = idx >= 0 ? hero.highlight : '';
  const after = idx >= 0 ? hero.headline.slice(idx + hero.highlight.length) : '';

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 70% 60%, white, transparent), radial-gradient(1px 1px at 40% 80%, white, transparent), radial-gradient(1px 1px at 85% 20%, white, transparent)',
          backgroundSize: '200px 200px',
        }}
        aria-hidden="true"
      />
      <Container className="relative grid min-h-[600px] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          {hero.eyebrow && <p className="mb-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 sm:text-sm">{hero.eyebrow}</p>}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
            {before}
            {accent && <span className="text-brand-orange">{accent}</span>}
            {after}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">{hero.subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            {hero.primaryCta && <Button to={hero.primaryCta.to}>{hero.primaryCta.label}</Button>}
            {hero.secondaryCta && (
              <Button to={hero.secondaryCta.to} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            )}
          </div>
          {hero.trustText && <p className="mt-8 text-sm text-white/60">{hero.trustText}</p>}
        </div>

        <div className="flex justify-center lg:justify-end">
          <GrowthPanel metrics={hero.metrics} />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
