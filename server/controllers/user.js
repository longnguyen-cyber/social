const User = require('../models/User')

//get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.json({ message: err })
  }
}

//update user
const updateUser = async (req, res) => {
  const { password, email, isAdmin } = req.body
  const id = req.params.id
  const user = await User.find({ email })
  const userId = user[0]._id.toString()
  if (userId === id || isAdmin) {
    if (password) {
      try {
        const salt = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password, salt)
      } catch (error) {
        res.status(500).json({ message: error })
      }
    }
    try {
      await User.findByIdAndUpdate(id, {
        $set: req.body
      })
      res.status(200).json('User updated successfully')
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}

//delete user
const deleteUser = async (req, res) => {
  const id = req.params.id
  const user = await User.find({ _id: id })
  const userId = user[0]._id.toString()

  if (userId === id || isAdmin) {
    try {
      await User.findByIdAndDelete(id)
      res.status(200).json('Acount has been deleted')
    } catch (error) {
      res.status(500).json({ message: error })
    }
  } else {
    return res.status(401).json({ message: 'You can deleted' })
  }
}

//get user by id
const getUserById = async (req, res) => {
  const userId = req.query.userId

  try {
    const user = await User.findById(userId)
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

//make fl
const followUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } })
        await currentUser.updateOne({ $push: { followings: req.params.id } })
        res.status(200).json('user has been followed')
      } else {
        res.status(403).json('you allready follow this user')
      }
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('you cant follow yourself')
  }
}
//make unfl
const unfollowUser = async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id)
      const currentUser = await User.findById(req.body.userId)
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followings: req.body.userId } })
        await currentUser.updateOne({ $pull: { followers: req.params.id } })
        res.status(200).json('user has been followed')
      } else {
        res.status(403).json('you allready follow this user')
      }
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(403).json('you cant follow yourself')
  }
}

const friends = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const friends = await Promise.all(
      user.followings.map(async (following) => {
        return await User.findById(following)
      })
    )

    const listFriends = []
    friends.map((friend) => {
      const { _id, username, email, profilePicture } = friend
      listFriends.push({ _id, username, email, profilePicture })
    })
    console.log(listFriends)
    res.status(200).json(listFriends)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  followUser,
  unfollowUser,
  friends
}
