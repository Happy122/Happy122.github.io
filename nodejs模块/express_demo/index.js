var http = require('http');
const router = require('./moudles/router')
const URL = require('url')





http.createServer(function (request, response) {
    let { url } = request;
    // console.log(URL.parse(url))
    let routers = Object.keys(router);
    let str = url.slice(1)
    // console.log(routers)
    let arr = [
        '/',
        '/favicon.ico'
    ]
    if(url ==='/favicon.ico' ) return
    if(url.indexOf('.')!==-1){
        router.statictis(request,response,url.split('.')[1])
    }
    /* if(routers.indexOf(str) !== -1){
        router[str](request, response)
    }else{
        router.error(request, response)
    } */
    // console.log(url)
  /* response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World'); */
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');