const axios = require('axios')

const getAllProducts = async() => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = await response.data
        return data
    } catch (error) {
        console.log(`Error fetching products from api: ${error}`)
    }
}

const findSearchAndRelatedProducts = async (req, res) => {
    const { productName } = req.body;
    console.log(productName);
    try {
        const products = await getAllProducts();
        const searchResults = await products.filter(product => product.title.includes(productName)? product : null);
        res.status(200).send(searchResults);
    } catch (error) {
        res.status(500).send(`Error performing search: ${error.message}`);
    } 
}
  

module.exports = {findSearchAndRelatedProducts}