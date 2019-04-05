const http=require('http');
var port=3000;
var hostName ='localhost';


var server=http.createServer(function(req,res){
    console.log(req.headers);
res.statusCode=200;
                     //what will res.body contain
res.end(`hello world ${res.url}`);
});

server.listen(port,hostName,function(){
    console.log(`server is running at http://${hostName}:${port}`);
});