const express = require('express');
const app = express();
const port = 8000;
//import cors and invoke it with app.use
const cors= require('cors');
app.use(cors());

//BRINGING OUR CONFIG: 
//calling the mongoose.config and running the connection function    
require("./config/mongoose.config");
// we dont always need to required file as variable. you can require it directly 
//once required, the system will run it (in this case the mongoose.config is to connect to db and no need to return anything)    

app.use(express.json(), express.urlencoded({ extended: true }));
//same as before. the middleware to handle post request    

//BRINING THE ROUTES: 
//then we store all the routes and functions in TvShowRoutes variable
const ProductRoutes =require("./routes/product.routes");
ProductRoutes(app);
// short version: "require('/routes/product.routes')(app);"
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );