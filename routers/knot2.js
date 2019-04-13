const express = require('express');
const Knot2 = require('../models/knot2');
const router = new express.Router();
const cors = require('cors');

router.use(cors());

router.use(express.json());

router.post('/api/knot2', async (req, res) => {
  const knot2 = new Knot2(req.body);

  try {
    await knot2.save();
    res.status(201).send(knot2);
  } catch(e) {
    const nullKnot2 = new Knot2({'q1': 'null'});
    res.status(200).send(nullKnot2);
  };
});

router.get('/api/knot2', async (req, res) => {
  try {
    const knot2 = await Knot2.find({});
    res.send(knot2);
  } catch(e) {
    const nullKnot2 = new Knot2({'q1': 'null'});
    res.status(200).send(nullKnot2);
  };
});

router.get('/api/knot2/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const knot2 = await Knot2.find({'owner': _id});
    if(!knot2) {
      const nullKnot2 = new Knot2({'q1': 'null'});
      return res.status(200).send(nullKnot2);
    }
    res.send(knot2);
  } catch(e) {
    const nullKnot2 = new Knot2({'q1': 'null'});
    res.status(200).send(nullKnot2);
  };
});

router.patch('/api/knot2/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11','owner'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));


  if(!isValidOperation) {
    return res.status(200).send({ error : 'invalid updates'});
  }

  try {
    const knot2 = await Knot2.findById(req.params.id);

    updates.forEach((update) => knot2[update] = req.body[update]);
    await knot2.save();

    if(!knot2) {
      const nullKnot2 = new Knot2({'q1': 'null'});
      return res.status(200).send(nullKnot2);
    }
    res.send(knot2);
  } catch (e) {
    const nullKnot2 = new Knot2({'q1': 'null'});
    res.status(200).send(nullKnot2);
  }
});



module.exports = router;
