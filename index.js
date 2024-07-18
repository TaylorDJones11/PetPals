require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const conn = require('./db/conn');
const petRoutes = require('./routes/pets');
const Pet = require('./models/pet');
conn();

// VIEW ENGINE
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// MIDDLEWARE
app.use('/pets', petRoutes);

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Pet Adoption');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
