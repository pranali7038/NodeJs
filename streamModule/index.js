//1st way to show data i.e no use of streaming
const fs= require("fs");
const http= require("http");

const server = http.createServer();

server.on('request',(req,res)=>{
    /*fs.readFile("input.txt",(err,data) =>{
        if(err)
            return console.error(err);
        res.end(data.toString());
    });*/


    //2nd way with the use of streaming
    //Reading from a stream
    //Create a Readable stream
    //handle stream events ---->data,end,and error
    const rstream = fs.createReadStream("input.txt");
    /*rstream.on("data",(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });

    rstream.on("error",()=>{
        console.log(err);
        res.end("File not found");
    });*/

    //now using pipe stream

    rstream.pipe(res);
});

server.listen(8000,"127.0.0.1");




