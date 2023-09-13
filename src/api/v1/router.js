const express = require('express')
const { register } = require('./user/controller')

const router = express.Router()

router.post("/register", register)

module.exports = router