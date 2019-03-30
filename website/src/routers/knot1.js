const express = require('express');
const Knot1 = require('../models/knot1');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/knot1', auth, async (req, res) => {
  const knot1 = new Knot1({
    ...req.body,
    owner: req.user._id
  })

  try {
    await knot1.save();
    res.status(201).send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/knot1', auth, async (req, res) => {
  try {
    await req.user.populate('knot1').execPopulate();
    res.send(req.user.knot1);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/knot1/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const knot1 = await Knot1.findById(_id);
    const knot1 = await Knot1.findOne({ _id, owner: req.user._id})

    if(!knot1) {
      return res.status(404).send(); // incorrectly returning 500 when wrong id
    }

    res.send(knot1);
  } catch (e) {
    res.status(500).send();
  }
});


router.patch('/knot1/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({error : 'Invalid operation'});
  }

  try {
    const knot1 = await Knot1.findOne({ _id: req.params.id, owner: req.user._id});

    if(!knot1) {
      return res.status(404).send();
    }

    updates.forEach((update) => knot1[update] = req.body[update]);
    await knot1.save();
    res.send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
