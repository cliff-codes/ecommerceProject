const app = require('./app')
const mongoose = require('mongoose')
require("dotenv").config() 

const password = process.env.PASSWORD
const port  = process.env.PORT

const dbConnect = () => {
    mongoose.connect(`mongodb+srv://simplecodes2580:${password}@cluster0.4cf9zbz.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => { 
        console.error('Error connecting to the database', error)
    });
}

app.listen(port, () => {
    dbConnect()
    console.log('app has started on port' + port)
})