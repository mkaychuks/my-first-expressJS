const Blog = require('../models/blog') // importing the blog model

// pulling the total number of blogs
// const blogHome = (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.status(200).json({ success: true, data: result })
//     })
//     .catch((err) => console.log(err))
// }

const blogHome = async (req, res) => {
  try {
    const blogs = await Blog.find()
    res.status(200).json({ success: true, data: blogs })
  } catch (error) {
    console.log(error)
  }
}

// creating a new blog in json format
// const blogCreate = (req, res) => {
//   const newBlog = new Blog({
//     title: req.body.title,
//     snippet: req.body.snippet,
//     body: req.body.body,
//   })

//   newBlog
//     .save()
//     .then((result) => {
//       res.status(201).json({ success: true, data: result })
//     })
//     .catch((err) => {
//       console.log({ success: false, message: err })
//     })
// }

const blogCreate = async (req, res) => {
  try {
    const newBlog = new Blog({
      title: req.body.title,
      snippet: req.body.snippet,
      body: req.body.body,
    })

    const saveBlog = await newBlog.save()
    res.status(201).json({ success: true, data: saveBlog })
  } catch (error) {
    console.log({ success: false, message: error })
  }
}

// pulling a single blog post
// const blogSingle = (req, res) => {
//   Blog.findById(req.params.id)
//     .then((result) => {
//       res.status(200).json({ success: true, data: result })
//     })
//     .catch((err) => res.status(404).json({ success: false, message: err }))
// }

const blogSingle = async (req, res) => {
  try {
    const singleBlog = await Blog.findById(req.params.id)
    res.status(200).json({ success: true, data: singleBlog })
  } catch (error) {
    res.status(404).json({ success: false, message: err })
  }
}

// deleting an existing blog post
// const blogDelete = (req, res) => {
//   Blog.findByIdAndDelete({ _id: req.params.id })
//     .then((result) =>
//       res.status(200).json({
//         success: true,
//         message: 'The post has been deleted successfully',
//       })
//     )
//     .catch((err) => res.status(401).json({ success: true, message: err }))
// }

const blogDelete = async (req, res) => {
  try {
    const toDelete = await Blog.findByIdAndDelete({ _id: req.params.id })
    res.status(200).json({
      success: true,
      message: 'The post has been deleted successfully',
      data_removed: toDelete,
    })
  } catch (error) {
    res.status(401).json({ success: true, message: error })
  }
}

// updating an existing blog post
// const blogUpdate = (req, res) => {
//   Blog.updateOne(
//     { _id: req.params.id },
//     {
//       $set: {
//         title: req.body.title,
//         snippet: req.body.snippet,
//         body: req.body.body,
//       },
//     }
//   )
//     .then((result) => {
//       res.status(201).json({
//         success: true,
//         message: 'Successfully Updated',
//         data: result,
//       })
//     })
//     .catch((err) => res.status(401).json({ success: false, message: err }))
// }

const blogUpdate = async (req, res) => {
  try {
    const updatePost = await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          snippet: req.body.snippet,
          body: req.body.body,
        },
      }
    )
    res.json(updatePost)
  } catch (err) {
    res.json(err)
  }
}

module.exports = { blogHome, blogCreate, blogSingle, blogDelete, blogUpdate }
