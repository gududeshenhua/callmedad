var http =require('http');
var fs = require('fs');
var events = require('events'); 
var createMysql = require('./sqlUtil')
http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
	var data = fs.readFileSync('input.txt');
	var eventEmitter = new events.EventEmitter();
	var connectionHandler = function connneted(){
		console.log('连接成功');
		eventEmitter.emit('data_received') 
	}
	eventEmitter.on("connection",connectionHandler);
	eventEmitter.on("data_received",function(){
		console.log('数据接收成功。');
	})
	eventEmitter.emit('connection');
	console.log("程序接受完毕"); 
	console.log(data.toString()); 
    // 发送响应数据 "Hello World"
    //response.end('Hello World\n');
	response.end(data.toString());  
	createMysql.connectMysql();
}).listen(8888);
console.log('Server running at http://127.0.0.1:8888/');