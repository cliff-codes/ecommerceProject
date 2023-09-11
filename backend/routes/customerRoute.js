const express = require('express')
const Router = express.Router()
const {registerCustomer, loginCustomer} = require('../controllers/custormerController')

Router.route('/register').post(registerCustomer)
Router.route('/login').post(loginCustomer)

module.exports = Router
