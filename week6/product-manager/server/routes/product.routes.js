const ProductController = require('../controllers/product.controller');
//the 'app' is where we ganna call all the method
module.exports = app =>{
    app.get('/api/allProducts', ProductController.findAllProducts);
    app.get('/api/allProducts/:id', ProductController.findOneProduct);
    app.post('/api/allProducts/new', ProductController.createProduct);
    app.put('/api/allProducts/:id', ProductController.updateProduct);
    app.delete('/api/allProducts/:id', ProductController.deleteOneProduct);
}