const _ = require('lodash');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const checkUser = user => {
  const interfaceUser = {
    name: 'string',
    surname: 'string',
    phone: 'number',
    avatar: 'string',
  };
  const strObj = Object.keys(interfaceUser).map(key => {
    return `${key}: ${interfaceUser[key]}`;
  }).join(', ');

  const errorMsg = `Ожидается объект {${strObj}}`

  if (_.isNil(user) || !_.isObject(user)) {
    return errorMsg;
  }
  
  const temp = {};
  

  Object.keys(user).forEach(key => {
    temp[key] = typeof user[key];
  });

  if (!_.isEqual(interfaceUser, temp)) {
    return errorMsg;
  }
  
}

const url = 'mongodb://localhost:27017';
const dbName = 'test';
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (reg, res, next) => {
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection('users');
    collection.find().toArray().then(userList => {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(userList);
      client.close();
      next();
    });
  });
});

app.post('/users', (req, res) => {
  const user = req.body;
  const errorMsg = checkUser(user);
  if (errorMsg) {
    res.status(400);
    res.send(errorMsg);
  }
  MongoClient.connect(url, (err, client) => {
    const db = client.db(dbName);
    const collection = db.collection('users');

    collection.insertOne(user, (err, result) => {
      if (err) {
        res.status(500);
        res.send(err);
        client.close();
      } else {
        res.send(result);
        client.close();
      }
    })

  });
});

app.listen(3010, () => {
  console.log('Server start listening on port 3010');
})
