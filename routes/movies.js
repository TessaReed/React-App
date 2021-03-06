const express = require('express');
const Movie = require('../models/movie');
const Person = require('../models/person');
const router = express.Router();

const authorize = (req, res) => {
  if (req.user) {
      next();
  } else {
    res.status(403).end();
  }
}


// router.get('/', authorize (req, res) => {
// include authorize in the get request if you want to authorize

router.get('/', (req, res) => {
  Movie.find()
  .populate('director')
  .populate('crew.person')
  .populate('cast.actor')
  .populate('cast.character')
  .then(movies => res.json(movies))
  .catch(error => res.json({error}))
});

//the api now has a subdocument & relationship document
//subdocument are not shared and related are shared.


router.post('/', (req, res) => {
  Movie.create(req.body)
  .then((movie) => {
    res.status(201).json(movie).end();
  })
  .catch(error => res.json({error}))
});

// router.post('/', (req, res) => {
//   Movie.create({ title: "Reed", yearReleased: 2022, lead: "hello" }).then(movies => {
//     console.log({ movies })
//     res.json({ movies })
//   });
// });




//need to include http status
//when you do a create you create a resource/model & you get a redirect
//reason being have data, submit form & gets created, so you do a redirect somewhere else so doesnt create again


module.exports = router;

//native node application
