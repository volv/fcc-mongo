var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, db) {
  if (err) throw err

  var coll = db.collection("prices");

  coll.aggregate([
    { $match: { size: process.argv[2] } },
    { $group: {
      _id: "result",
      total: {
        $sum: '$price'
      },
      average: {
        $avg: '$price'
      }
    }}]).toArray(function(err, result) {
    if (err) throw err
    //console.log(JSON.stringify(result))
    //console.log("Counting all size - " + process.argv[2])
    //console.log("Total = " + result[0].total);
    //console.log("Average = " + Number(result[0].average).toFixed(2));
    console.log(Number(result[0].average).toFixed(2));
    db.close();
  })
});
