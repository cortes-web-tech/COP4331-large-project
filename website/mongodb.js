const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'keepu';


MongoClient.connect(connectionURL, {useNewURLParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  db.collection('users').deleteMany
});

// db.collection('users').insertOne({
//   email: 'pop22@gmail.com',
//   password: 'password2',
//   firstName: 'Pop',
//   lastName: 'Castrolopez',
//   phoneNumber: '3214437051',
//   tier: '3'
// }, (error, result) => {
//   if (error) {
//     return console.log('Unable to insert user');
//   }
//
//   console.log(result.ops);
// });
