const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./user/userRouter');

// CONFIG FILE FOR DEV, TEST OR PROD ENVIRONMENT
const config = require('./config');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// MIDDLEWARES
require('./middleware/middleware')(app);

// API
app.use('/users', userRouter);

app.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });
});

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Listening on port ${config.PORT}`);
});
