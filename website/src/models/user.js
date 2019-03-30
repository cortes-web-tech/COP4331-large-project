const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      dropDups: true,
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
    },
    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]
});

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
}

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, 'thisismynewcourse');

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email});

  if(!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
}

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  // if password already hashed dont rehash
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
