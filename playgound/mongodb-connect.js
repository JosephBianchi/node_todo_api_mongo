// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a6620e71f02e3049dad9efa')
  // }).toArray().then((docs) => {
  //   console.log('TODOS');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (error) => {
  //   console.log('unable to fetch todos', error);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`todos count: ${count}`);
  }, (error) => {
    console.log('unable to fetch todos', error);
  });

  db.collection('Users').find({name: 'hank'}).toArray().then((result) => {
    console.log('users named hank');
    console.log(result);
  }, (error) => {
    console.log('unable to fetch users named hank');
  })

  // db.close();
});
