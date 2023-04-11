var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


[{name:'zs',age:20},{name:'ls',age:21},{name:'ww',age:22}]

module.exports = router;
