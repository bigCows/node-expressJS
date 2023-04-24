var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controller') 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/favicon.ico', userController.getFavicon);


module.exports = router;
