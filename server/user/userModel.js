const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 6
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    default: 'client'
  }
});

// HASHING PASSWORD
UserSchema.pre('save', function (next) {
  const user = this;

  // If password is modified, generate salt and hash password
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;