const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbname = 'confusion';

mongoClient.connect(url,function(err,client)
{
    assert.equal(err,null);

    console.log('Connected correctly to the server');
    const db = client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name":"Harvey","description":"Kickass lawyer"},function(err,result)
    {//the first arg to this fn is new document that is to be inserted in the collection dishes
        //the secong arg is the callback fn the result obj contains the info about the documment that has been added.
        assert.equal(err,null);
        console.log('After insert/ ');
        console.log(result.ops);
        //the result.ops contains document that has been added in the collection.
    collection.find({}).toArray(function(err,docs)
    {
        //the second arg docs will conatin all the documents that have been found in the collection dishes
        assert.equal(err,null);
        console.log("Found");
        console.log(docs);

        db.dropCollection('dishes',function(err,result)
        {
            assert.equal(err,null);
            client.close();
        });
    });
    });
});