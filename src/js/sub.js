/**
 * Created by zyj on 2016/8/18.
 */

function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = "Hello h2 world";
    return element;
}

module.exports = generateText;