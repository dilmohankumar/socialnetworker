import { useSearchParams } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import PageHero from '../components/common/PageHero.jsx';
import LeadForm from '../components/common/LeadForm.jsx';
import { useSite } from '../context/SiteContext.jsx';
import { usePageMeta } from '../hooks/usePageMeta.js';

function Contact() {
  const { settings } = useSite();
  const { contact } = settings;
  const [params] = useSearchParams();
  const isAudit = params.get('type') === 'audit';
  usePageMeta(`${isAudit ? 'Free Marketing Audit' : 'Contact'} | ${settings.brand.name}`, contact.subheading);

  const info = [
    { Icon: HiMail, label: 'Email', content: <a href={`mailto:${contact.email}`} className="hover:text-brand-orange">{contact.email}</a> },
    ...(contact.phones || []).map((p) => ({
      Icon: HiPhone,
      label: p.label,
      content: <a href={`tel:${p.number.replace(/\s/g, '')}`} className="hover:text-brand-orange">{p.number}</a>,
    })),
    contact.address && { Icon: HiLocationMarker, label: 'Office', content: contact.address },
    contact.hours && { Icon: HiClock, label: 'Hours', content: contact.hours },
  ].filter(Boolean);

  return (
    <>
      <PageHero
        eyebrow={isAudit ? 'Free audit' : 'Contact'}
        title={isAudit ? settings.cta.heading : contact.heading}
        subtitle={isAudit ? settings.cta.text : contact.subheading}
      />
      <section className="py-16 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LeadForm
              key={isAudit ? 'audit' : 'contact'}
              source={isAudit ? 'audit' : 'contact'}
              options={contact}
              buttonLabel={isAudit ? settings.cta.buttonLabel : 'Send message'}
            />
          </div>
          <aside className="space-y-6 rounded-2xl bg-gray-50 p-8">
            {info.map(({ Icon, label, content }) => (
              <div key={label + String(content)} className="flex gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
                  <p className="mt-0.5 text-ink">{content}</p>
                </div>
              </div>
            ))}
          </aside>
        </Container>
      </section>
    </>
  );
}

export default Contact;
