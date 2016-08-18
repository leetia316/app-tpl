/**
 * Created by zyj on 2016/8/18.
 */

// 加载样式文件，以style标签打入head标签内。
require('./css/main.css');
require('./css/layout.scss');

// 引入js模块，全部合并到一个js文件中
var sub = require('./js/sub');


var app = document.createElement('div');

app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);