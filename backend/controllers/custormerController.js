

const registerCustomer = async(req,res) => {
    try {
        await res.json("customer created")
        console.log("triggered")
    } catch (error) {
        res.status(400).json("could'nt create customer")
    }
}

module.exports = {registerCustomer}