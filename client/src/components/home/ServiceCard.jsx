import Button from '../common/Button.jsx';

/**
 * Mirrors the reference card: a little 3-dot "browser chrome" bar on top of
 * the image (as seen in the screenshots), then title, description, and a
 * purple "Know More" pill with a bottom divider.
 */
function ServiceCard({ service }) {
  return (
    <article className="group flex flex-col">
      <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-card">
        <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
        </div>
        <div className="aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-navy to-navy-light">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{service.description}</p>

      <div className="mt-5">
        <Button to={service.to} variant="secondary" withArrow>
          Know More
        </Button>
      </div>
      <div className="mt-6 border-b border-gray-200" />
    </article>
  );
}

export default ServiceCard;
