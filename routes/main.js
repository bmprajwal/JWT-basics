const express = require('express')
const router = express.Router()

const { login, dashboard } = require('../controllers/main')

const authMiddeware = require('../middleware/auth')



router.route('/dashboard').get(authMiddeware, dashboard)
router.route('/login').post(login)

module.exports = router