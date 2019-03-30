const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const knot1Router = require('./routers/knot1');

const app = express();
const port = process.env.PORT || 3001;

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('Site is down. Check back soon.');
// });

app.use(express.json());
app.use(userRouter);
app.use(knot1Router);



// users have topics that have knots, users can choose to delete entire topic
// app.delete('topics/:id', async (req, res) => {
//   try {
//     const topic = new Topic(req.body);
//
//     if(!topic) {
//       return res.status(404).send();
//     }
//
//     res.send(topic);
//   } catch (e) {
//     res.status(500).send();
//   }
// });


app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const Knot1 = require('./models/knot1');
const User = require('./models/user');

const main = async () => {
  // const knot1 = await Knot1.findById('5c9fa95e0d27d62f70f8bf1b');
  // await knot1.populate('owner').execPopulate();
  // console.log(knot1.owner);

  const user = await User.findById('5c9fa9240d27d62f70f8bf19');
  await user.populate('knot1').execPopulate();
  console.log(user.knot1);


}

main();
