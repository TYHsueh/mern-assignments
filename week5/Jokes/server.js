const express = require("express");
const app = express();

//BRINGING OUR CONFIG: 
//calling the mongoose.config and running the connection function    
require("./config/mongoose.config");


app.use(express.json(), express.urlencoded({ extended: true }));
//The middleware to handle post request    

//BRINING THE ROUTES: 
//then we store all the routes and functions in TvShowRoutes variable
const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);
//running the function and pass in the app as paremeter(since the route only has one parameter)
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
