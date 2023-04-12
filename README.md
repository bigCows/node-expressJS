## express 安装配置
- npm install -g express-generator  安装express生成器

- express --view=ejs 基于express生成器创建ejs项目

## 连接MongoDB

- 1、在MongoDb安装目录下的bin目录下打开powershell,运行 ./mongod.exe --dbpath=项目中db文件夹路径
  - eg:  ./mongod.exe --dbpath=D:\node-expressJS\db

- 2、再次打开powershell，运行mongosh，进入mongoshell命令行即可使用mongoDB相关命令

## mongoDB数据库相关命令

- 2.1、show dbs 查询所有数据库
- 2.2、use mxf_dbs 使用use命令创建数据库
- 2.3、db.dropDatabase() 删除数据库
- 2.4、db.createCollection('users') 向数据库中里插入名为users的表
- 2.5、db.getCollectionNames() 获得当前数据库中所有表名
- 2.6、db.users.drop({name:xx}) 删除表中name为xx的字段
- 2.7、db.users.insert({name:22,age:33},{name:22,age:33},{name:22,age:33}) 向users表中插入单条或多条数据
- 2.8、db.users.deleteOne({age:22}) 删除表中符合该条件的数据，如果匹配到了多个age为22的，只删除第一个
- 2.9、db.users.deleteMany({name:22},{name:23})
- 2.10、db.users.updateOne({myname:22},{$set:{age: 19}}) 将name表中myname为22的数据，age修改为19，如果匹配到了多个age为22的，只修改第一个
  - $set:设置该字段
  - $inc:给目标字段的值做加法操作

- 2.11、db.users.find({age:{$gt:20}}) 在users中查找age字段大于20的数据
- 2.12、db.users.find({age:{$gte:20}}) 在users中查找age字段大于等于20的数据
- 2.13、db.users.find({age:{$lt:20}}) 在users中查找age字段小于20的数据
- 2.14、db.users.find({age:{$lte:20}}) 在users中查找age字段小于等于20的数据
- 2.15、db.users.find({},{age: 1}) 返回users表中所有age字段的数据
- 2.16、db.users.find({},{age: 0}) 返回users表中所有的数据，去除每条数据中的age
- 2.17、db.users.find().sort({age:1}) 返回users表中age字段按照从小到大排列，-1为从大到小
- 2.18、db.users.find().limit(4) 返回users表中的前4条数据 
- 2.19、db.users.find().skip(4) 返回users表中的最后4条数据

## 分页相关
- 计算公式： (pagenum - 1) * pageSize
  
- db.users.find().sort({age:1}).skip((2-1) * 3).limit(3)--- 返回正序排列数据，每页3条

- db.users.find({$or:[{age:22},{age:33}]}) 返回所有数据中age要么是22，要么是33的数据
- db.users.find({age:1}).count()  返回符合查询条件的数据总数

