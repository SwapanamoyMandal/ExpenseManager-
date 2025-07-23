const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database connection failed: ${error.message}`);
    process.exit(1); // Exit on failure
  }
};

// Handle disconnect
mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

module.exports = connectDB;
