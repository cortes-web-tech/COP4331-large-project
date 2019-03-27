const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value){
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      }
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes('password')) {
          throw new Error('Password cannot contain "password"');
        }
      }
    },
    tier: {
      type: Number,
      default: 3
      // validate(value) {
      //   if((value !== 1|| 2|| 3)) {
      //     throw new Error('Possible tiers are 1, 2, or 3');
      //   }
      // }             ======= this is not working
    }
});

module.exports = User;
