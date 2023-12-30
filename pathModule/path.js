const path = require('path');

console.log(path.dirname('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js'));
console.log(path.extname('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js'));
console.log(path.basename('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js'));
console.log(path.isAbsolute('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js'));

console.log(path.parse('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js'));

const mypath =path.dirname('C:/Users/Pranali/Desktop/NodeJs/pathModule/path.js');
console.log(mypath.root);