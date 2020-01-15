/*
window对象不但充当全局作用域，而且表示浏览器窗口。
window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度。
内部宽高是指除去菜单栏、工具栏、边框等占位元素后，用于显示网页的净宽高。
*/
console.log('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);
/*
navigator对象表示浏览器的信息，最常用的属性包括：
navigator.appName：浏览器名称；
navigator.appVersion：浏览器版本；
navigator.language：浏览器设置的语言；
navigator.platform：操作系统类型；
navigator.userAgent：浏览器设定的User-Agent字符串
*/
console.log('appName = ' + navigator.appName);
console.log('appVersion = ' + navigator.appVersion);
console.log('language = ' + navigator.language);
console.log('platform = ' + navigator.platform);
console.log('userAgent = ' + navigator.userAgent);
/*
screen对象表示屏幕的信息，常用的属性有：
screen.width：屏幕宽度，以像素为单位；
screen.height：屏幕高度，以像素为单位；
screen.colorDepth：返回颜色位数，如8、16、24。
*/
console.log('Screen size = ' + screen.width + ' x ' + screen.height);
//document对象表示当前页面。
//由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
