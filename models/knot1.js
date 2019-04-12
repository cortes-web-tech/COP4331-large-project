const mongoose = require('mongoose');

const Knot1 = mongoose.model('Knot1', {
  q1: {
    type: Array
  },
  q2: {
    type: Boolean,
    default: null
  },
  q3: {
    type: String,
    trim: true,
    default: null
  },
  q4: {
    type: Array
  },
  q5: {
    type: Array
  },
  q6: {
    type: Array
  },
  q7: {
    type: Array
  },
  q8: {
    type: Number,
    default: null
  },
  q9: {
    type: Number,
    default: null
  },
  q10: {
    type: Number,
    default: null
  },
  q11: {
    type: Number,
    default: null
  },
  q12: {
    type: Number,
    default: null
  },
  q13: {
    type: Number,
    default: null
  },
  q14: {
    type: Number,
    default: null
  },
  q15: {
    type: Number,
    default: null
  },
  q16: {
    type: Number,
    default: null
  },
  q17: {
    type: Number,
    default: null
  },
  q18: {
    type: Array
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

module.exports = Knot1;



// const knot1 = new Knot1({
//   q1: [true, false, true, true, false, false],
//   q2: true,
//   q3: 'NASA',
//   q4: [true, true, false, false, false, false],
//   q5: [true, false, false, false, false, false],
//   q6: [false, false, false, false, false, false],
//   q7: [false, true, false, false, false, false, false],
//   q8: [false, false, false, false, false, false],
//   q9: 5,
//   q10: 5,
//   q11: 2500,
//   q12: 2,
//   q13: 1,
//   q14: [true, true, true, false]
// });
