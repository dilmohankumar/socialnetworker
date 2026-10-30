import axios from 'axios';

/**
 * API base URL, in priority order:
 *  1. window.__APP_CONFIG__.API_URL  (public/config.js — editable after deploy, no rebuild)
 *  2. VITE_API_URL                   (local dev / build-time)
 *  3. localhost -> http://localhost:5000/api, otherwise same origin (<this-site>/api, e.g. behind Nginx)
 */
function resolveBaseURL() {
  const configured = window.__APP_CONFIG__?.API_URL || import.meta.env.VITE_API_URL;
  if (configured) return configured;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return 'http://localhost:5000/api';
  return `${window.location.origin}/api`;
}

const baseURL = resolveBaseURL();

// Long timeout: free hosts cold-start slowly, and there is no local fallback data to show instead.
const client = axios.create({ baseURL, timeout: 60000 });

/** Normalises axios errors into { message, status } so the UI can branch on 404 vs. network failure. */
client.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const apiError = new Error(
      err.response?.data?.message ||
        (err.code === 'ECONNABORTED' ? 'The server took too long to respond.' : 'Unable to reach the server.')
    );
    apiError.status = err.response?.status || 0;
    return Promise.reject(apiError);
  }
);

export const getSettings = () => client.get('/settings');
export const getHome = () => client.get('/home');

export const getServices = () => client.get('/services');
export const getService = (slug) => client.get(`/services/${slug}`);

export const getIndustries = () => client.get('/industries');
export const getIndustry = (slug) => client.get(`/industries/${slug}`);

export const getCaseStudies = (params) => client.get('/case-studies', { params });
export const getCaseStudy = (slug) => client.get(`/case-studies/${slug}`);

export const getBlogPosts = (params) => client.get('/blog', { params });
export const getBlogPost = (slug) => client.get(`/blog/${slug}`);

export const getTeam = () => client.get('/team');
export const getPackages = () => client.get('/packages');
export const getFaqs = (params) => client.get('/faqs', { params });
export const getJobs = () => client.get('/jobs');
export const getPage = (slug) => client.get(`/pages/${slug}`);

export const submitContactForm = (payload) => client.post('/contact', payload);

export default client;
