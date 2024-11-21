// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

// Routes
const indexRoutes = require('./routes/index');
const tiketRoutes = require('./routes/tiket');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine to EJS
app.set('view engine', 'ejs');

// Routes
app.use('/', indexRoutes);
app.use('/', tiketRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
