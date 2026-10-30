import { createContext, useContext, useEffect, useState } from 'react';
import { getSettings, getServices, getIndustries } from '../services/api.js';
import { useApi } from '../hooks/useApi.js';

const SiteContext = createContext(null);

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error('useSite must be used inside <SiteProvider>');
  return ctx;
}

/**
 * Loads the data every page needs (brand settings + the service/industry lists
 * that feed the navigation) once, before rendering the app. There is no
 * fallback copy: if the API is down the visitor sees a retry screen.
 */
export function SiteProvider({ children }) {
  const { data, loading, error, reload } = useApi(
    () => Promise.all([getSettings(), getServices(), getIndustries()]).then(([settings, services, industries]) => ({ settings, services, industries })),
    []
  );
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    if (!loading) return undefined;
    const t = setTimeout(() => setSlow(true), 4000);
    return () => clearTimeout(t);
  }, [loading]);

  useEffect(() => {
    if (data?.settings?.seo) {
      document.title = data.settings.seo.title || data.settings.brand.name;
      const tag = document.querySelector('meta[name="description"]');
      if (tag && data.settings.seo.description) tag.content = data.settings.seo.description;
    }
  }, [data]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-navy px-6 text-center text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-brand-orange" aria-hidden="true" />
        <p className="font-display text-xl">Loading…</p>
        {slow && <p className="max-w-sm text-sm text-white/70">The server is waking up — this can take up to a minute on the first visit.</p>}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold text-ink">We couldn&apos;t load the site</h1>
        <p className="max-w-md text-gray-600">{error.message}</p>
        <button type="button" onClick={reload} className="rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white hover:bg-brand-orangeDark">
          Try again
        </button>
      </div>
    );
  }

  return <SiteContext.Provider value={data}>{children}</SiteContext.Provider>;
}
