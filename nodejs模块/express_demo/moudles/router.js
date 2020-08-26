const URL = require('url')

const path = require('path')

const basePath = "./projectDemo"

const fs = require('fs')

function routerHandle(url, type, response){
    var data = fs.readFileSync(basePath + url);

    if(type === 'js'){
        response.writeHead(200, {'Content-Type': 'application/x-javascript;charset="utf-8"'});

    }else if(['png', 'gif', 'jpg'].indexOf(type) >= 0){
        response.writeHead(200, {'Content-Type': 'image/' + type + ';charset="utf-8"'});//图片
        // response.end(basePath + url)
    }else if(type === 'css'){
        response.writeHead(200, {'Content-Type': 'text/css;charset="utf-8"'});

    }else if(type === 'html'){
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
    }
    response.end(data)

}

let app = {
    statictis(req, res, type){
        let {url} = req
        // console.log('statictis', type, res)
        routerHandle(url, type, res)
    },
    index(req, res){
        routerHandle('/index.html', 'html', res)
        console.log('index')
    },
    register(req, res){
        console.log('register')
    },
    login(req, res){
        console.log('login')
    },
    news(req, res){
        console.log('news')
    },
    detail(req, res){
        console.log('detail')
    },
    error(req, res){
        console.log('error')
    },

}


module.exports = app