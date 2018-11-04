const express = require('express');

// CONFIG FILE FOR DEV, TEST OR PROD ENVIRONMENT
const config = require('./config/config');
// CONNECTING TO THE DB
const { mongoose } = require('./db/mongoose');

const app = express();

// MIDDLEWARES
require('./middleware/middleware')(app);


app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
