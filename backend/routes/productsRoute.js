const express = require('express')
const Router = express.Router()
const { findSearchAndRelatedProducts } = require('../controllers/productsController')

Router.route('/search').post(findSearchAndRelatedProducts)

module.exports = Router
