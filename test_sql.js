var express = require('express');
var mysql = require('mysql');

// 创建数据库连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mytest'
});

// 连接数据库
connection.connect();

// 查询数据所有数据
/*connection.query('select * from users', function(err, results, fields){
  console.log(results);
});*/

// 插入1
/*connection.query('insert into users set ?', { name: '尼古拉斯凯奇', age: 54, gender: '男', address: '美国' }, function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});*/

// 插入2
/*connection.query('insert into users (name) values (?)', ['测试'], function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});*/

// 删除1
/*connection.query('delete from users where id=?', [11], function(err){
  if(err) throw err;
});*/

// 使用 in 删除
/*connection.query('delete from users where id in (?,?)', [10, 12], function (err) {
  if (err) throw err;
});*/

// 修改数据
/*connection.query('update users set age=?, gender=?, address=? where id=13', [60, '男', '月球'], function(err, results){
  if(err) throw err;
  console.log(results);
});*/

// 便捷的更改数据的方法
/*var user = {
  id:6,
  age:9,
  name:'OK1'
}
connection.query('update users_copy set ? where id=?', [user, 6], function(err, results){
  if(err) throw err;
  console.log(results);
});*/

var app = express();

app.listen(3000, function () {
  console.log('Server running at http://127.0.0.1:3000');
});