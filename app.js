const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Check if the request is to the `/hello` endpoint
    if (req.url === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('HelloWorld');
    } else {
        // Handle other routes with a 404 response
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Define the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
