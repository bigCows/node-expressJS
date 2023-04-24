var express = require('express');
var router = express.Router();
const userModel = require('../model/user-model')
const userController = require('../controllers/user-controller')
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/' })

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users',upload.single('avatar'),userController.addUser)

router.put('/users/:id',userController.updateUser)

router.get('/users',userController.userList)

router.delete('/users',userController.deleteUser)

router.post('/login',userController.loginUser)

module.exports = router;
