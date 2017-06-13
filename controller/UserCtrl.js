var Model = require('../model/UserModel');

module.exports = {
  getUserPage(req, res) { // 获取首页页面
    Model.getList(function (err, users) {
      if (err) throw err;
      res.render('index.ejs', { users: users });
    });
  },
  showInfoPage(req, res) { // 展示用户信息页面
    Model.getUserById(req.query.id, function (err, info) {
      if (err) throw err;
      res.render('showInfo.ejs', { user: info[0] });
    });
  },
  deleteUserById(req, res) { // 根据id删除用户信息
    Model.deleteUser(req.query.id, function (err, result) {
      if (err) throw err;
      if (result.affectedRows === 1) {
        Model.getList(function (err, list) {
          if (err) throw err;
          res.json({ users: list });
        });
      }
    });
  },
  addUser(req, res) { // 添加英雄信息
    Model.AddUser(req.body, function (err, result) {
      if (err) throw err;
      Model.getList(function (err, list) {
        res.json({
          err_code: 0,
          users: list
        });
      });
    });
  },
  showEditPage(req, res) { // 展示编辑页面
    Model.getUserById(req.query.id, function (err, userList) {
      res.render('editUser.ejs', { user: userList[0] });
    });
  },
  editUser(req, res){ // 编辑用户信息
    var user = req.body;
    Model.updateUser(user, function(err, result){
      if(err) throw err;
      // 使用 express 框架提供的 response.redirect()方法，来进行跳转
      res.redirect('/');
    });
  }
}