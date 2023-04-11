const express = require("express")
const router = express.Router()
const{registerUser,loginUser,getD} = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/').get(getD)
router.get('/me', protect, getMe)

module.exports = router