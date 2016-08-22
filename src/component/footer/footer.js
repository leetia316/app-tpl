/**
 * Created by zhouyongjia on 2016/8/19.
 */

require('./footer.scss');

var headerTpl = require('./footer.hbs');
var data = {words: "it is handlebars"};
var html = headerTpl(data);

module.exports = html;