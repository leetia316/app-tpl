/**
 * Created by zhouyongjia on 2016/8/19.
 */

require('./home.scss');


var header = require('../../component/header/header.js');
var footer = require('../../component/footer/footer.js');

var headerTpl = require('./home.hbs');

var data = {
    header: header,
    footer: footer,
    words: 'use header and footer here'
};
var html = headerTpl(data);

module.exports = html;