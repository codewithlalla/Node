// project-root/src/config/db.js
const mongoose = require('mongoose');
const { log } = require('../utils/logger');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    log('MongoDB connected');
  } catch (err) {
    log('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = { connectDB };