import Container from './Container.jsx';

/** Compact navy banner used at the top of inner pages. */
function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="bg-hero-gradient py-16 text-white md:py-20">
      <Container>
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-orange">{eyebrow}</p>}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}

export default PageHero;
