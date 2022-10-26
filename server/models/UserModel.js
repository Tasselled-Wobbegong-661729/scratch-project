const mongoose = require('mongoose');
//const { post } = require('../routes/tripRouter');

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: false,
  },
  username: {
    type: String,
    unique: true,
    required: false
  },
  password: {
    type: String,
    required: false,
  },
  trips: [{type: Schema.Types.ObjectId, ref: 'Trip'}]
});
         

const tripSchema = new Schema({
  name: { type: String, required: true },
  destination: { type: String, required: true },
  date: { type: String, required: true },
  packingList : [ reference ]
});

const packingItemSchema = new Schema({
  item: { type: String },
  quantity: {type: Number},
  packed: {type: Boolean, default: false}
});


const Trip = mongoose.model('Trip', tripSchema);

const User = mongoose.model('User', userSchema);

// [{location: San Diego
//   date: 10/31/25,
//   packingList: [{content: 'toiletpaper',
//                  quantity: 4},
//                  {content: 'underwear',
//                   quantity: 5}]}]




module.exports = User;
