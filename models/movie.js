const mongoose = require('./base')
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = mongoose.Schema({
  body: String
})

const person = {
  type: ObjectId, ref:'Person'
}

//like in rails want to specify a schemma
const MovieSchema = mongoose.Schema ({
  title: String,
  yearReleased: Number,
  lead: String,
  comments: [CommentSchema], //comments is specific to each movie so its a subdocument.
  director: {type: ObjectId, ref: 'Person'}, //look in Mongoose doc under population
  cast: [{actor: person, character: person}],
  crew: [{person: person, ref: String }]
});


const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
