const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');

const cookieParser = require('cookie-parser');
const userController = require('./controllers/userController');

const connectDB = require('./config/db');
const User = require('./models/UserModel');

const port = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/signup', userController.signUp, (req, res) => {
  res.status(200).send(res.locals.newUser);
});

app.post('/login', userController.login, (req, res) => {
  res.status(200).send(res.locals.loginToken);
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

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up and listening on port ${port}`));
