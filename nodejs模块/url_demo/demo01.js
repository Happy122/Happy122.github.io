// 引入url
const url = require('url')
// 解析url地址，并返回一个对象
let obj = url.parse('www.baidu.com?age=12&name=qwe')
// console.log(obj)
console.log(url.parse(obj,true).query)