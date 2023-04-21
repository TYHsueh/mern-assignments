const mongoose =require('mongoose');

//create a schema(table in mysql) with stucture for product
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Title is required'],
        minLength: [3,'Title must be 3 or more characters']
    },
    price:{
        type: Number,
        required: [true, 'Orice is required']
    },
    desc:{
        type: String,
        required: [true, 'Description is required'],
        minLength: [3,'Title must be 3 or more characters']
    }
}, {timestamps: true});

//create constructor function for model to store in variable "Product"
const Product = mongoose.model('Product', productSchema);

//export
module.exports = Product;