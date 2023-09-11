const bcrypt = require("bcrypt")
const Customer = require("../models/customerModel")

const registerCustomer = async(req,res) => {
    try {
        const {email, password} = req.body 

        //hashing user password
        const saltRounds = 10
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPassword = await bcrypt.hash(password, salt)

        //new user
        const newCustomer = new Customer({email, password: hashedPassword})
        //generate token for the newly created customer
        newCustomer.generateAuthToken()
        res.status(201).send(newCustomer)
    } catch (error) {
        res.status(501).json("could'nt create customer")
    }
}

const loginCustomer = async(req,res) => {
    try {
        const {email, password} = req.body
        const customer = await Customer.findByCredentials(email,password)
        if(customer) {
            res.status(200).send(customer)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {registerCustomer, loginCustomer}