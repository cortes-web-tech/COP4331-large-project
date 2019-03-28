const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Knot1 = require('./models/knot1');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if(!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

app.post('/knot1', async (req, res) => {
  const knot1 = new Knot1(req.body);

  try {
    await knot1.save();
    res.status(201).send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get('/knot1', async (req, res) => {
  try {
    const knot1s = await Knot1.find({});
    res.send(knot1s);
  } catch (e) {
    res.status(500).send();
  }
});

app.get('/knot1/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const knot1 = await Knot1.findById(_id);

    if(!knot1) {
      return res.status(404).send(); // incorrectly returning 500 when wrong id
    }

    res.send(knot1);
  } catch (e) {
    res.status(500).send();
  }
});

app.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['password', 'tier'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error : 'Invalid updates'});
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch('/knot1/:id', async (req, res) => {
  try {
    const knot1 = await Knot1.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!knot1) {
      return res.status(404).send();
    }

    res.send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
})



















app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
