const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/testDB';

MongoClient.connect(url)
  .then(function(db) {
    console.log("Connected successfully");

    const collection = db.collection('users');
    return collection.findOne();
  })
  .then(function(result) {
    console.log("Result:", result);
  })
  .catch(function(err) {
    console.log("Error occurred:", err);
  });
