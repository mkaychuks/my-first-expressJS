const { Router } = require('express')
const express = require('express')
const { blogHome, blogCreate } = require('../controllers/blogController')

const router = Router()

// setting up the middleware hopefully
router.use(express.json())

router.get('/', blogHome) // handling home GET requests
router.post('/blog', blogCreate)

module.exports = router
