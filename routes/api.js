var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  db('movies').select('*').then(movies => {
    console.log(movies);
    res.json(movies);
  });
})

module.exports = router;
