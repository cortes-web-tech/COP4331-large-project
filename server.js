const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const path = require('path');

const userRouter = require('./routers/user');
const knot1Router = require('./routers/knot1');

const app = express();
const port = process.env.PORT || 8000;

const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname, 'client', 'build')));


app.use(express.json());
app.use(userRouter);
app.use(knot1Router);
app.use(cors({credentials: true, origin: true}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
