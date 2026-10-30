import {
  FaSearch, FaBullhorn, FaShareAlt, FaPenFancy, FaEnvelopeOpenText, FaMousePointer,
  FaChartLine, FaShoppingCart, FaBuilding, FaHeartbeat, FaGraduationCap, FaLaptopCode,
  FaUtensils, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaRocket,
  FaBullseye, FaSeedling, FaChartBar,
} from 'react-icons/fa';

const ICONS = {
  search: FaSearch,
  ads: FaBullhorn,
  social: FaShareAlt,
  content: FaPenFancy,
  email: FaEnvelopeOpenText,
  cro: FaMousePointer,
  analytics: FaChartBar,
  cart: FaShoppingCart,
  building: FaBuilding,
  health: FaHeartbeat,
  education: FaGraduationCap,
  laptop: FaLaptopCode,
  food: FaUtensils,
  target: FaBullseye,
  rocket: FaRocket,
  chart: FaChartLine,
  growth: FaSeedling,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  twitter: FaTwitter,
};

/** Renders an icon by the string key stored in the database. Unknown keys fall back to a rocket. */
function Icon({ name, className = '' }) {
  const Cmp = ICONS[name] || FaRocket;
  return <Cmp className={className} aria-hidden="true" />;
}

export default Icon;
