const mongoose = require('./base');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String
  // id: integer
});

//you use a plugin because you use passport to create your user

UserSchema.plugin(passportLocalMongoose, {
  usernameField:'email',
  usernameLowerCase: true,
  session: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
