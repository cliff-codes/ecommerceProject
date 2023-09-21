const express = require('express')
const Router = express.Router()
const { findSearchAndRelatedProducts } = require('../controllers/productsController')

Router.route('/search').get(findSearchAndRelatedProducts)

module.exports = Router
