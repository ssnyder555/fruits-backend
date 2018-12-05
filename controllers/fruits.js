const express = require('express');
const router  = express.Router();

// require the models that our controllers needs
const Fruits = require('../models/fruits');

// Index Route
// Shows all the fruits
router.get('/', (req, res) => {
  res.render('index.ejs', {fruits: Fruits});
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});

router.post('/', (req, res) => {
  console.log(req.body, ' this is where info from the schema');
});
