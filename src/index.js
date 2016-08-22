/**
 * Created by zyj on 2016/8/18.
 */

// 加载样式文件，以style标签打入head标签内。
require('./css/main.css');
require('./css/layout.scss');

// 使用webpack.ProvidePlugin插件暴露jquery为全局变量，所以不需要重复引入
// var $ = require('jquery');


var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';

// 引入js模块，全部合并到一个js文件中
var sub = require('./js/sub');
app.appendChild(sub());
$('#container').append(app);

var home = require('./page/home/home.js');
$('#container').append(home);