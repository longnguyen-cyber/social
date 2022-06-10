const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const fs = require('fs')

const authRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 6000
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected'))
  .catch((e) => console.log(e))

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }))

//middlewares
app.use(helmet())
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', true)
  next()
})
app.use('/images', express.static(path.join(__dirname, 'public/images')))
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  }
})

const upaload = multer({ storage: storage })
app.post('/upload', upaload.single('image'), (req, res) => {
  try {
    return res.status(200).json('file uploaded successfully')
  } catch (error) {
    res.send(error)
  }
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

//routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/login', loginRoute)
app.use('/api/posts', postRoute)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
