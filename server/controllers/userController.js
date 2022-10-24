const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const userController = {};
// const { SECRET = 'secret' } = process.env;

userController.signUp = async (req, res, next) => {
  try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    // send new user as response
    res.locals.newUser = user;
    return next();
  } catch (err) {
    return next({
      err: {
        log: 'Error in userController.createUser',
        status: 400,
        message: { err: 'error in usercontroller.signup' },
      },
    });
  }
};

userController.login = async (req, res, next) => {
  try {
    // check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result === true) {
        // sign token and send it in response
        const token = await jwt.sign({ email: user.email });
        res.locals.loginToken = { token };
        return next();
      }
    } else {
      return res.status(400).json({ error: "password doesn't match" });
    }
  } catch (err) {
    return next({
      err: {
        log: 'Error in userController.loginUser',
        status: 400,
        message: { err: 'error in usercontroller.login' },
      },
    });
  }
};

module.exports = userController;
