import crypto from 'crypto';

/**
 * Write endpoints (POST/PUT/DELETE) require the `x-admin-key` header to match
 * ADMIN_API_KEY. If the env var isn't set, writes are disabled entirely
 * rather than left open.
 */
export function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) {
    return res.status(503).json({ message: 'Admin API is disabled: set ADMIN_API_KEY on the server.' });
  }
  const provided = Buffer.from(req.get('x-admin-key') || '');
  const wanted = Buffer.from(expected);
  if (provided.length !== wanted.length || !crypto.timingSafeEqual(provided, wanted)) {
    return res.status(401).json({ message: 'Invalid admin key.' });
  }
  next();
}
