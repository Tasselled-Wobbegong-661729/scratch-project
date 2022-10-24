const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');
const tripController = require('../controllers/tripController');

const tripRouter = express.Router();

const Trip = require('../models/TripModel');

tripRouter.post('/', tripController.createTrip, (req, res) => {
  console.log('trip added', res.locals.add);
  return res.status(201).json('trip added');
});

tripRouter.get('/', tripController.getTrip, (req, res) => {
  console.log('trip found', res.locals.find);
  return res.status(200).json(res.locals.trip);
});

tripRouter.delete('/delete', tripController.deleteTrip, (req, res) => {
  console.log('deleted', res.locals.deleted);
  return res.status(202).json('trip deleted successfully');
});

// tripRouter.patch('/', tripController.updateTrip, (req, res) => {
//   console.log('updated', res.locals.updated);
//   return res.status(204).json('trip updated');
// });

module.exports = tripRouter;
