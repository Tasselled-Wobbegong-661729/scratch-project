const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const tripController = require('../controllers/tripController');

const tripRouter = express.Router();

const Trip = require('../models/TripModel');

tripRouter.get('/', tripController.isLoggedIn, async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

tripRouter.post('/', tripController.createTrip, (req, res) => {
  return res.status(201).json('trip added');
});

tripRouter.get('/', tripController.getTrip, (req, res) => {
  return res.status(200).json(res.locals.trip);
});

// tripRouter.post('/', tripController.createTrip, (req, res) => {
//   return res.status(201).json('student added');
// });

// tripRouter.post('/', tripController.createTrip, (req, res) => {
//   return res.status(201).json('student added');
// });

// tripRouter.get('/', userController.isLoggedIn, (req, res) => {
//   return res.status(200).json(trips.filter(trip => post.email === req.user.email);
// });

module.exports = tripRouter;
