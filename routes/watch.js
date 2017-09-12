var express = require('express');
var router = express.Router();
var db = require('../db');

// Get Watch List
router.get('/', function(req, res, next) {
  db('watch').select('*').then(watch => {
    res.json(watch);
  });
})

// Add to Watch List
router.post('/add', function(req, res, next) {
  var watch = {
    watch_title: req.body.title,
    watch_img: req.body.img,
    movie_id: req.body.id
  }
  db('watch').insert(watch).then(() => {
    res.send('success');
  });
})

// Remove From Watch List
router.delete('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db('watch').del('*').where({id}).then(() => {
    res.send('success')
  });
})

module.exports = router;
