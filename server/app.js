const express = require('express');
const mongoose = require('mongoose');

// CONFIG FILE FOR DEV, TEST OR PROD ENVIRONMENT
const config = require('./config');

const app = express();

// MIDDLEWARES
require('./middleware/middleware')(app);

app.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });
});

const db = mongoose.connection;

db.once('open', () => {
  console.log(`Listening on port ${config.PORT}`);
});
