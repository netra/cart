var express = require('express');
var router = express.Router();
var controller = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = controller.execute();
  res.render('index', data);
  
});

module.exports = router;