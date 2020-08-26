// 引入http
var http = require('http');
// 创建http服务
http.createServer(function (request, response) {
    // 设置响应头
  response.writeHead(200, {'Content-Type': 'text/plain'});
//   返回响应数据
  response.end('Hello World');
//   端口号监听
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

app.get('/products', (req, res) => res.json([{ id: 1, name: 'a product' }]))