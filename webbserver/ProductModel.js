const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    productType: String,
    productNumber: Number
});
  
const Product = mongoose.model('Product', productSchema);


exports.createProduct = (name, productType, productNumber) => {
    var person = new Person({
        name: name, 
        productType: productType, 
        productNumber: productNumber 
    })

    return product
}