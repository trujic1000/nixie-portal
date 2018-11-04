const morgan = require('morgan');
const bodyParser = require('body-parser');

function useMiddleware(app) {
  app.use(morgan('dev'));
  // support parsing of application/json type post data
  app.use(bodyParser.json());
  // support parsing of application/x-www-form-urlencoded post data
  app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = useMiddleware;