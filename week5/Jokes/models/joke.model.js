const mongoose= require('mongoose');

//create a Schema for joke and describe the structure of collection(table in mysql). Like the blueprint of object
const JokeSchema = new mongoose.Schema({
    title: {type: String},
    punchLine: {type: String}
});
//create a constructor function for our model and store in variable 'Joke'
const Joke = mongoose.model('Joke', JokeSchema);

//export Joke to allow using in other files
module.exports = Joke;
