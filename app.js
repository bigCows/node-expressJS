var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var commonMethod = require('./common/return-data')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'mxf_secret_cn-wdi=xt8asv3e+sd0',
  name: 'mxf_system',
  cookie: {
    maxAge: 1000 * 60 * 60
  },
  // 在maxAge时间内，重新设置session后，就会重新计时Cookie的起始时间
  resave: true,
  // 第一次访问就是否生成cookie，但生成cookie没有权限
  saveUninitialized: true

}))

app.use((req,res,next) => {
  // 如果要进入login页面或进行登录操作，不验证session
  if(req.url.includes('login')) {
    return next()
  }
  if(req.session.user) {
    next()
  } else {
    // 如果是接口返回错误码，交给前端拦截器处理
    if(req.url.includes('api')) {
      res.status(401).send(commonMethod.returnData(-1,'登录过期',[]))
    } else {
      // 不是接口，则重定向
      res.redirect('/login')
    }
  }
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
