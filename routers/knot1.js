const express = require('express');
const Knot1 = require('../models/knot1');
const router = new express.Router();
const cors = require('cors');

router.use(cors());

router.use(express.json());

router.post('/api/knot1', async (req, res) => {
  const knot1 = new Knot1(req.body);

  try {
    await knot1.save();
    res.status(201).send(knot1);
  } catch(e) {
    res.status(500).send();
  };
});

router.get('/api/knot1', async (req, res) => {
  try {
    const knot1 = await Knot1.find({});
    res.send(knot1);
  } catch(e) {
    res.status(500).send();
  };
});

router.get('/api/knot1/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const knot1 = await Knot1.find({'owner': _id});
    if(!knot1) {
      console.log('no knots');
      return res.status(404).send();
    }
    res.send(knot1);
  } catch(e) {
    console.log('error!')
    res.status(500).send();
  };
});

router.patch('/api/knot1/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14', 'owner'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));


  if(!isValidOperation) {
    return res.status(400).send({ error : 'invalid updates'});
  }

  try {
    const knot1 = await Knot1.findById(req.params.id);

    updates.forEach((update) => knot1[update] = req.body[update]);
    await knot1.save();

    if(!knot1) {
      return res.status(404).send();
    }
    res.send(knot1);
    console.log('patched');
  } catch (e) {
    res.status(400).send(e);
    console.log('not patched');
  }
});



module.exports = router;
