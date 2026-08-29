import axios from 'axios';
import {
  services as mockServices,
  locations as mockLocations,
  aboutContent as mockAbout,
  pageContent as mockPageContent,
  teamMembers as mockTeamMembers,
  clients as mockClients,
  partners as mockPartners,
  newsPosts as mockNewsPosts,
  events as mockEvents,
  workProjects as mockWorkProjects,
} from '../data/mockData.js';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const client = axios.create({ baseURL, timeout: 4000 });

/**
 * Every getter below tries the real API first and silently falls back to
 * local mock data if the backend isn't running yet (or the request fails).
 * This means components never need an if/else for "is the API ready" —
 * once the backend is seeded and running, real data flows through
 * automatically with zero component changes.
 */

export async function getServices() {
  try {
    const { data } = await client.get('/services');
    return data?.length ? data : mockServices;
  } catch (err) {
    return mockServices;
  }
}

export async function getLocations() {
  try {
    const { data } = await client.get('/locations');
    return data?.length ? data : mockLocations;
  } catch (err) {
    return mockLocations;
  }
}

export async function getAboutContent() {
  try {
    const { data } = await client.get('/about');
    return data || mockAbout;
  } catch (err) {
    return mockAbout;
  }
}

export async function getPageContent(slug) {
  try {
    const { data } = await client.get(`/pages/${slug}`);
    return data || mockPageContent[slug] || null;
  } catch (err) {
    return mockPageContent[slug] || null;
  }
}

export async function getTeamMembers() {
  try {
    const { data } = await client.get('/team');
    return data?.length ? data : mockTeamMembers;
  } catch (err) {
    return mockTeamMembers;
  }
}

export async function getClients() {
  try {
    const { data } = await client.get('/partners', { params: { type: 'client' } });
    return data?.length ? data : mockClients;
  } catch (err) {
    return mockClients;
  }
}

export async function getPartners() {
  try {
    const { data } = await client.get('/partners', { params: { type: 'partner' } });
    return data?.length ? data : mockPartners;
  } catch (err) {
    return mockPartners;
  }
}

export async function getNewsPosts() {
  try {
    const { data } = await client.get('/news');
    return data?.length ? data : mockNewsPosts;
  } catch (err) {
    return mockNewsPosts;
  }
}

export async function getEvents() {
  try {
    const { data } = await client.get('/events');
    return data?.length ? data : mockEvents;
  } catch (err) {
    return mockEvents;
  }
}

export async function getWorkProjects() {
  try {
    const { data } = await client.get('/work-projects');
    return data?.length ? data : mockWorkProjects;
  } catch (err) {
    return mockWorkProjects;
  }
}

export async function getJobPostings() {
  try {
    const { data } = await client.get('/jobs');
    return data || [];
  } catch (err) {
    return [];
  }
}

export async function submitContactForm(payload) {
  const { data } = await client.post('/contact', payload);
  return data;
}

export default client;
