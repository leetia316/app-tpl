var mockData = require('../handleMockData.js');

var get = function (req, res, next) {
    var pn = req.path;
    console.log('req.path: ', pn);
    mockData.getData(pn, function (err, data) {
        if (err) {
            res.send(err);
        }
        res.send(data);
    });
};

var post = function (req, res, next) {
    var pn = req.path;
    var data = res.body.data;
    console.log('req.path: ', pn);
    console.log('req.data: ', data);
    mockData.getData(pn, data, function (err) {
        if (err) {
            res.send(err);
        }
    });
}

module.exports = {
    get: get,
    post: post
};
