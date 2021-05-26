const { Router } = require('express')
const { blogHome, homePage } = require('../controllers/blogController')

const router = Router()

router.get('/', blogHome) // handling home GET requests
router.get('/bloghomepage', homePage)

module.exports = router
