const mongoose = require('mongoose');

const Knot2 = mongoose.model('Knot2', {
  q1: {
    type: Number,
    default: null
  },
  q2: {
    type: String,
    trim: true,
    default: null
  },
  q3: {
    type: String,
    trim: true,
    default: null
  },
  q4: {
    type: String,
    trim: true,
    default: null
  },
  q5: {
    type: String,
    trim: true,
    default: null
  },
  q6: {
    type: String,
    trim: true,
    default: null
  },
  q7: {
    type: Number,
    default: null
  },
  q8: {
    type: String,
    trim: true,
    default: null
  },
  q9: {
    type: String,
    trim: true,
    default: null
  },
  q10: {
    type: String,
    trim: true,
    default: null
  },
  q11: {
    type: String,
    trim: true,
    default: null
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

module.exports = Knot2;
