const mongoose = require('./base');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String
})

const User = mongoose.model('User', UserSchema);

module.export = User;
