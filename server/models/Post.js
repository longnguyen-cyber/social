const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    content: {
      type: String,
      max: 100
    },
    img: {
      type: String
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Post', PostSchema)
