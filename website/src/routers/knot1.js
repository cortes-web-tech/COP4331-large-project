const express = require('express');
const Knot1 = require('../models/knot1');
const router = new express.Router();

router.post('/knot1', async (req, res) => {
  const knot1 = new Knot1(req.body);

  try {
    await knot1.save();
    res.status(201).send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/knot1', async (req, res) => {
  try {
    const knot1s = await Knot1.find({});
    res.send(knot1s);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/knot1/:id', async (req, res) => {
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


router.patch('/knot1/:id', async (req, res) => {
  try {
    const knot1 = await Knot1.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if(!knot1) {
      return res.status(404).send();
    }

    res.send(knot1);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
