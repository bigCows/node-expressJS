
const userService = require('../services/user-service')
const commonMethod = require('../common/return-data')
const JWT = require('../utils/jwt')
const fs = require('fs')
const path = require('path')

const userController = {
  getFavicon: (req,res,next) => {
    try {
      res.header('Content-Type','image/png')
      const icon =  fs.readFileSync(`${path.join(path.resolve(),'public/images/boy-icon.png')}`)
      res.send(icon)
    } catch (error) {
      next(error)
    }
  },

  /**
   * 
   * @api {post} /api/users 登录
   * @apiName  login
   * @apiGroup usersGroup
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} username 用户名
   * @apiParam  {String} password 密码
   * @apiParam  {String} age 年龄
   * 
   * @apiSuccess (200) {Object} data 请求成功返回的数据
   * 
   * @apiParamExample  {type} Request-Example:
   * {
   *     username: 'mxf'
   *     password: '123456'
   *     age : '20'
   * }
   * 
   * 
   * @apiSuccessExample {Object} Success-Response:
   * {
   *    data: null, 
   *    errcode: 0,
   *    errmsg: '登录成功'
   * }
   * 
   * 
   */

  addUser: async (req,res,next) => {
    try {
      const {username,password,age} = req.body
      console.log(req.file,'req.file');
      const avatar = req.file ? `uploads/${req.file.filename}` : 'images/boy-icon.png'
      await userService.addUser(username,password,age,avatar)
      res.send({ok:1})
    } catch (error) {
      next(error)
    }
  },

  /**
   * 
   * @api {put} /users/:id 更新用户信息
   * @apiName 更新用户信息put
   * @apiGroup usersGroup
   * @apiVersion  1.0.0
   * 
   * 
   * @apiParam  {String} id 用户id
   * 
   * @apiSuccess (200) {Object} data 更新成功返回的数据
   * 
   * @apiParamExample  {String} Request-Example:
   * {
   *     http://localhost:3000/users?id='xxxx'
   * }    
   * 
   * 
   * 
   * @apiSuccessExample {Object} Success-Response:
   * {
   *     data: null,
   *     errcode: 0,
   *     errmsg: '更新成功'  
   * }
   * 
   * 
   */


  updateUser: async (req,res,next) => {
    try {
      const {username,password,age} = req.body
      await userService.updateUser(req,username,password,age)
      res.send({errcode:0,errmsg:'更新成功',data:null})
    } catch (error) {
      next(error)
    }
  },
  userList: async (req,res,next) => {
    try {
      console.log('list');
      const {pagesize,pagenum} = req.query
      const data = await userService.userList(pagesize,pagenum)
      res.send(data)
    } catch (error) {
      next(error)
    }
  },
  deleteUser: async (req,res,next) => {
    try {
      const {id} = req.query
      await userService.deleteUser(id)
      res.send({tips:'删除成功'})
    } catch (error) {
      next(error)
    }
  },
  loginUser: async(req,res,next) => {
    const { username, password } = req.body
    const data = await userService.loginUser(username,password)
    if(data.length) {
      // 登录成功，设置session
      // req.session.user = ['mxf_session'];
      const userData = data[0]._doc
      console.log(userData,'userData');
      const token = JWT.encrypt({id:userData._id,username:userData.username},'1h')
      res.header('Authorization',token)
      res.send(commonMethod.returnData(0,'登录成功',[]))
    } else {
      res.send({code: -1,message:'登录失败，请检查用户名或密码是否正确',data:[]})
    }
  }
}

module.exports = userController
