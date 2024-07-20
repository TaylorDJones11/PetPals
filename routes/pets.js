// Adoption Pet CRUD Routes
const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');

// Index - GET
router.get('/', async (req, res) => {
  try {
    const allPets = await Pet.find({});
    res.json(allPets);
  } catch (error) {
    res.status(500).json({ msg: 'whoops, something went wrong' });
    console.error(error.message);
  }
});
// show - GET

// new - GET

// create - POST

// update - PUT

// destroy - DELETE

module.exports = router;
