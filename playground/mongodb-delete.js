const { MongoClient, ObjectID } = require('mongodb');

const obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server.');

  // delete Many
  // db.collection('Todos').deleteMany({ text: 'tou farto disto' }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({ name: 'Nuno' }).then((result) => {
    console.log(result);
  });

  // delete One
  // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // find One And Delete
  // db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a673eb889937781e4e8f359')
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
