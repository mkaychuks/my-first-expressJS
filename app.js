const express = require('express')

const blogRouters = require('./routes/blogRoutes')

const app = express() // init express

// setting up middlewares
app.use(express.json())

// serving routers as middlewares
app.use('/api/v1/', blogRouters)

app.listen(5000, () => {
  console.log('Server listening on port 5000...!!')
})
