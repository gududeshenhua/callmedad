var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'image/png'});
	fs.createReadStream('./img/image.jpg').pipe(res);
}).listen(3000)
console.log('server running at 3000'); 