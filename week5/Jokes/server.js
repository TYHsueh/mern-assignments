const express = require("express");
const app = express();

//BRINGING OUR CONFIG: 
//calling the mongoose.config and running the connection function    
require("./config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));
//The middleware to handle post request    

//BRINING THE ROUTES: 
//then we store all the routes and functions in JokeRoutes variable
const JokeRoutes = require("./routes/joke.routes");//<- import joke.routes.js
JokeRoutes(app); //<- invoke the function and pass in the express "app" server as paremeter.(since the route only has one parameter)

//short version: 
//'require("./routes/joke.routes")(app);' <= directly import joke.routes.js and pass "app"
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
