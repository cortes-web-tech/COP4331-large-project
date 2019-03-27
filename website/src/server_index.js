const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Knot1 = require('./models/knot1');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);

  user.save().then(() => {
    res.status(201).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users', (req, res) => {
  User.find({}).then((users) => {
    res.send(users);
  }).catch((e) => {
    res.status(500).send();
  });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;

  User.findById(_id).then((user) => {
    if (!user) {
      return res.status(404).send(); // incorrectly returning 500 when wrong id
    }

    res.send(user);
  }).catch((e) => {
    res.status(500).send();
  });
});

app.post('/knot1', (req, res) => {
  const knot1 = new Knot1(req.body);

  knot1.save().then(() => {
    res.status(201).send(knot1);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/knot1', (req, res) => {
  Knot1.find({}).then((knot1) => {
    res.send(knot1)
  }).catch((e) => {
    res.status(500).send();
  });
});

app.get('/knot1/:id', (req, res) => {
  const _id = req.params.id;

  Knot1.findById(_id).then((knot1) => {
    if(!knot1) {
      return res.status(404).send(); // incorrectly returning 500 when wrong id
    }

    res.send(knot1);
  }).catch((e) => {
    res.status(500).send();
  })

});























app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
