var express = require('express');
var UserCtrl = require('../controller/UserCtrl');

var router = express.Router();

router.get('/', UserCtrl.getUserPage)
  .get('/showInfo', UserCtrl.showInfoPage)
  .get('/delUser', UserCtrl.deleteUserById)
  .post('/addUser', UserCtrl.addUser)
  .get('/editUser', UserCtrl.showEditPage)
  .post('/editUser', UserCtrl.editUser);

module.exports = router;