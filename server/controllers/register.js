const User = require('../models/User')

const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const { username, email, password } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashPassword
    })

    const user = await newUser.save()
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json(error)
    console.log(error)
  }
}

module.exports = { register }
