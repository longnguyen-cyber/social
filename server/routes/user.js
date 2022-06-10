const {
  getAllUsers,
  updateUser,
  deleteUser,
  getUserById,
  followUser,
  unfollowUser,
  friends
} = require('../controllers/user')

const router = require('express').Router()

//get all users
router.get('/', getAllUsers)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/search', getUserById)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unfollowUser)
router.get('/friends/:id', friends)
module.exports = router
