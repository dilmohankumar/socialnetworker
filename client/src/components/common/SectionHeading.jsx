function SectionHeading({ eyebrow, heading, subheading, align = 'left', light = false }) {
  const center = align === 'center';
  return (
    <div className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest ${light ? 'text-brand-orange' : 'text-brand-purple'}`}>{eyebrow}</p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{heading}</h2>
      {subheading && <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-gray-600'}`}>{subheading}</p>}
    </div>
  );
}

export default SectionHeading;
