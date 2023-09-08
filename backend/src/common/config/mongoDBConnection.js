const mongoose = require('mongoose');
const { logEvents } = require('../middleware/loggers/logger');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    logEvents(`${err.name}: ${err.message}`, 'errors.log');
  }
};

module.exports = connectDB;
