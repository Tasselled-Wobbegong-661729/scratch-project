const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const path = require('path');
const connectDB = require('./config/db');
const tripRouter = require('./routes/tripRouter');
const port = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// // request headers for api access
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", 'https://localhost:8080/'); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.status(200);
//   next();
// });

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')));

app.use('/api/trips', tripRouter);
// app.use('/api/users', userRouter);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server up and listening on port ${port}`));
