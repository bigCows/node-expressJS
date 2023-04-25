define({ "api": [
  {
    "type": "put",
    "url": "/users/:id",
    "title": "更新用户信息",
    "name": "______put",
    "group": "usersGroup",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    http://localhost:3000/users?id='xxxx'\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>更新成功返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    data: null,\n    errcode: 0,\n    errmsg: '更新成功'  \n}",
          "type": "Object"
        }
      ]
    },
    "filename": "controllers/user-controller.js",
    "groupTitle": "usersGroup"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "登录",
    "name": "login",
    "group": "usersGroup",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>年龄</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    username: 'mxf'\n    password: '123456'\n    age : '20'\n}",
          "type": "type"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>请求成功返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   data: null, \n   errcode: 0,\n   errmsg: '登录成功'\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "controllers/user-controller.js",
    "groupTitle": "usersGroup"
  }
] });
