const passport = require('passport');
const User = require('../models/user.js')

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

//creates a mongoose model called user
function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });


  //standard for express error firts then user.
  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error);
      return;
    }
    //store user in the req object itself so that it is accessible by following
    // middleware
    req.user = user;
    next();
  })
}


module.exports = {
  initialize: [ passport.initialize(), passport.session() ],
  register,
  signIn: passport.authenticate('local', {session: true })
}

//in regitster creates a mongoose model called User -> then call register, this is provided
// by passport local mongoose, when you do a user plugin on Schema on model.
// user.register provides three things 1. user 2. the body of the password  3. call back
