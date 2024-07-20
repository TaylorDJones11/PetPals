require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const conn = require('./db/conn');
const petRoutes = require('./routes/pets');
const Pet = require('./models/pet');
const adoptablePets = require('./db/pet');
conn();

// VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use(express.json());
app.use('/api/adoptionpets', petRoutes);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption');
});

app.get('/seed', async (req, res) => {
  try {
    await Pet.deleteMany({});
    console.log('Cleared Pet collection.');
    await Pet.create(adoptablePets);

    res.json(adoptablePets);
  } catch (error) {
    console.error('Error loading seed data:', error);
    res
      .status(500)
      .send(`Something went wrong with loading seed data: ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
