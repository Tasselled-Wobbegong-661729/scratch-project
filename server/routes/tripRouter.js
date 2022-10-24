const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const tripController = require('../controllers/tripController');

const tripRouter = express.Router();

const Trip = require('../models/TripModel');


tripRouter.post('/', tripController.createTrip, (req, res) => {
  return res.status(201).json("trip added");
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

module.exports = tripRouter;
