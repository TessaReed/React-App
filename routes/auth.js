const express = require('express');
const router = new express.Router();

const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

//creating the route for authentication.
// want middleware just on the post end point
router.post('/register',
  authMiddleware.register,
  (req, res) => {
    res.json({ user: req.user })
    }
);

module.exports = router;
