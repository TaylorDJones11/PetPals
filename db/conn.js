const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const connectionString = process.env.MONGO_URI;
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch (error) {
  console.error(error);
}

const db = conn.db('sample_training');

module.exports = db;
