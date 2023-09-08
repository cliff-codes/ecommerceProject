const express = require('express')
const Router = express.Router()
const {registerCustomer} = require('../controllers/custormerController')

Router.route('/register').post(registerCustomer)

module.exports = Router
