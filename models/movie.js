const mongoose = require('./base')
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = mongoose.Schema({
  body: String
})
//like in rails want to specify a schemma
const movieSchema = mongoose.Schema ({
  title: String,
  yearReleased: Number,
  lead: String,
  comments: [CommentSchema], //comments is specific to each movie so its a subdocument.
  director: {type: ObjectId, ref: 'Person'} //look in Mongoose doc under population
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
