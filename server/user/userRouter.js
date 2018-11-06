const userRouter = require('express').Router();

const userController = require('./userController');

// THIS SHOULD BE PROTECTED ROUTE
userRouter.post('/signup', userController.signup);

module.exports = userRouter;