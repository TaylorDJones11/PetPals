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
    res.status(400).json({ msg: 'Validation Error: ' + error.message });
    console.log('Validation error:', error.message);
  }
});

// update - PUT
router.put('/:id', async (req, res) => {
  try {
    const updatePet = await Pet.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatePet);
  } catch (error) {
    res.status(400).json({ msg: 'Invalid data provided or pet not found' });
    console.log(error);
  }
});
// destroy - DELETE

router.delete('/:id', async (req, res) => {
  try {
    const deletePet = await Pet.findByIdAndDelete(req.params.id);
    res.json(deletePet);
  } catch (error) {
    console.log(`Something went wrong with DELETE method ${error.message}`);
    res.status(500).json({ msg: 'Server error: Unable to delete pet' });
  }
});

module.exports = router;
