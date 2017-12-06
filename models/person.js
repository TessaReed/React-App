const mongoose = require('./base.js')

const PersonSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

const Person = mongoose.model('Person', PersonSchema);

module.exports = Person
