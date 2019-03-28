const express = require('express');
require('./db/mongoose');

const userRouter = require('./routers/user');
const knot1Router = require('./routers/knot1');

const app = express();
const port = process.env.PORT || 3001;

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

const bcrypt = require('bcryptjs');


const myFunction = async () => {
  const password = "Red12345!";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('Red1345!', hashedPassword);
  console.log(isMatch);
}

myFunction();
