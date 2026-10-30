import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import Logo from '../common/Logo.jsx';
import Button from '../common/Button.jsx';
import Container from '../common/Container.jsx';
import NavDropdown from './NavDropdown.jsx';
import MobileMenu from './MobileMenu.jsx';
import { buildNav } from './navModel.js';
import { useSite } from '../../context/SiteContext.jsx';

function Header() {
  const { settings, services, industries } = useSite();
  const nav = useMemo(() => buildNav(settings, services, industries), [settings, services, industries]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close the drawer on navigation, and lock body scroll while it is open
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.items ? (
              <NavDropdown key={item.label} label={item.label} to={item.to} items={item.items} isActivePath={pathname.startsWith(item.to) || item.items.some((i) => pathname.startsWith(i.to) && i.to !== '/services')} />
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`text-[15px] font-medium transition-colors hover:text-brand-orange ${pathname.startsWith(item.to) ? 'text-brand-orange' : 'text-ink'}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact?type=audit">Free Audit</Button>
        </div>

        <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu" className="rounded-md p-2 text-navy lg:hidden">
          <HiMenu className="text-3xl" />
        </button>
      </Container>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} nav={nav} />
    </header>
  );
}

export default Header;
