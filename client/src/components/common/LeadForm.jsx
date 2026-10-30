import { useState } from 'react';
import { submitContactForm } from '../../services/api.js';
import Button from './Button.jsx';

const INPUT =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-gray-400 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20';

function Field({ label, id, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}

/**
 * Lead capture form posting to /api/contact.
 *  - source="audit": short free-audit form (name, email, website, phone)
 *  - source="contact": full project enquiry; `options` supplies the service/budget lists from the DB
 */
function LeadForm({ source = 'contact', options = {}, buttonLabel = 'Send message', dark = false }) {
  const full = source === 'contact';
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', website: '', service: '', budget: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'sending', message: '' });
    try {
      const res = await submitContactForm({ ...values, source });
      setStatus({ state: 'done', message: res.message });
      setValues({ name: '', email: '', phone: '', company: '', website: '', service: '', budget: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', message: err.message });
    }
  };

  if (status.state === 'done') {
    return (
      <div role="status" className="rounded-xl bg-green-50 p-6 text-green-800">
        <p className="font-semibold">{status.message}</p>
        <button type="button" onClick={() => setStatus({ state: 'idle', message: '' })} className="mt-3 text-sm underline">
          Send another
        </button>
      </div>
    );
  }

  const grid = full ? 'grid grid-cols-1 gap-5 sm:grid-cols-2' : 'grid grid-cols-1 gap-4 sm:grid-cols-2';
  const labelWrap = dark ? '[&_label]:text-white' : '';

  return (
    <form onSubmit={onSubmit} className={`${grid} ${labelWrap}`} noValidate>
      <Field label="Full name *" id={`${source}-name`}>
        <input id={`${source}-name`} className={INPUT} value={values.name} onChange={set('name')} required autoComplete="name" placeholder="Your name" />
      </Field>
      <Field label="Work email *" id={`${source}-email`}>
        <input id={`${source}-email`} type="email" className={INPUT} value={values.email} onChange={set('email')} required autoComplete="email" placeholder="you@company.com" />
      </Field>
      <Field label="Website" id={`${source}-website`}>
        <input id={`${source}-website`} className={INPUT} value={values.website} onChange={set('website')} placeholder="https://yourwebsite.com" autoComplete="url" />
      </Field>
      <Field label="Phone / WhatsApp" id={`${source}-phone`}>
        <input id={`${source}-phone`} type="tel" className={INPUT} value={values.phone} onChange={set('phone')} autoComplete="tel" placeholder="+91 …" />
      </Field>

      {full && (
        <>
          <Field label="Company" id="contact-company">
            <input id="contact-company" className={INPUT} value={values.company} onChange={set('company')} autoComplete="organization" />
          </Field>
          <Field label="Service you're interested in" id="contact-service">
            <select id="contact-service" className={INPUT} value={values.service} onChange={set('service')}>
              <option value="">Select a service</option>
              {options.services?.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Monthly budget" id="contact-budget">
              <select id="contact-budget" className={INPUT} value={values.budget} onChange={set('budget')}>
                <option value="">Select a range</option>
                {options.budgets?.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Tell us about your goals *" id="contact-message">
              <textarea id="contact-message" rows={5} className={INPUT} value={values.message} onChange={set('message')} required placeholder="What are you trying to achieve?" />
            </Field>
          </div>
        </>
      )}

      {status.state === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600 sm:col-span-2">
          {status.message}
        </p>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" disabled={status.state === 'sending'} className="w-full justify-center sm:w-auto">
          {status.state === 'sending' ? 'Sending…' : buttonLabel}
        </Button>
      </div>
    </form>
  );
}

export default LeadForm;
