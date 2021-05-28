const Blog = require('../models/blog') // importing the blog model

// pulling the total number of blogs
const blogHome = (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => console.log(err))
}

// creating a new blog in json format
const blogCreate = (req, res) => {
  const newBlog = new Blog({
    title: req.params.title,
    snippet: req.params.snippet,
    body: req.params.body,
  })

  newBlog
    .save()
    .then((result) => {
      res.status(201).json({ success: true, data: result })
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = { blogHome, blogCreate }
