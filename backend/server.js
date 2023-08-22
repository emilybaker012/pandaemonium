require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { logger } = require('./middleware/loggers/logger');
const connectDB = require('./config/mongoDBConnection');
const { logEvents } = require('./middleware/loggers/logger');

const app = express();

// Connect to the mongodb
connectDB();

// Env Variables
const PORT = process.env.PORT || 3500;

// Log requests
app.use(logger);

// Routes
app.use('/', require('./routes/root'));

// Listener for mongoose connection
mongoose.connection.once('open', () => {
  console.log(`Connected to Mongo DB at ${process.env.MONGODB_URI}`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'dbErrors.log');
});
