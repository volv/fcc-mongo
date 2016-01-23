var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var firstName = process.argv[2];
var lastName = process.argv[3];

var obj = { firstName: firstName, lastName:lastName };

mongo.connect(url, function(err, db) {
  if (err) {
      db.close();
      return console.log(err);
  }
  else {
    var coll = db.collection('docs') ;
    coll.insert(obj, function(err, data) {
      if (err) return console.log(err);
      console.log(JSON.stringify(obj));
      db.close();
    });
  }
});

