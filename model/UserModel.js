var Db = require('./baseDB');

module.exports = {
  getList(callback) { // 获取所有的用户列表
    Db.query('select * from users where isdel=0 order by id', function (err, results) {
      if (err) return callback(err);
      callback(null, results);
    });
  },
  getUserById(id, callback) { // 根据Id获取用户信息
    Db.query('select * from users where id=? and isdel=0', [id], function (err, results) {
      if (err) return callback(err);
      callback(null, results);
    });
  },
  AddUser(user, callback) { // 添加新用户
    Db.query('insert into users set ?', user, function (err, result) {
      if (err) return callback(err);
      callback(null, result);
    });
  },
  updateUser(user, callback) { // 更新用户
    Db.query('update users set ? where id=?', [user, user.id], function (err, result) {
      if (err) return callback(err);
      callback(null, result);
    });
  },
  deleteUser(id, callback){ // 根据用户Id，删除用户信息
    Db.query('update users set isdel=1 where id=?', [id], function(err, result){
      if(err) return callback(err);
      callback(null, result);
    });
  }
}