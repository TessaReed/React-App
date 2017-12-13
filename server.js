const express = require('express');
const bodyParser = require('body-parser');
//axios allows you to talk to api
const axios = require('axios');
const authMiddleware = require('./middleware/auth')

//create server for api to talk to
const pokapi = axios.create({
  baseURL: 'http://pokeapi.co/api/v2/'
});

//create the server
const server = express();

const moviestest = [
  {
    title: "Mad Max"
  },
];


//Movies Router/ controller
const moviesRouter = require('./routes/movies');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
//look at bodyparser documentation

//mounting route for authMiddleware
server.use('/auth', require('./routes/auth'));

server.use('/movies', moviesRouter);

//tell express that you are using cookies
server.use(require('cookie-parser')());
server.use(authMiddleware.initialize);
server.use(require('express-session')(
  { secret: 'secret', resave: false, saveUninitialized: false}
));

const middleware = {
    getDataFromMockAPI: function(req, res, next){
      return pokapi.get('contest-type/1')
      .then(response => {
      console.log(response.data.name);
    })
    .catch(err => {
      console.log("erro in pokeapi request: ",err);
    })
      next();
    },

    logger: function(req, res, next){
     console.log(new Date(), req.method, req.originalUrl,
     req.body);
     next();
  }
}

//movies API function

function getAllMovies() {
  console.log("Mock API processing request data response");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Object.assign([],moviestest));
    }, 3000);
  }).then((promiserequest) => {console.log("yay!" + JSON.stringify(promiserequest))});
};


//server get root
server.get('/', [
              middleware.getDataFromMockAPI,
              middleware.logger,
            ], function (req,res){
  res.status(200).end();
});

//you need to render

const port = 7000;
server.listen(port, () => {
  console.log(`Movies API Server running on ${port}`);
});
