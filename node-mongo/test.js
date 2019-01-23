// Create DB in MongoDB
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/hospital";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hospital");
   dbo.collection("doctors").find({location:"Chennai",code:"DOC005"}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});