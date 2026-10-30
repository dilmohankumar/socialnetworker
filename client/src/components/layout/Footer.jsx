import { Link } from 'react-router-dom';
import Container from '../common/Container.jsx';
import Logo from '../common/Logo.jsx';
import Icon from '../common/Icon.jsx';
import { useSite } from '../../context/SiteContext.jsx';

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}

function Footer() {
  const { settings, services } = useSite();
  const { footer, contact, social } = settings;

  return (
    <footer className="bg-[#09002e] pt-16 text-white/80">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">{footer.about}</p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-brand-orange hover:text-white"
                >
                  <Icon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services">
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-brand-orange">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Company">
            <ul className="space-y-3 text-sm">
              {footer.company.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact Us">
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-brand-orange">
                  {contact.email}
                </a>
              </li>
              {contact.phones?.map((p) => (
                <li key={p.label}>
                  {p.label}:{' '}
                  <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-brand-orange">
                    {p.number}
                  </a>
                </li>
              ))}
              {contact.address && <li className="leading-relaxed">{contact.address}</li>}
              {contact.hours && <li className="text-white/60">{contact.hours}</li>}
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-14 border-t border-white/10 py-6 text-center text-sm">
          <p>
            {footer.copyright} <Link to="/privacy-policy" className="ml-2 underline hover:text-brand-orange">Privacy Policy</Link>
          </p>
          {footer.disclaimer && <p className="mx-auto mt-2 max-w-3xl text-xs text-white/50">{footer.disclaimer}</p>}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
