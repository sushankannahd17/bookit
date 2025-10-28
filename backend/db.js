const mongoose = require('mongoose');

async function connect() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI not found in environment variables.');
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log('✅ Connected to MongoDB Atlas');
}

module.exports = { connect };
