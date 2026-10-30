import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext.jsx';

function Logo({ light = false }) {
  const { settings } = useSite();
  const name = settings.brand.name;
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={`${name} home`}>
      <img src="/logo.jpg" alt="" width="40" height="40" className="h-10 w-10 rounded-lg" />
      <span className={`font-display text-2xl font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>{name}</span>
    </Link>
  );
}

export default Logo;
