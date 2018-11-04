const express = require('express');

// CONFIG FILE FOR DEV, TEST OR PROD ENVIRONMENT
const config = require('./config/config');
// CONNECTING TO THE DB
const { mongoose } = require('./db/mongoose');

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// MIDDLEWARES
require('./middleware/middleware')(app);

//Routes
app.get("/", (req, res) => {
    res.render("index");
})

app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
});
