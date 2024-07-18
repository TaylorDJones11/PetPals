const mongoose = require('mongoose');

const medicalHistorySchema = new mongoose.Schema({
  vaccinated: { type: Boolean, required: true },
  neutered: { type: Boolean, required: true },
  lastCheckup: { type: Date, required: true },
});

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  medicalHistory: { type: medicalHistorySchema, required: true },
  adoptionStatus: { type: String, required: true },
  description: { type: String, required: true },
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
