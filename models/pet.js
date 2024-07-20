const mongoose = require('mongoose');

// Validation rules in Schema
const petSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  species: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat', 'Bird', 'Other'],
  },
  breed: { type: String, required: true, minlength: 2, maxlength: 50 },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true, min: 0 },
  adoptionStatus: {
    type: String,
    required: true,
    enum: ['Available', 'Pending', 'Adopted'],
  },
  description: { type: String, required: true, minlength: 10, maxlength: 500 },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
