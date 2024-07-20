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
// show - GET - :id - one animal

router.get('/:id', async (req, res) => {
  try {
    const onePet = await Pet.findById(req.params.id);
    if (!onePet) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.json(onePet);
  } catch (error) {
    res.status(500).json({ msg: 'Whoops, something went wrong' });
    console.error(error.message);
  }
});

// new - GET

// create - POST

router.post('/', async (req, res) => {
  try {
    const newPet = await Pet.create(req.body);
    res.json(newPet);
  } catch (error) {
    console.log(`Something went wrong with the POST method: ${error.message}`);
  }
});

// update - PUT

// destroy - DELETE

module.exports = router;
