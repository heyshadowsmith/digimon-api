// Add Express.js
const express = require ('express');
// Add the Express.js router 
const router = express.Router();
// Add the faux Digimon database
const digimon = require('../../database/Digimon');

// Get all Digimon
router.get('/', (req, res) => res.json(digimon));

// Get single Digimon by ID
router.get('/:id', (req, res) => {
    const found = digimon.some(digimon => digimon.id === parseInt(req.params.id));
    
    if(found) {
        res.json(digimon.filter(digimon => digimon.id === parseInt(req.params.id)));
    } else {
        const digimon_ID = req.params.id;
        
        res.status(400).json(
            {
               ErrorMsg: `No Digimon in our database has an ID of ${digimon_ID}.` 
            }
        );
    }
});

// Export Digimon route
module.exports = router;