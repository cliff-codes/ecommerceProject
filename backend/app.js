const express = require('express');
//-----route imports ----//
const customerRouter = require('./routes/customerRoute')

const app = express();
app.use(express.json())

//api routes
app.use('/marketplace/api/v1', customerRouter)

module.exports = app


