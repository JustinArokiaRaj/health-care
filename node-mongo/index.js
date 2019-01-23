var express = require('express');
var body = require('body-parser');
var mongo = require('mongodb');
var url = require('url');
var http = require('http');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/hospital";

//app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('index');
});


app.get('/search',function(req,res){
	var obj = {};
	console.log(req.query.speciality);
	let location = req.query.location;
	let speciality = req.query.speciality;
	if(location != null && location != ''){
		Object.assign(obj, {location: location});
		//console.log(location);
	}
	if(speciality != null && speciality != ''){
		Object.assign(obj, {speciality: speciality});
		//console.log(speciality);
	}
	MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("hospital");
	   dbo.collection("doctors").find(obj).toArray(function(err, result) {
	    if (err) throw err;
	    console.log(result);
	    res.setHeader('Content-Type', 'application/json');
	    res.setHeader('Access-Control-Allow-Origin', 'http://13b90e38.ngrok.io');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   		res.send(JSON.stringify(result));
	    db.close();
	  });
	});
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})