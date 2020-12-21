var express =require('express');
var app=express();
app.get('/',function(req,res){
	res.send('this is the homeapag')
});
//console.log("hi die")
app.listen(3000)
