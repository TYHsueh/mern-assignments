//import Joke model (as table in mysql)
const Joke = require('../models/joke.model');

// exports function that get all jokes
module.exports.findAllJokes =(req, res) =>{
    Joke.find()
    .then((allJokes) =>{
        res.json({joke:allJokes})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
};

// get one joke
module.exports.findOneJoke =(req, res)=>{
    Joke.findOne({_id: req.params.id})
    .then((oneJoke)=>{
        res.json({joke:oneJoke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
};

// create a joke
module.exports.createJoke=(req, res) =>{
    Joke.create(req.body)
    .then((newJoke)=>{
        res.json({joke:newJoke})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
};

//update existing joke
module.exports.updateJoke =(req, res) =>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidation: true}
    )
    .then((updatedJoke) =>{
        res.json({joke:updatedJoke})
    })
    .catch((err) =>{
        res.json({message:"Something went wrong", error: err})
    })   
};

//delete joke
module.exports.deleteJoke =(req, res)=>{
    Joke.deleteOne({_id:req.params.id})
    .then(result =>{
        res.json({result:result})
        console.log(result)
    })
    .catch((err) =>{
        res.json({message:"Something went wrong", error: err})
    })
}