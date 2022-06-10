const bcrypt = require('bcrypt')
const User = require('../models/User')
const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email })
    !user && res.status(404).json({ message: 'User not found' })

    const validPassword = await bcrypt.compare(password, user.password)
    !validPassword && res.status(404).json({ message: 'Invalid password' })

    res.status(200).json('login scuccessfully')
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = { login }
