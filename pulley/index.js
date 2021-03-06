var path = require('path');
var fs = require('fs');
var server = require('http').createServer(handler);

function handler(req, res) {
    var url = (req.url.split('?')[0]).substr(1);
    if (url == '') url = 'index.html';


    fs.readFile(
      path.join(process.cwd(), url),
        function (err, data) {
            if (err) {
                res.writeHead(404);
                return res.end('Error loading ' + url);
            }
            res.writeHead(200);
            res.end(data);
        }
    );
}

server.listen(process.env.PORT || 9000);
console.log('go to localhost:9000');
