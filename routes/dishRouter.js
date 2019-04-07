const express=require('express');
const bodyParser=require('body-parser');

const dishRouter =express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')                    //on this endpoint this express app will work
.get(function(req,res,next){
    res.end('will send all the dishes to you');
})

.post(function(req,res,next){
    res.end(' will add the dish '+req.body.name+' with details '+req.body.description);
})
.put(function(req,res,next){
    res.statusCode=403;
    res.end('put operation is not supported on /dishes');
})
    .delete(function(req,res,next){
    res.end('deleting all the dishes!');
});

module.exports=dishRouter;