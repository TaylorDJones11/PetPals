const mongoose = require('mongoose');

const conn = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {});
    mongoose.connection.once('open', () => {
      console.log('connected to Mongodb');
    });
  } catch (error) {
    console.error(
      `Something went wrong with connect to database ${error.message}`
    );
  }
};

module.exports = conn;
