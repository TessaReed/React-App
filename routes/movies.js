const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();


router.get('/', (req, res) => {
  Movie.find().then(movies => {
  res.json({ movies });
  });
});

router.post('/', (req, res) => {
  Movie.create({ title: "Reed", yearReleased: 2022, lead: "hello" }).then(movies => {
    console.log({ movies })
    res.json({ movies })
  });
});


// Movie.create({ title: 'small', yearReleased: 2017, lead: 'hello' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// })
//this is the resolve function look at docs of find in mongoose.
//READ about find in mongoose

module.exports = router;

//native node application
