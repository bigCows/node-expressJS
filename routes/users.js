var express = require('express');
var router = express.Router();
const userModel = require('../model/user-model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.cookies,'xxx');
  res.send('respond with a resource');
});

router.post('/login',async (req,res,next) => {
  try {
    const {username,password,age} = req.body
    const data = await userModel.create({username,password,age})
    console.log(data);
    res.send({ok:1})
  } catch (error) {
    next(error)
  }
})

router.post('/update/:id',async (req,res,next) => {
  try {
    const {username,password,age} = req.body
    const data = await userModel.updateOne({_id:req.params.id},{username,password,age})
    console.log(data);
    res.send({errcode:0,errmsg:'更新成功',data:null})
  } catch (error) {
    next(error)
  }
})

router.get('/list',async (req,res,next) => {
  try {
    const {pagesize,pagenum} = req.query
    const data = await userModel.find({},{password: 0}).sort({age:1}).skip((pagenum - 1) * pagesize).limit(pagesize)
    res.send(data)
  } catch (error) {
    next(error)
  }
})

router.get('/delete',async (req,res,next) => {
  try {
    console.log(req.query);
    const {id} = req.query
    const data = await userModel.deleteOne({_id:id})
    console.log(data);
    console.log('123');
    res.send({tips:'删除成功'})
  } catch (error) {
    console.log(error);
    next(error)
  }
})

module.exports = router;
