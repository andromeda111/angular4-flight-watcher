var express = require('express');
var router = express.Router();
var db = require('../db');

// Get Movie List
router.get('/', function(req, res, next) {

  db('movies').whereNotExists(function() {
    this.select('*').from('watch').whereRaw('movies.id = watch.movie_id');
  }).then(movies => {
    console.log('AFTER JOIN: ' + movies);
    res.json(movies);
  });
})

// Get Watch List
router.get('/watch', function(req, res, next) {
  db('watch').select('*').then(watch => {
    console.log(watch);
    res.json(watch);
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

// Add to Watch List
router.post('/watch/add', function(req, res, next) {
  console.log(req.body);
  var watch = {
    watch_title: req.body.title,
    watch_img: req.body.img,
    movie_id: req.body.id
  }
  db('watch').insert(watch).then(() => {
    res.send('success');
  });
})

// Delete Movie from List
router.delete('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db('movies').del('*').where({id}).then(() => {
    res.send('success')
  })
})

// Remove From Watch List
router.delete('/watch/delete/:id', function(req, res, next) {
  let id = req.params.id
  db('watch').del('*').where({id}).then(() => {
    res.send('success')
  })
})

module.exports = router;
