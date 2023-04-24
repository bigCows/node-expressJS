const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const userType = {
  username: String,
  password: String,
  age: Number,
  avatar: String,
}

// 配置versionKey参数：在使用cretea方法向数据库添加新数据时不会生成_v字段
// _v用来记录数据更新的历史，每次数据更新都会自动+1
const userModel = mongoose.model('user',new Schema(userType,{versionKey:false}))

module.exports = userModel