const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();


router.get('/', (req, res) => {
  Movie.find().then(movies => {
  res.json({ movies });
  });
});


router.post('/', (req, res) => {
  Movie.create(req.body)
  .then((movie) => {
    res.status(201).json(movie).end();
  })
})

// router.post('/', (req, res) => {
//   Movie.create({ title: "Reed", yearReleased: 2022, lead: "hello" }).then(movies => {
//     console.log({ movies })
//     res.json({ movies })
//   });
// });




//need to include http status
//when you do a create you create a resource/model & you get a redirect
//reason being have data, submit form & gets created, so you do a redirect somewhere else so doesnt create again



// Movie.create({ title: 'small', yearReleased: 2017, lead: 'hello' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// })
//this is the resolve function look at docs of find in mongoose.
//READ about find in mongoose

module.exports = router;

//native node application
