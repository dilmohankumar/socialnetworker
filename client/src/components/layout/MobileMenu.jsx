import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronDown, HiX } from 'react-icons/hi';
import Button from '../common/Button.jsx';

function AccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
      >
        {item.label}
        <HiChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="animate-fadeSlideDown pb-3 pl-3">
          {item.items.map((sub) => (
            <NavLink key={sub.to} to={sub.to} onClick={onNavigate} className="block py-2.5 text-sm text-white/80 transition-colors hover:text-brand-orange">
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({ isOpen, onClose, nav }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-navy px-6 pb-10 pt-6 shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-4 flex justify-end">
          <button type="button" onClick={onClose} aria-label="Close menu" className="rounded-full p-2 text-white hover:bg-white/10">
            <HiX className="text-2xl" />
          </button>
        </div>

        {nav.map((item) =>
          item.items ? (
            <AccordionItem key={item.label} item={item} onNavigate={onClose} />
          ) : (
            <NavLink key={item.label} to={item.to} onClick={onClose} className="block border-b border-white/10 py-4 text-base font-medium text-white transition-colors hover:text-brand-orange">
              {item.label}
            </NavLink>
          )
        )}

        <Button to="/contact?type=audit" onClick={onClose} className="mt-6 justify-center">
          Get a Free Audit
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
