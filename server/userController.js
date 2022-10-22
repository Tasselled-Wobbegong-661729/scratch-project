const bcrypt = require('bcrypt');
const User = require('./UserModel');
const connectDB = require('./config/db');

// connectDB();

const userController = {};

userController.signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = new User({
      email: req.body.email,
      password: req.body.password,
    });
    user.password = await bcrypt.hash(user.password, 10);

    await user.save();
    const token = 'sampleToken';
    res.header('x-auth-token', token).send({
      name: user.name,
      email: user.email,
    });
    const newUser = await User.create(user);
    res.locals.newUser = newUser;
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

module.exports = userController;
