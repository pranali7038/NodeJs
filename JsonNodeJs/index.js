const fs = require("fs");

const bioData={
    name:"Pranali",
    age:20
};

/*

console.log(bioData.name);

const jsonData = JSON.stringify(bioData);
console.log(jsonData);
//console.log(jsonData.age);  this is not possible as value from json cannot be fetched as object

const objData = JSON.parse(jsonData);
console.log(objData);
console.log(objData.age);
*/

//1)convert object to JSON

const jsonData = JSON.stringify(bioData);

//2)add file to another

fs.writeFile('json1.json',jsonData,(err)=> {
    console.log("done");
});

//3)readFile 

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
});

//4)convert back to original object and dfisplay it on console with the help of console.log

const originalData = JSON.parse(jsonData);
console.log(jsonData);
console.log(originalData);

