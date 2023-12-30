//The http.createServer()method includes request and response parameters which is supplied by the node.js

//The request object can be use to get the information about the current Http request.
//e.g.., url,request header,and data

//The response object can be use to sed the response for a current http request.

//You should include the HTTP header with the correct content type.

const http = require("http");
const fs= require("fs");
const server = http.createServer((req, res) =>{
        //console.log(req.url);   //url 
        if(req.url === "/")
        {
            res.end('Hello from the home side');
        }else if(req.url === "/about")
        {
            res.end('Hello from the about side');
        }else if(req.url ==="/contact")
        {
            res.end('Hello from the contact side');
        }else if(req.url === "/api")
        {
            fs.readFile(`${__dirname}/Userapi/Userapi.json`,"utf-8",(err,data)=>{
                console.log(data);
                const objData =JSON.parse(data);
                res.end(objData[0].id);
            });
            res.end('Hello from the userAPI side');
        }else{
            res.writeHead(404,{"Content-type" : "text/html"});
            res.end('Invalid page/page not exist');
        }
        
});

server.listen(8000,"127.0.0.1",() =>{
    console.log("Listening to the port number 8000");
});

//commonds to run
//PS C:\Users\Pranali\Desktop\NodeJs\httpServer> nodemon index.js

//now go to the browser and type localhost:8000
//you will get output as "Hello from other side"