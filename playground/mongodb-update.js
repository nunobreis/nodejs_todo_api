const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ac2c15edf40b8a62886326d')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a673cf8d1bc787d929531f8')
  }, {
    $set: {
      name: 'Nuno'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOrginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
