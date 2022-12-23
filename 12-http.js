const http = require('http');

const server = http.createServer((request,result) => {
    if (request.url === '/') {
        result.end('Welcome to our Home page');
    }
    if (request.url === '/about') {
        result.end('Here is the brief history of the page');  
    }
    result.end(`
    <h1>Oops!</h1>
    <p>The page you request is do not exist</p>
    <a href='/'>Back Home</a>`);
})

server.listen(5000);