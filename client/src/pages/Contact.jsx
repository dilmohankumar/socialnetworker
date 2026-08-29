import { useState } from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import Container from '../components/common/Container.jsx';
import Button from '../components/common/Button.jsx';
import { submitContactForm } from '../services/api.js';
import { footerData } from '../data/mockData.js';

const initialForm = { name: '', email: '', phone: '', company: '', message: '' };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err?.response?.data?.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section className="py-16 md:py-24">
      <Container>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">We address your queries</h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl bg-gray-50 p-8 shadow-card">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-orange focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-orange focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-orange focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-orange focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-brand-orange focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              onClick={status === 'submitting' ? (e) => e.preventDefault() : undefined}
              className={status === 'submitting' ? 'pointer-events-none opacity-60' : ''}
            >
              {status === 'submitting' ? 'Sending...' : 'Send Query'}
            </Button>

            {status === 'success' && (
              <p className="text-sm font-medium text-green-700">Thanks! We will get back to you shortly.</p>
            )}
            {status === 'error' && <p className="text-sm font-medium text-red-600">{error}</p>}
          </form>

          <div>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-ink">
              <HiOutlineMail className="h-6 w-6 text-brand-orange" aria-hidden="true" />
              Get in touch
            </h2>
            <p className="mb-2 text-gray-700">{footerData.contact.email}</p>
            <ul className="mb-8 space-y-1 text-gray-700">
              {footerData.contact.phones.map((p) => (
                <li key={p.country} className="flex items-center gap-2">
                  <HiOutlinePhone className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                  {p.country}: {p.number}
                </li>
              ))}
            </ul>

            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-ink">
              <HiOutlineLocationMarker className="h-6 w-6 text-brand-orange" aria-hidden="true" />
              Locations
            </h2>
            <ul className="space-y-1 text-gray-700">
              {footerData.locationLinks.map((loc) => (
                <li key={loc.label} className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                  {loc.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
