require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const conn = require('./db/conn');

conn();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
