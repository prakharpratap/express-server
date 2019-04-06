const http=require('http');
const path=require('path');
const fs=require('fs');
var port=3000;
var hostName ='localhost';


var server=http.createServer(function(req,res){
    console.log("request by"+req.url+"by method"+req.method);
if(req.method=='GET')
{
    var fileUrl;
    if(req.url=='/')
        {
            fileUrl='/index.html';
        }
    else
            fileUrl=req.url;
    var filePath=path.resolve('./public'+fileUrl);
    const fileExt=path.extname(filePath);
    if(fileExt=='.html')
    {
        fs.exists(filePath,function(exists){
            if(!exists)
            {res.statusCode=404;
            res.setHeader('Context-Type','html/text');
            res.end('<html><body><h1>this file does not exist</h1></body></html>');
            return;
            }
            res.statusCode=200;
            res.setHeader('Context-Type','html/text');
            fs.createReadStream(filePath).pipe(res);

        })
    }
    else
    {res.statusCode=404;
        res.setHeader('Context-Type','html/text');
        res.end('<html><body><h1>this file is not a html file</h1></body></html>');
    return;
    }
}
else
{}

});






server.listen(port,hostName,function(){
    console.log(`server is running at http://${hostName}:${port}`);
});