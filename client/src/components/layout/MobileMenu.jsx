import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiChevronDown, HiX } from 'react-icons/hi';
import Button from '../common/Button.jsx';

function SubAccordionItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.hasChildren) {
    return (
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className="block py-2.5 text-sm text-white/80 transition-colors hover:text-brand-orange"
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-2.5 text-left text-sm text-white/80"
      >
        {item.label}
        <HiChevronDown className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="animate-fadeSlideDown pb-2 pl-3">
          {item.children.map((child) => (
            <NavLink
              key={child.label}
              to={child.to}
              onClick={onNavigate}
              className="block py-2 text-sm text-white/70 transition-colors hover:text-brand-orange"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function AccordionItem({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-white"
      >
        {label}
        <HiChevronDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="animate-fadeSlideDown pb-3 pl-3">
          {items.map((item) => (
            <SubAccordionItem key={item.label} item={item} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenu({ isOpen, onClose, dropdowns, simpleLinks }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 lg:hidden ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto
          bg-navy px-6 pt-6 pb-10 shadow-2xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-white hover:bg-white/10"
          >
            <HiX className="text-2xl" />
          </button>
        </div>

        {Object.values(dropdowns).map((d) => (
          <AccordionItem key={d.label} label={d.label} items={d.items} onNavigate={onClose} />
        ))}

        {simpleLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            onClick={onClose}
            className="block border-b border-white/10 py-4 text-base font-medium text-white transition-colors hover:text-brand-orange"
          >
            {link.label}
          </NavLink>
        ))}

        <Button to="/contact" onClick={onClose} className="mt-6 justify-center">
          Contact us
        </Button>
      </div>
    </div>
  );
}

export default MobileMenu;
