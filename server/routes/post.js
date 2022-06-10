const {
  createPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPostsUser
} = require('../controllers/post')

const router = require('express').Router()

router.get('/profile/:username', getAllPostsUser)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router
