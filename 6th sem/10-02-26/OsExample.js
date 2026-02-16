const os = require('os');

console.log('OS Platform: ' + os.platform());
console.log('OS Type: ' + os.type());
console.log('OS Release: ' + os.release());
console.log('CPU Architecture: ' + os.arch());
console.log('HostName: ' + os.hostname());

const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log('Memory: ' + freeMemGB + ' GB free out of ' + totalMemGB + ' GB');

const userInfo = os.userInfo();
console.log('Current user: ' + userInfo.username);