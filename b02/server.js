const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

http.createServer(
    (req, res) => {
        const urlP = url.parse(req.url, true);
        
        res.writeHead(200, {'Content-Type': 'text/plain'});

        if (urlP.query['name']) {
            res.end(`Hello ${urlP.query['name']}`);
        }else {
            res.end('USAGE: http://localhost:3000?name=##');
        }
    }
    
).listen(PORT);

console.log('Server is running');