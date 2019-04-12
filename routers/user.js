const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const cors = require('cors');


router.use(cors());
router.use(express.json());

router.post('/api/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    const nullUser = new User({'email': '', 'password': ''});
    res.status(400).send(nullUser);
  }

});

router.post('/api/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    res.send(user);
  } catch (e) {
    const nullUser = new User({'email': '', 'password': ''});
    res.status(400).send(nullUser);
  }
});


router.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    const nullUser = new User({'email': '', 'password': ''});
    res.status(500).send(nullUser);
  }
});

router.get('/api/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    User.find

    if(!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch {
    const nullUser = new User({'email': '', 'password': ''});
    res.status(500).send(nullUsers);
  }
});


router.patch('/api/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['password', 'tier'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error : 'invalid updates'});
  }

  try {
    const user = await User.findById(req.params.id);

    updates.forEach((update) => user[update] = req.body[update]);
    await user.save();
    //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!user) {
      const nullUser = new User({'email': '', 'password': ''});
      return res.status(404).send(nullUser);
    }
    res.send(user);
  } catch (e) {
    const nullUser = new User({'email': '', 'password': ''});
    res.status(400).send(nullUser);
  }
});


module.exports = router;
