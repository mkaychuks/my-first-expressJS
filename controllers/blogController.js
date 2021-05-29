const Blog = require('../models/blog') // importing the blog model

// pulling the total number of blogs
const blogHome = (req, res) => {
  Blog.find()
    .then((result) => {
      res.status(200).json({ success: true, data: result })
    })
    .catch((err) => console.log(err))
}

// creating a new blog in json format
const blogCreate = (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  })

  newBlog
    .save()
    .then((result) => {
      res.status(201).json({ success: true, data: result })
    })
    .catch((err) => {
      console.log({ success: false, message: err })
    })
}

// pulling a single blog post
const blogSingle = (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.status(200).json({ success: true, data: result })
    })
    .catch((err) => res.status(404).json({ success: false, message: err }))
}

// updating or patching up and existing blog post
const blogUpdate = (req, res) => {
  Blog.updateOne({ _id: req.params.id })
}

module.exports = { blogHome, blogCreate, blogSingle }
