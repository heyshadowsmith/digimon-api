// Add Express.js
const express = require('express');
// Add Express.js path
const path = require('path');
// Add Helmet middleware
const helmet = require('helmet');

// Init Express.js
const app = express();

// Init middleware
app.use(helmet());

// Init static folder
app.use(express.static(path.join(__dirname, 'public')));

// Digimon API routes
app.use('/api/digimon', require('./routes/api/digimon'));

// Config ports
const PORT = process.env.PORT || 5000;

// Port listener
app.listen(PORT, () => console.log(`Running on port ${PORT}`));