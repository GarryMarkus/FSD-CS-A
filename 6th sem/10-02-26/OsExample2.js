const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
    const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
    const userInfo = os.userInfo();

    res.write('<h1>System Information</h1>');
    res.write('<p>OS Platform: ' + os.platform() + '</p>');
    res.write('<p>OS Type: ' + os.type() + '</p>');
    res.write('<p>OS Release: ' + os.release() + '</p>');
    res.write('<p>CPU Architecture: ' + os.arch() + '</p>');
    res.write('<p>Host Name: ' + os.hostname() + '</p>');
    res.write('<p>Memory: ' + freeMemGB + ' GB free out of ' + totalMemGB + ' GB</p>');
    res.write('<p>Current User: ' + userInfo.username + '</p>');

    res.end();
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000');
});
