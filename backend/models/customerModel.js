const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
require("dotenv").config()


const customerSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//generating a jwt token for customer
const secretKey = process.env.SECRETKEY

customerSchema.methods.generateAuthToken = async function(){
    const customer = this
    const token = jwt.sign({_id: customer._id.toString()}, secretKey )
    customer.tokens = customer.tokens.concat({token})
    await customer.save()
    return token
}

const Customer = mongoose.model("Customer", customerSchema)
module.exports = mongoose.model(Customer)
