// Uses CommmonJS instead of ES6
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { logger } = require('./src/common/middleware/loggers/logger');
const connectDB = require('./src/common/config/mongoDBConnection');
const { logEvents } = require('./src/common/middleware/loggers/logger');
const corsOptions = require('./src/common/config/corsOptions');
const errorHandler = require('./src/common/middleware/loggers/errorHandler');

const PORT = process.env.PORT || 3500;
console.log(typeof PORT);

// Create Express App
const app = express();

// Connect to the mongodb
connectDB();

// Log requests
app.use(logger);

// Enable Cors
app.use(cors(corsOptions));

// Enable Json
app.use(express.json());

// Enable Cookie Parser
app.use(cookieParser());

// Routes
app.use('/api/v1/users', require('./src/users/users-routes'));
app.use('/api/v1/posts', require('./src/posts/posts-routes'));
app.use('/auth', require('./src/auth/auth-routes'));

// Default to 404 Page
app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('json')) {
    res.json({ message: 'Invalid API Endpoint' });
  } else {
    res.type('txt').send('Invalid API Endpoint');
  }
});

// Error Handler
app.use(errorHandler);

// Listener for mongoose connection
mongoose.connection.once('open', () => {
  console.log(`Connected to Mongo DB at ${process.env.MONGODB_URI}`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on('error', (err) => {
  logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'dbErrors.log');
});
