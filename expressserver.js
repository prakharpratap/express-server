const express=require('express');
const http=require('http');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
const port=3000;
const hostname='localhost';
const app=express();
const morgan =require('morgan');
app.use(morgan('dev'));//used for logging
app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){              //here dished is is end point

    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
   next();


});
app.get('/dishes',function(req,res,next){
res.end('will send all the dishes to you');
});

app.post('/dishes',function(req,res,next){
    res.end(' will add the dish '+req.body.name+' with details '+req.body.description);
});
app.put('/dishes',function(req,res,next){
    res.statusCode=403;
    res.end('put operation is not supported on /dishes');
});
app.delete('/dishes',function(req,res,next){
    res.end('deleting all the dishes!');
});
app.get('/dishes/:dishId',function(req,res,next){
    res.end('will send details of the dish:'+req.params.dishId+' to you!');
});

app.post('/dishes/:dishId',function(req,res,next){
   res.statusCode=403;
    res.end('POST operation not supported on /dishes');
});
app.put('/dishes/:dishId',function(req,res,next){
    res.write('updating the dish: '+req.params.dishId);
    res.end('will update the dish: '+ req.body.name+'with details '+req.body.description);
});
app.delete('/dishes/:dishId',function(req,res,next){
    res.end('deleting dish: '+req.params.dishId);
});








app.use(express.static(__dirname+'/public'));//if index.html or b.html is requested, it will be executed(url should be equal to files in this location) else other one
app.use(function(req,res,next){



    res.statusCode=200;
    res.setHeader('Content-Type','html/text');
    res.end('<html><body><h1>this is a express server</h1></body></html>');

});


const server=http.createServer(app);
server.listen(port,hostname,function()
{console.log(`server is running on http://${hostname}:${port} `)});