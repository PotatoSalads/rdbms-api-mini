const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');

const sqlite = require('sqlite3');

const server = express();

server.use(bodyParser.json());

// endpoints here
server.get('/zoos', function(req, res) {
  const zoos = db('zoos')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    })
});

server.get('/zoos/:id', function(req, res) {
  const { id } = req.params;
  const zoos = db('zoos')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

server.get('/bears', function(req, res) {
  const bears = db('bears')
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json ({ error });
    })
});

server.get('/bears/:id', function(req, res) {
  const { id } = req.params;
  const bears = db('bears')
    .where('id', id)
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(error) {
      res.status(500).json({ error });
  })
});

server.post('/zoos', function(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(422).json({ error: 'Must provide name'});
    return;
  }

  const zoo = new Zoo({ name });
  knex('zoos').insert(name, function(err) {
    if (err) {
      res.status(500);
      res.json(err);
    } else {
      res.json(zoo);
    }
  })
});
const port = 3000;
server.listen(port, function() {
    console.log(`Server Listening on ${port}`);
});
