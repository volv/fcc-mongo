var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";
var arg = Number(process.argv[2]);

mongo.connect(url, function(err, db) {
  if (err) {
      db.close();
      return console.log(err);
  }
  else {
    var coll = db.collection('parrots') ;
    coll.find({'age': {$gt: arg}}).toArray(function(err, docs) {
      if (err) return console.log(err);
      console.log(docs);
      db.close();
    });
  }
})

