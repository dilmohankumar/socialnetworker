// Dumps the contact/audit leads to a JSON file (Atlas free tier has no automatic backups).
// Run from the server folder:  node scripts/backup-leads.js   (cron runs it weekly; keeps the last 30 files)
import 'dotenv/config';
import fs from 'fs';
import os from 'os';
import path from 'path';
import mongoose from 'mongoose';

const dir = process.env.BACKUP_DIR || path.join(os.homedir(), 'backups');
fs.mkdirSync(dir, { recursive: true });

await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 15000 });
const leads = await mongoose.connection.collection('contactmessages').find({}).sort({ createdAt: 1 }).toArray();
await mongoose.disconnect();

const file = path.join(dir, `leads-${new Date().toISOString().slice(0, 10)}.json`);
fs.writeFileSync(file, JSON.stringify(leads, null, 2), { mode: 0o600 });

const old = fs.readdirSync(dir).filter((f) => /^leads-.*\.json$/.test(f)).sort().slice(0, -30);
old.forEach((f) => fs.unlinkSync(path.join(dir, f)));
console.log(`Saved ${leads.length} leads -> ${file}`);
