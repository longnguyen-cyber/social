const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 50
    },
    password: {
      type: String,
      required: true,
      min: 3
    },
    profilePicture: {
      type: String,
      default: ''
    },
    coverPicture: {
      type: String,
      default: ''
    },
    followers: {
      type: Array,
      default: []
    },
    followings: {
      type: Array,
      default: []
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
