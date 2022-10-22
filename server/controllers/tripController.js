/* eslint-disable no-console */
const { SelectUnstyledContext } = require('@mui/base');
const Trip = require('../models/TripModel');

const tripController = {};

tripController.createTrip = async (req, res, next) => {
  if (!req.body) {
    console.log('nobody');
  }
  const { name, destination, date } = req.body;
  try {
    await Trip.create({
      name,
      destination,
      date,
    });
    return next();
  } catch (error) {
    return next({
      log: `tripController.createTrip: ERROR ${error}`,
      message: {
        err: 'Error adding new trip',
      },
    });
  }
};

tripController.getTrip = async (req, res, next) => {
  try {
    console.log(req.params);

    const found = await Trip.find({});
    res.locals.trip = found;
    return next();
  } catch (error) {
    return next({
      log: `tripController.findTrip: ERROR ${error}`,
      message: {
        err: 'Trip not found',
      },
    });
  }
};

// update and delete not complete

// tripController.updateTrip = async (req, res, next) => {
//   try {
//     await Trip.create({
//       name,
//       destination,
//       date,
//     });
//     return next();
//   } catch (error) {
//     return next({
//       log: `tripController.createTrip: ERROR ${error}`,
//       message: {
//         err: 'Error adding new trip',
//       },
//     });
//   }
// };

// tripController.deleteTrip = async (req, res, next) => {
//   if (!req.body) {
//     console.log('nobody');
//   }
//   const { name, destination, date } = req.body;
//   try {
//     await Trip.create({
//       name,
//       destination,
//       date,
//     });
//     return next();
//   } catch (error) {
//     return next({
//       log: `tripController.createTrip: ERROR ${error}`,
//       message: {
//         err: 'Error adding new trip',
//       },
//     });
//   }
// };

module.exports = tripController;
