const express          = require('express');
const app              = express();
const bodyParser       = require('body-parser');
const methodOverride   = require('method-override');
// require our controller
const fruitsController = require('/controllers/fruits');

// setting up the middle ware
// middleware our function that happens sycronously
// in the request from the client 
app.use(bodyParser.urlencoded([extend: false]));
app.use(methodOverride('_method'));



app.use('fruits', fruitsController)

app.get('/', (req, res) =>{
  res.send('this is the index page')
});

// this will be our data aka our model
const fruits = ['apple', 'banna', 'pineapple'];


app.get('/fruits', (req, res) =>{
  res.send(fruits);
})

// query params is extra stuff we can put in our url for
// our server to  dynamicaly read

// query param - is a variable that we can capture in the url
app.get('/fruits/:index', (req, res) => {
  console.log(req.params);
  res.send(fruits[req.params.index]);
})


app.listen(3000, () => {
  console.log('we are listening Stephen');
});
