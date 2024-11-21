// routes/tiket.js
const express = require('express');
const router = express.Router();
const db = require('../database/db');

// Halaman pemesanan tiket
router.get('/tiket', (req, res) => {
  res.render('tiket');
});

// Proses pemesanan tiket
router.post('/tiket', (req, res) => {
  const { idP, idKr, tanggal } = req.body;
  
  // Simpan data ke database
  const query = 'INSERT INTO tiket (idP, idKr, tanggal) VALUES (?, ?, ?)';
  db.query(query, [idP, idKr, tanggal], (err, results) => {
    if (err) {
      console.error('Error while saving ticket:', err);
      return res.status(500).send('Server error');
    }
    res.redirect('/tiket');
  });
});

module.exports = router;
