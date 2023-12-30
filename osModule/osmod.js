const os = require("os");
/*1)architechture 
console.log(os.arch()); */

/*2) free memory
console.log(os.freemem()); it will return in byte hence 
following method is use to get exact free memory int GB
const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);*/

/*3)Total memory 
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);*/

/*4)hostname 
console.log(os.hostname());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.platform());
console.log(os.cpus());
*/


