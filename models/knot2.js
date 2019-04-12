const mongoose = require('mongoose');

const Knot2 = mongoose.model('Knot2', {
  q1: {
    type: Number,
    default: null
  },
  q2: {
    type: Boolean,
    default: null
  },
  q3: {
    type: Boolean,
    default: null
  },
  q4: {
    type: Boolean,
    default: null
  },
  q5: {
    type: Boolean,
    default: null
  },
  q6: {
    type: Boolean,
    default: null
  },
  q7: {
    type: Number,
    default: null
  },
  q8: {
    type: Boolean,
    default: null
  },
  q9: {
    type: Boolean,
    default: null
  },
  q10: {
    type: Boolean,
    default: null
  },
  q11: {
    type: Boolean,
    default: null
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

module.exports = Knot2;
