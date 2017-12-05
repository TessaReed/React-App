const express = require('express');
const bodyParser = require('body-parser');

//create the server
const server = express();


//Movies Router/ controller
const moviesRouter = require('./routes/movies');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
//look at bodyparser documentation

server.use('/movies', moviesRouter);

//server get root
server.get('/', (req,res) => {
  res.status(404).end();
});

//you need to render

const port = 7000;
server.listen(port, () => {
  console.log(`Movies API Server running on ${port}`);
});
