const express=require('express');
const http=require('http');
const fs=require('fs');
const path=require('path');
const bodyParser=require('body-parser');
const dishRouter=require('./routes/dishRouter');
const port=3000;
const hostname='localhost';
const app=express();
const morgan =require('morgan');
app.use(morgan('dev'));//used for logging
app.use(bodyParser.json());








app.use('/dishes',dishRouter);

app.use(express.static(__dirname+'/public'));//if index.html or b.html is requested, it will be executed(url should be equal to files in this location) else other one
app.use(function(req,res,next){



    res.statusCode=200;
    res.setHeader('Content-Type','html/text');
    res.end('<html><body><h1>this is a express server</h1></body></html>');

});


const server=http.createServer(app);
server.listen(port,hostname,function()
{console.log(`server is running on http://${hostname}:${port} `)});