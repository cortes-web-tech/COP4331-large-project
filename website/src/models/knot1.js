const mongoose = require('mongoose');

const Knot1 = mongoose.model('Knot1', {
  q1: {
    type: Array
  },
  q2: {
    type: Boolean,
    default: false
  },
  q3: {
    type: String,
    trim: true,
    default: ""
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
    type: Array
  },
  q9: {
    type: Number,
    default: ''
  },
  q10: {
    type: Number,
    default: ''
  },
  q11: {
    type: Number,
    default: ''
  },
  q12: {
    type: Number,
    default: ''
  },
  q13: {
    type: Number,
    default: ''
  },
  q14: {
    type: Array
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
//
// knot1.save().then(() => {
//   console.log(knot1);
// }).catch((error) => {
//   console.log(error);
// });
