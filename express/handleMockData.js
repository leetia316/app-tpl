/**
 * Created by zhouyongjia on 2016/8/22.
 */

var fs = require("fs");
var path = require('path');
var ROOTPATH = path.join(__dirname, 'mock');

var getData = function (p, cb) {
    var pathName = path.join(ROOTPATH, p + '.json');

    fs.readFile(pathName, "utf8", function (err, data) {
        if (err) {
            return cb && cb(err);
        }
        cb && cb(null, data);
    });
};

var postData = function (p, data, cb) {

    var pathName = path.join(ROOTPATH, p + '.json');

    fs.appendFile(pathName, data,"utf8", function (err) {
        if (err) {
            return cb(err);
        }
        console.log("数据写入成功！");

        //console.log("--------我是分割线-------------")
        //console.log("读取写入的数据！");
        //fs.readFile(pathName, function (err, _data) {
        //    if (err) {
        //        return console.error(err);
        //    }
        //    console.log("异步读取文件数据: ", _data.toString());
        //    cb && cb(null, _data.toString());
        //});

        cb && cb(null, data.toString());
    });
};


postData('/user/userlist', JSON.stringify({
    "id": 222222,
    "msgCode": 22222,
    "data": [
        {"message": "Hello React"},
        {"message": "Hello Webpack"},
        {"message": "Hello Nodejs"},
        {"message": "Hello Express"}
    ]
}), function (err,data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});

module.exports = {
    getData: getData,
    postData: postData
};