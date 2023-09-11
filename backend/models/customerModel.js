const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()


const customerSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    avatar: {
        type: Buffer
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            } 
        }
    ]
})
//sanitizing the customer info returned to the client.
customerSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password;
        return ret;
    }
});

//generating a jwt token for customer
const secretKey = process.env.SECRETKEY

customerSchema.methods.generateAuthToken = async function(){
    const customer = this
    const token = jwt.sign({_id: customer._id.toString()}, secretKey )
    customer.tokens = customer.tokens.concat({token})
    await customer.save()
    return token
}

customerSchema.statics.findByCredentials = async (email,password) => {
    const customer = await Customer.findOne({email})
    if(!customer) throw new Error("Email or password is incorrect")

    const isMatch = await bcrypt.compare(password, customer.password)
    if(!isMatch) throw new Error("Email or password is incorrect")
    return customer
}

const Customer = mongoose.model("Customer", customerSchema)
module.exports = Customer
