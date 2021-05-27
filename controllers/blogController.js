const Blog = require('../models/blog') // importing the blog model

const blogHome = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
}

const homePage = (req, res) => {
  res.status(200).json({ success: true, message: 'Welcome to the whole world' })
}

module.exports = { blogHome, homePage }
