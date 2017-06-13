var mysql = require('mysql');
var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'mytest'
});

connection.connect();
// 导出创建的MySql连接
module.exports = connection;