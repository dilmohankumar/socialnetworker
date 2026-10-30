import dns from 'dns/promises';
import net from 'net';
import mongoose from 'mongoose';

// Last connection outcome, exposed (without secrets) by /api/health so a bad deploy is easy to diagnose.
export const dbStatus = { connected: false, error: null, hasUri: Boolean(process.env.MONGO_URI), attempts: 0 };

const RETRY_MS = 15000;

function tryConnect(uri) {
  return mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
}

export async function connectDB() {
  const uri = process.env.MONGO_URI;
  dbStatus.hasUri = Boolean(uri);
  if (!uri) {
    dbStatus.error = 'MONGO_URI environment variable is not set';
    console.error(`MongoDB connection failed: ${dbStatus.error}`);
    return;
  }
  dbStatus.attempts += 1;
  try {
    await tryConnect(uri);
    dbStatus.connected = true;
    dbStatus.error = null;
    console.log(`MongoDB connected -> ${mongoose.connection.host}/${mongoose.connection.name}`);
  } catch (err) {
    dbStatus.error = err.message.split('\n')[0];
    console.error('MongoDB connection failed:', err.message);
    console.error(`Will retry in ${RETRY_MS / 1000}s. Data routes error until MongoDB is reachable.`);
    // Self-heal (e.g. Atlas allowlist updated after boot) without needing a manual restart.
    setTimeout(() => connectDB(), RETRY_MS).unref();
  }
}

/** Host name only (no credentials) from a mongodb:// or mongodb+srv:// URI. */
function hostOf(uri) {
  const m = /^mongodb(?:\+srv)?:\/\/(?:[^@/]*@)?([^/?,]+)/.exec(uri || '');
  return m ? m[1].split(':')[0] : null;
}

function probePort(host, port, timeoutMs = 5000) {
  return new Promise((resolve) => {
    const s = net.connect({ host, port, timeout: timeoutMs });
    s.once('connect', () => { s.destroy(); resolve('open'); });
    s.once('timeout', () => { s.destroy(); resolve('timeout (blocked/filtered)'); });
    s.once('error', (e) => { s.destroy(); resolve(`error: ${e.code || e.message}`); });
  });
}

/** Network diagnostics from the server's own point of view. Contains hostnames only, never secrets. */
export async function probeAtlas() {
  const out = { host: hostOf(process.env.MONGO_URI) };
  if (!out.host) return out;
  try {
    const srv = await dns.resolveSrv(`_mongodb._tcp.${out.host}`);
    out.srvResolved = srv.length;
    out.port27017 = await probePort(srv[0].name, srv[0].port);
  } catch (e) {
    out.srvResolved = `error: ${e.code || e.message}`;
  }
  out.port443Control = await probePort('www.google.com', 443);
  return out;
}

export default connectDB;
