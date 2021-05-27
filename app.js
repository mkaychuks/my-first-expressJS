const express = require('express')
const mongoose = require('mongoose')
const blogRouters = require('./routes/blogRoutes')
require('dotenv/config')

const app = express() // init express

// setting up middlewares
app.use(express.json())

// connecting to mongodb using mongoose
mongoose
  .connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((result) => console.log('Connected to DB'))
  .catch((err) => console.log(err))

// serving routers as middlewares
app.use('/api/v1/', blogRouters)

app.listen(5000, () => {
  console.log('Server listening on port 5000...!!')
})
