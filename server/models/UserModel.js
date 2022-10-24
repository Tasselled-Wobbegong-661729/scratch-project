const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// userSchema.pre('save', function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = bcrypt.hashSync(this.password, 10);
//   next();
// });

// userSchema.methods.comparePassword = function (plaintext, callback) {
//   return callback(null, bcrypt.compareSync(plaintext, this.password));
// };

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
