import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Container from '../common/Container.jsx';
import Logo from '../common/Logo.jsx';
import { footerData } from '../../data/mockData.js';

const socialIcons = {
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
};

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-dark bg-[#151235] pt-16 text-white/80">
      <Container>
        <div className="mb-12 flex justify-center">
          <Logo light />
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <FooterColumn title="Contact Us">
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`mailto:${footerData.contact.email}`} className="hover:text-brand-orange">
                  {footerData.contact.email}
                </a>
              </li>
              {footerData.contact.phones.map((p) => (
                <li key={p.country}>
                  {p.country}:{' '}
                  <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-brand-orange">
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Company">
            <ul className="space-y-3 text-sm">
              {footerData.company.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="space-y-3 text-sm">
              {footerData.services.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Locations">
            <ul className="space-y-3 text-sm">
              {footerData.locationLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-brand-orange">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Follow Us">
            <div className="flex gap-3">
              {footerData.social.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </FooterColumn>
        </div>

        <div className="mt-14 border-t border-white/10 py-6 text-center text-sm">
          <p>{footerData.copyright}</p>
          <p className="mx-auto mt-2 max-w-3xl text-xs text-white/50">{footerData.disclaimer}</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
