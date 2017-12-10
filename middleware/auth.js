const passport = require('passport');
const User = require('../models/user.js')

function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName

  });

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
  register 
}
