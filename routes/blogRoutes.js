const { Router } = require('express')
const { blogHome, blogCreate } = require('../controllers/blogController')

const router = Router()

router.get('/', blogHome) // handling home GET requests
router.post('/bloghomepage', blogCreate)

module.exports = router
