var mongo = require('mongodb').MongoClient;

var thedb = "";

mongo.connect("mongodb://volv-fcc-mongo-2419035:8080/learnyoumongo", function(err, db) {
  if (err) {
    console.log("VOLVOUTERERROR -", err);
  }
  else {
    thedb = db.collection('parrots');
    var result = thedb.find()
      .toArray(function(err, documents) {
        if (err) {
          console.log("VOLVINNERERROR -", err);      
        }
        else {
          console.log(documents)
        }
      })
      db.close();
  }
  
})