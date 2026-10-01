import 'dotenv/config';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json({ limit: '10kb' }));

const client = new MongoClient(process.env.MONGODB_URI!);
const ROLES = ['beta', 'pro', 'investor'];

async function start() {
  await client.connect();
  const col = client.db(process.env.MONGODB_DB || 'birrflow').collection('waitlist');
  await col.createIndex({ email: 1 }, { unique: true });

  app.post('/api/waitlist', async (req, res) => {
    const b = req.body ?? {};
    const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

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
      await col.insertOne(doc);
      res.status(201).json({ ok: true });
    } catch (err: any) {
      if (err?.code === 11000) {
        return res.status(409).json({ error: 'This email is already registered' });
      }
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.listen(process.env.PORT || 3001, () =>
    console.log(`API on :${process.env.PORT || 3001}`)
  );
}

start();