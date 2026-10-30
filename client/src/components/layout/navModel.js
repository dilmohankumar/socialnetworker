/**
 * Turns settings.nav (+ the services / industries collections) into the menu
 * structure Header and MobileMenu render. Dropdown contents come from the
 * database, so adding a service there adds it to the menu automatically.
 */
export function buildNav(settings, services, industries) {
  return settings.nav.map((item) => {
    if (item.source === 'services') {
      return {
        ...item,
        items: [{ label: 'All Services', to: '/services' }, ...services.map((s) => ({ label: s.title, to: `/services/${s.slug}` }))],
      };
    }
    if (item.source === 'industries') {
      return { ...item, items: industries.map((i) => ({ label: i.title, to: `/industries/${i.slug}` })) };
    }
    return item;
  });
}
