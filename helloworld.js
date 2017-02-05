var http = require('http');

var server = http.createServer();

server.on('request',
	function(req,res) {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'	});
		res.end('<h2> Olá mundo </h2>');
	}
);

server.listen(3000);