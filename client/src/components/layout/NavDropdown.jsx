import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiChevronDown } from 'react-icons/hi';

/**
 * Hover dropdown for the desktop nav. A short close-delay avoids flicker while
 * the cursor travels diagonally from the trigger into the panel.
 */
function NavDropdown({ label, to, items, isActivePath }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave} onFocus={handleEnter} onBlur={handleLeave}>
      <Link
        to={to}
        aria-haspopup="true"
        aria-expanded={open}
        className={`flex items-center gap-1 py-2 text-[15px] font-medium transition-colors hover:text-brand-orange ${
          isActivePath || open ? 'text-brand-orange' : 'text-ink'
        }`}
      >
        {label}
        <HiChevronDown className={`text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </Link>

      {open && (
        <div role="menu" className="animate-fadeSlideDown absolute left-0 top-full z-40 w-72 overflow-hidden rounded-b-md bg-white shadow-dropdown ring-1 ring-black/5">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-gray-100 px-5 py-3.5 text-[15px] last:border-b-0 transition-colors hover:bg-gray-50 hover:text-brand-orange ${
                  isActive ? 'text-brand-orange' : 'text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
