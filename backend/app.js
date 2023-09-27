const express = require('express');
const cors = require('cors')
//-----route imports ----//
const customerRouter = require('./routes/customerRoute')
const productsRouter = require('./routes/productsRoute')


const app = express();
app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5174',
    methods: 'GET ,POST'
}
app.use(cors(corsOptions))

//api routes
app.use('/marketplace/api/v1', customerRouter)
app.use('/marketplace/api/v1', productsRouter)

module.exports = app


