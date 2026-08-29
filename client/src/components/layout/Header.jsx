import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Logo from '../common/Logo.jsx';
import Button from '../common/Button.jsx';
import NavDropdown from '../common/NavDropdown.jsx';
import MobileMenu from './MobileMenu.jsx';
import Container from '../common/Container.jsx';
import { navDropdowns, simpleNavLinks } from '../../data/mockData.js';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {Object.entries(navDropdowns).map(([key, dropdown]) => (
            <NavDropdown
              key={key}
              label={dropdown.label}
              to={dropdown.to}
              items={dropdown.items}
              isActivePath={pathname.startsWith(dropdown.to)}
            />
          ))}

          {simpleNavLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-[15px] font-medium text-ink transition-colors hover:text-brand-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Contact us</Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="rounded-md p-2 text-navy lg:hidden"
        >
          <HiMenu className="text-3xl" />
        </button>
      </Container>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        dropdowns={navDropdowns}
        simpleLinks={simpleNavLinks}
      />
    </header>
  );
}

export default Header;
