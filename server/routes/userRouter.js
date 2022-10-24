const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

const User = require('../models/UserModel');

console.log('we are in userRouter before Router.post');
userRouter.post('/signup', userController.signUp, (req, res) => {
  res.status(200).send(res.locals.newUser);
});

userRouter.post('/login', userController.login, (req, res) => {
  res.status(200).send(res.locals.loginToken);
});

module.exports = userRouter;
