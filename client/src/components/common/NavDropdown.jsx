import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

/**
 * Desktop-only hover dropdown (matches reference: About / Services / Verticals
 * open a white panel directly under the nav item on mouseenter, close on
 * mouseleave). A short close-delay avoids flicker while moving the cursor
 * diagonally from the trigger into the panel.
 *
 * Items flagged `hasChildren` show a right chevron and open a nested flyout
 * panel (their own `children` list) to the right on hover.
 */
function NavItem({ item }) {
  const [subOpen, setSubOpen] = useState(false);
  const subCloseTimer = useRef(null);

  if (!item.hasChildren) {
    return (
      <NavLink
        to={item.to}
        role="menuitem"
        className={({ isActive }) =>
          `flex items-center justify-between border-b border-gray-100 px-5 py-3.5 text-[15px]
          text-ink last:border-b-0 transition-colors hover:bg-gray-50 hover:text-brand-orange
          ${isActive ? 'text-brand-orange' : ''}`
        }
      >
        <span>{item.label}</span>
      </NavLink>
    );
  }

  return (
    <div
      className="relative border-b border-gray-100 last:border-b-0"
      onMouseEnter={() => {
        clearTimeout(subCloseTimer.current);
        setSubOpen(true);
      }}
      onMouseLeave={() => {
        subCloseTimer.current = setTimeout(() => setSubOpen(false), 120);
      }}
    >
      <NavLink
        to={item.to}
        role="menuitem"
        className={({ isActive }) =>
          `flex items-center justify-between px-5 py-3.5 text-[15px] text-ink transition-colors
          hover:bg-gray-50 hover:text-brand-orange ${isActive ? 'text-brand-orange' : ''}`
        }
      >
        <span>{item.label}</span>
        <HiChevronRight className="text-gray-400" aria-hidden="true" />
      </NavLink>

      {subOpen && (
        <div
          role="menu"
          className="animate-fadeSlideDown absolute left-full top-0 z-40 w-64 overflow-hidden rounded-md
            bg-white shadow-dropdown ring-1 ring-black/5"
        >
          {item.children.map((child) => (
            <NavLink
              key={child.label}
              to={child.to}
              role="menuitem"
              className={({ isActive }) =>
                `block border-b border-gray-100 px-5 py-3.5 text-[15px] text-ink last:border-b-0
                transition-colors hover:bg-gray-50 hover:text-brand-orange ${isActive ? 'text-brand-orange' : ''}`
              }
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

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
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        aria-expanded={open}
        className={`flex items-center gap-1 py-2 text-[15px] font-medium transition-colors hover:text-brand-orange ${
          isActivePath || open ? 'text-brand-orange' : 'text-ink'
        }`}
      >
        {label}
        <HiChevronDown
          className={`text-base transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          role="menu"
          className="animate-fadeSlideDown absolute left-0 top-full z-40 w-64 overflow-visible rounded-b-md
            bg-white shadow-dropdown ring-1 ring-black/5"
        >
          {items.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
