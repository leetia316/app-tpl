/**
 * Created by zhouyongjia on 2016/8/22.
 */


var index = require('./routes/index');
var users = require('./routes/users');

module.exports = function (app) {

    /* GET index. */
    app.get('/', index);

    /* GET users listing. */
    app.get('/user/userlist', users);

};