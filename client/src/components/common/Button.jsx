import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

const variants = {
  primary:
    'bg-brand-orange hover:bg-brand-orangeDark text-white shadow-card',
  secondary:
    'bg-brand-purple hover:bg-brand-purpleDark text-white',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-navy',
};

/**
 * Works as a router Link (pass `to`) or a plain button (pass `onClick`).
 * `withArrow` renders the small chevron used by the purple "Know More" pills.
 */
function Button({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  withArrow = false,
  disabled = false,
  className = '',
}) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold
    transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0
    focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
        {withArrow && <HiArrowRight className="text-base" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}>
      {children}
      {withArrow && <HiArrowRight className="text-base" aria-hidden="true" />}
    </button>
  );
}

export default Button;
