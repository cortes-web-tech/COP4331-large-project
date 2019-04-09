const express = require('express');
require('./db/mongoose');
const cors = require('cors');

const userRouter = require('./routers/user');
const knot1Router = require('./routers/knot1');

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(userRouter);
app.use(knot1Router);
app.use(cors({credentials: true, origin: true}));


app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
