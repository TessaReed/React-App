const mongoose = require('./base.js')

const personSchema = mongoose.Scehema({
  firstName: String,
  lastName: String,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person
