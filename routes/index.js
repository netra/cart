var express = require('express');
var router = express.Router();
var controller = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var data = controller.execute();
  res.render('index', data);
  
});

module.exports = router;
