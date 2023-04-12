var express = require('express');
var router = express.Router();
const userModel = require('../model/user-model')
const userController = require('../controllers/user-controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.cookies,'xxx');
  res.send('respond with a resource');
});

router.post('/users',userController.addUser)

router.put('/users/:id',userController.updateUser)

router.get('/users',userController.userList)

router.delete('/users',userController.deleteUser)

router.post('/login',userController.loginUser)

module.exports = router;
