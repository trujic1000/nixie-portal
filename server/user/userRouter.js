const userRouter = require('express').Router();

const userController = require('./userController');

userRouter.post('/signup', userController.signup);

module.exports = userRouter;