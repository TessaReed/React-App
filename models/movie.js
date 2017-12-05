const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/movies'); //default port
const db = mongoose.connection;
//this is a mongoose model. 

//like in rails want to specify a schemma
const movieSchema = mongoose.Schema ({
  title: String,
  yearReleased: Number,
  lead: String
});

const Movie = mongoose.model('Movie', movieSchema);


// const Movies = [
//   {
//     title: "Wonder Woman",
//     year: 2017,
//     Lead: "Gal Gador"
//   }
// ]

module.exports = Movie;
