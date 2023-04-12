
const userService = require('../services/user-service')

const userController = {
  addUser: async (req,res,next) => {
    try {
      const {username,password,age} = req.body
      await userService.addUser(username,password,age)
      res.send({ok:1})
    } catch (error) {
      next(error)
    }
  },
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
  }
}

module.exports = userController
