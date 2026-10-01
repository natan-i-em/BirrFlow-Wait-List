import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

let clientPromise: Promise<MongoClient> | undefined;
let indexReady = false;

function getClient() {
  if (!clientPromise) clientPromise = new MongoClient(process.env.MONGODB_URI!).connect();
  return clientPromise;
}

const ROLES = ['beta', 'pro', 'investor'];
const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const b = req.body ?? {};
  const doc = {
    role: ROLES.includes(b.role) ? b.role : 'beta',
    name: str(b.name),
    email: str(b.email).toLowerCase(),
    phone: str(b.phone),
    occupation: str(b.occupation),
    primaryBank: str(b.primaryBank),
    notes: str(b.notes, 1000),
    lang: b.lang === 'am' ? 'am' : 'en',
    createdAt: new Date(),
  };

  if (!doc.name || !doc.phone || !/^\S+@\S+\.\S+$/.test(doc.email)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  try {
    const client = await getClient();
    const col = client.db(process.env.MONGODB_DB || 'birrflow').collection('waitlist');
    if (!indexReady) {
      await col.createIndex({ email: 1 }, { unique: true });
      indexReady = true;
    }
    await col.insertOne(doc);
    return res.status(201).json({ ok: true });
  } catch (err: any) {
    if (err?.code === 11000) {
      return res.status(409).json({ error: 'This email is already registered' });
    }
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}