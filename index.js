// http is an inbuilt module in Node.js
const https = require('https');

// createServer method takes a callback function as argument
// the callback function takes two arguments req and re
const server = https.createServer(function (req, res) {
    console.log(`${req.method} request received at ${req.url}`);
    if (req.url === '/html') {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Demo page</h1>");
        res.end();
    } else if (req.url === '/plain') {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200; // 200 = OK
        res.write("<h1>Demo page</h1>");
        res.end();
    } else if (req.url === '/json') {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200; // 200 = OK
        res.write(JSON.stringify({"firstName": "Harry", "lastName": "Potter"}));
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 400; // 400 = Bad request
        res.write("<h1>Sorry, this page is not available</h1>");
        res.end();
    }
});

const PORT = process.env.PORT || 80;

// server is listening to incoming requests on port 3000 on localhost
server.listen(PORT, function () {
    console.log("Listening on port http://localhost:" + PORT);
});