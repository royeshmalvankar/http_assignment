
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') 
    {
        res.end('<h1>Welcome to Home Page</h1>');  
    }

    else if (req.url === '/aboutus') 
    {
        res.write('<h3>Welcome to About Page</h3>');
        res.end('<a href="http://www.masaischool.com">www.masaischool.com</a>');
    } 
    
    else if (req.url === '/index') 
    {
        fs.readFile('index.js', 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } 
    
    else 
    {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

server.listen(3001, () => {
    console.log('Server running on port 3001');
});
