const Product = require('../models/product.model');

//introduce mongoDB methods(functions) and promise
//get all product
module.exports.findAllProducts = (req, res) =>{
    Product.find()
        .then((allProducts) =>{
            res.json({product: allProducts})
        })
        .catch((err)=>{
            res.json({message: 'Something went wrong', error: err})
        })
};

//get one product
module.exports.findOneProduct = (req, res) =>{
    Product.findOne({_id:req.params.id})
    .then((oneProduct) => {
        res.json({product:oneProduct})
    })
    .catch((err) =>{
        res.json({message: "Something went wrong", error:err})
    });
}

//create new product
module.exports.createProduct = (req, res) =>{
    Product.create(req.body)
    .then((newProduct) =>{
        res.json({product:newProduct})
    })
    .catch((err) =>{
        res.status(400).json(err)
    });
}

//update product
//it is done based on the model we set up, if the key:value pair doesn't exist then it will return nothing changed
//can only update one or several key:value pair in the document(object)
module.exports.updateProduct =(req, res) =>{
    Product.findOneAndUpdate(
        {_id: req.params.id},// get the one we want to update
        req.body, //update info
        {new: true, runValidators: true} //{new:ture} let the updated show information return as "updateProduct". Without it the updatedProduct will still be the original product
    )
    .then((updateProduct) =>{
        res.json({product: updateProduct})
    })
    .catch((err) =>{
        res.status(400).json(err)
    });
}

//delete product
module.exports.deleteOneProduct = (req, res) =>{
    //.deleteOne: Deletes the first document that matches conditions from the collection
    Product.deleteOne({_id:req.params.id})
    .then(result =>{
        res.json({result:result})
    })
    .catch((err) =>{
        res.json({messsage: "Something went wrong", error: err})
    });
}