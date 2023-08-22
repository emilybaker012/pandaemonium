const express = require('express');
const path = require('path');

const router = express.Router();
// REGEX to get the root path (/, /index, /index.html)
router.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;
