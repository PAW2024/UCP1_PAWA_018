// routes/index.js
const express = require('express');
const router = express.Router();

// Halaman utama
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
