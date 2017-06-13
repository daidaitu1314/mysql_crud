var path = require('path');
var express = require('express');
var ejs = require('ejs');
var userRouter = require('./routers/userRouter');
var bodyParser = require('body-parser');

var app = express();

// 设置模板引擎
// app.set('view engine', 'ejs');
ejs.delimiter = '?';
app.engine('ejs', ejs.renderFile);

// 添加解析 request 请求的中间件
app.use(bodyParser.urlencoded({ extended: false }));

// 注册路由
app.use(userRouter);
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000');
});