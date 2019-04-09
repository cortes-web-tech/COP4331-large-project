const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin:Passw0rd@keepu-967e2.azure.mongodb.net/test", {
  userNewUrlParser: true,
  useCreateIndex: true
});
