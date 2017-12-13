const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.js');


//creating the route for authentication.
// want middleware just on the post end point
router.post('/register',
  authMiddleware.register,
  (req, res) => {
    res.json({ user: req.user })
    }
);

// sign in a user
router.post('/signin',
  authMiddleware.signIn,
  (req, res) => {
    res.json({ user: req.user })
    }
);


// protected movies?
router.get('/movies',
  authMiddleware.signIn,
  (req, res) => {
    res.json({ user: req.user })
    }
);

module.exports = router;
