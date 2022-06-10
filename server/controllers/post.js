const Post = require('../models/Post')
const User = require('../models/User')

const getAllPostsUser = async (req, res) => {
  const username = req.params.username
  try {
    const user = await User.findOne({ username })
    const posts = await Post.find({ userId: user._id })
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body)
    const post = await newPost.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.userId === req.body.userId) {
      await Post.updateOne({ $set: req.body })
      res.status(200).json({ message: 'Post updated' })
    } else {
      res.status(401).json({ message: 'Unauthorized' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

const deletePost = async (req, res) => {
  //convert id to objectId
  try {
    const post = await Post.findById(req.params.id)
    if (post) {
      await Post.deleteOne()
      res.status(200).json({ message: 'Post deleted' })
    } else {
      res.status(401).json('Unauthorized')
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = {
  getAllPostsUser,
  createPost,
  getPostById,
  updatePost,
  deletePost
}
