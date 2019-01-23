var express = require('express');
var body = require('body-parser');
var mongo = require('mongodb');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/hospital";

//app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/',function(req,res){
	res.render('index');
});


app.get('/search',function(req,res,body){
	let kwrd = req.query.search;
	let doctors = [
					{
						"name":"Amal",
						"email":"amal@abc.com",
						"phone":"2374928423",
						"type":"Childcare"
					},
					{
						"name":"Justin",
						"email":"justin@abc.com",
						"phone":"78923749283",
						"type":"Fertility"
					},
					{
						"name":"Anand",
						"email":"anand@abc.com",
						"phone":"2397927492",
						"type":"Women Specialist"
					},
					{
						"name":"Leo",
						"email":"leo@abc.com",
						"phone":"902739248",
						"type":"Women Specialist"	
					},
					{
						"name":"Amal1",
						"email":"amal@abc.com",
						"phone":"2374928423",
						"type":"Childcare"
					},
					{
						"name":"Justin1",
						"email":"justin@abc.com",
						"phone":"78923749283",
						"type":"Fertility"
					},
					{
						"name":"Anand1",
						"email":"anand@abc.com",
						"phone":"2397927492",
						"type":"Women Specialist"
					},
					{
						"name":"Leo1",
						"email":"leo@abc.com",
						"phone":"902739248",
						"type":"Women Specialist"	
					},
					{
						"name":"AmalAnand",
						"email":"amal@abc.com",
						"phone":"2374928423",
						"type":"Childcare"
					},
					{
						"name":"Justin2",
						"email":"justin@abc.com",
						"phone":"78923749283",
						"type":"Fertility"
					},
					{
						"name":"Anand2",
						"email":"anand@abc.com",
						"phone":"2397927492",
						"type":"Women Specialist"
					},
					{
						"name":"Leo2",
						"email":"leo@abc.com",
						"phone":"902739248",
						"type":"Women Specialist"	
					}
				];

	var response = [];

	if(kwrd != ''){
		for(var i=0;i<doctors.length;i++){
			//console.log(doctors[i].name);
			var string = doctors[i].name;
			if(string.includes(kwrd)){
				response.push(doctors[i]);
			}
		}
		if(response.length == 0){
			res.render("no_doctors");
		}
		else{
			res.render("doctors",{"doctors":response});
		}
		
	}
	else{
		console.log("It is Empty");
		res.render("empty");
	}
	
});


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})