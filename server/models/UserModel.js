const mongoose = require('mongoose');
//const { post } = require('../routes/tripRouter');

const { Schema } = mongoose;



const tripSchema = new Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  // packingList : [ reference ]
});


// const tripsListSchema = new Schema({
//   listOfTrips: ,
// });

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: false,
  },
  username: {
    type: String,
    unique: true,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  // trips: [[tripSchema]] //[{type: Schema.Types.ObjectId, ref: 'Trip'}]
  //trips: [{type: Schema.Types.ObjectId, required: true, ref: 'tripsListSchema'}]
  // trips: { name: String, val: tripSchema.Types._id },
  // trips: {type: tripsListSchema, required: true}
  trips: {name: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: String, required: true },
  }
});





const packingItemSchema = new Schema({
  item: { type: String },
  quantity: { type: Number },
  packed: { type: Boolean, default: false },
});

// console.log(packingItemSchema);

// const Trip = mongoose.model('Trip', tripSchema);

// const tripsList = mongoose.model('TripList', tripsListSchema);

const User = mongoose.model('User', userSchema);

// [{location: San Diego
//   date: 10/31/25,
//   packingList: [{content: 'toiletpaper',
//                  quantity: 4},
//                  {content: 'underwear',
//                   quantity: 5}]}]

module.exports = User;
