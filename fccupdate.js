var mongo = require('mongodb').MongoClient;
var dbName = process.argv[2];
var url = "mongodb://localhost:27017/" + dbName;

mongo.connect(url, function(err, db) {
  if (err) throw err

  var coll = db.collection('users');

  coll.update({
    "username": "tinatime"
  }, {
    $set: {
      "age": 40
    }
  }, function(err, data) {
    if (err) throw err
    db.close();
  })
});
