var express = require('express');
var router = express.Router();
var db = require('../db');

// Get Movie List
router.get('/', function(req, res, next) {
  db('movies').select('*').then(movies => {
    console.log(movies);
    res.json(movies);
  });
})

// Post to Movie List
router.post('/add', function(req, res, next) {
  console.log('Inserting: ' + req.body);
  var movie = req.body
  db('movies').insert(movie).then(() => {
    res.send('success');
  });
})

// Delete Movie from List
router.delete('/delete', function(req, res, next) {
  console.log('Delete: ' + req.body);
  let id = req.body.id
  db('movies').delete('*').where({id}).then(() => {
    res.send('success')
  })
})

module.exports = router;
