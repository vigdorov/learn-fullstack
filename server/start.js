const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const url = 'mongodb://localhost:27017';
const dbName = 'test';

app.get('/users', (reg, res) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection('users');
    collection.find().toArray().then(userList => {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(userList);
      client.close();
    });
  });
});

app.listen(3010, () => {
  console.log('Server start listening on port 3010');
})