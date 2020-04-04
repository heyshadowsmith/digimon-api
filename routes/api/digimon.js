// Add Express.js
const express = require('express');
// Add the Express.js router 
const router = express.Router();
// Add the faux Digimon database
const digimon = require('../../database/Digimon');
// Add Lodash
const _ = require('lodash');

// Count Digimon
const total_digimon = digimon.length;

// Get all Digimon
router.get('/', (req, res) => res.json(digimon));

// Get Digimon by Name
router.get('/name/:name', (req, res) => {
    const digimon_name = req.params.name;
    const found = digimon.some(digimon => digimon.name.toLowerCase() === digimon_name.toLowerCase());
    
    if(found) {
        res.json(digimon.filter(digimon => digimon.name.toLowerCase() === digimon_name.toLowerCase()));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(digimon_name))} is not a Digimon in our database.` 
            }
        );
    }
});

// Get Digimon by Level
router.get('/level/:level', (req, res) => {
    const digimon_level = req.params.level;
    const found = digimon.some(digimon => digimon.level.toLowerCase().replace(/\s/g, '') === digimon_level.toLowerCase().replace(/\s/g, ''));
    
    if(found) {
        res.json(digimon.filter(digimon => digimon.level.toLowerCase().replace(/\s/g, '') === digimon_level.toLowerCase().replace(/\s/g, '')));
    } else {
        res.status(400).json(
            {
                ErrorMsg: `${_.startCase(_.toLower(digimon_level))} is not a level in our database.` 
            }
        );
    }
});

// Export Digimon route
module.exports = router;