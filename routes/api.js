var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var stuff = { title: 'Express', name: 'John' }
  res.send(stuff);
});

module.exports = router;
