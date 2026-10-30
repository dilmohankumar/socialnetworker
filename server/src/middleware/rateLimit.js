/** Tiny in-memory per-IP limiter — enough to stop a form from being spammed. */
export function rateLimit({ windowMs, max }) {
  const hits = new Map();
  return (req, res, next) => {
    const now = Date.now();
    const entry = hits.get(req.ip) || { count: 0, resetAt: now + windowMs };
    if (now > entry.resetAt) {
      entry.count = 0;
      entry.resetAt = now + windowMs;
    }
    entry.count += 1;
    hits.set(req.ip, entry);
    if (entry.count > max) {
      return res.status(429).json({ message: 'Too many submissions. Please try again later.' });
    }
    next();
  };
}
