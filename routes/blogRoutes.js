const { Router } = require('express')
const {
  blogHome,
  blogCreate,
  blogSingle,
  blogDelete,
} = require('../controllers/blogController')

const router = Router()

router.get('/', blogHome) // handling home GET requests
router.post('/blog', blogCreate) // handling home POST requests
router.get('/:id', blogSingle) // handling home GET requests for single posts
router.delete('/:id', blogDelete) //handling home GET requests for single posts

module.exports = router
