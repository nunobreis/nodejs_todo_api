const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// clears all database:

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// findOneAndRemove:

// Todo.findOneAndRemove();

Todo.findOneAndRemove({ _id: '5acca0733c71da4dfdf41890' }).then((todo) => {
  console.log(todo);
});

// findByIdAndRemove:

Todo.findByIdAndRemove('5acca0733c71da4dfdf41890').then((todo) => {
  console.log(todo);
});
