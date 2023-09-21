const bcrypt = require("bcrypt")
const Customer = require("../models/customerModel")

const registerCustomer = async(req,res) => {
    try {
        const {email, password} = req.body 
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)

        //new user
        const newCustomer = new Customer({email, password: hashedPassword})
        const customerToken = newCustomer.generateAuthToken()
        await newCustomer.save()
        res.status(201).send({newCustomer,customerToken})
    } catch (error) {
        res.status(501).json("could'nt create customer")
    }
}

const loginCustomer = async(req,res) => {
    try {
        const {email, password} = req.body
        const customer = await Customer.findByCredentials(email,password)
        const customerToken = await customer.generateAuthToken()
        res.status(200).send({customer,customerToken})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {registerCustomer, loginCustomer}