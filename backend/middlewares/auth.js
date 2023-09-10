const Customer = require("../models/customerModel")
const jwt = require("jsonwebtoken")

require("dotenv").config()
const secretKey = process.env.SECRETKEY

const token = jwt.sign({email: Customer.email}, secretKey, {expiresIn: "1h"})