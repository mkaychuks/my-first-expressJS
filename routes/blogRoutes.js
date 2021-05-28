const { Router } = require('express')
const { blogHome, blogCreate } = require('../controllers/blogController')

const router = Router()

router.get('/', blogHome) // handling home GET requests
router.get('/bloghomepage', blogCreate)

module.exports = router
