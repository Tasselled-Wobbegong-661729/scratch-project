const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');

const cookieParser = require('cookie-parser');
const config = require('config');
const userController = require('./userController');

const connectDB = require('./config/db');
const User = require('./UserModel');

const port = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/signup', userController.signUp, (req, res) => {
  res.status(200).send(res.locals.newUser);
});

// This will check if user's cookie is saved in browser and user is not set, then log the user out.
// Happens when you stop your express server after login, your cookie remains saved in the browser.

// // request headers for api access
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", 'https://localhost:8080/'); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.status(200);
//   next();
// });

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) =>
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
);

app.listen(port, () => console.log(`Server up and listening on port ${port}`));

// app.use('/api/users', usersRoute);

// app.use(
//   session({
//     key: 'user_sid',
//     secret: 'secret-key',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 600000,
//     },
//   })
// );

// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//       res.clearCookie('user_sid');
//     }
//     next();
//   });

//   // middleware function to check for logged-in users
//   const sessionChecker = (req, res, next) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.redirect('/dashboard');
//     } else {
//       next();
//     }
//   };

//   // route for Home-Page
//   app.get('/', sessionChecker, (req, res) => {
//     res.redirect('/login');
//   });

//   // route for user signup

//   // route for user Login
//   app
//     .route('/login')
//     .get(sessionChecker, (req, res) => {
//       // res.sendFile(__dirname + '/public/login.html');
//     })
//     .post(async (req, res) => {
//       const email = req.body.email,
//         password = req.body.password;

//       try {
//         let user = await User.findOne({ email: email }).exec();
//         if (!user) {
//           res.redirect('/login');
//         }
//         user.comparePassword(password, (error, match) => {
//           if (!match) {
//             res.redirect('/login');
//           }
//         });
//         req.session.user = user;
//         res.redirect('/dashboard');
//       } catch (error) {
//         console.log(error);
//       }
//     });

//   // route for user's dashboard
//   app.get('/dashboard', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.sendFile(__dirname + '/public/dashboard.html');
//     } else {
//       res.redirect('/login');
//     }
//   });

//   // route for user logout
//   app.get('/logout', (req, res) => {
//     if (req.session.user && req.cookies.user_sid) {
//       res.clearCookie('user_sid');
//       res.redirect('/');
//     } else {
//       res.redirect('/login');
//     }
//   });
