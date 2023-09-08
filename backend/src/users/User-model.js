const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [{
    type: String,
    default: 'user',
  }],
  active: {
    type: Boolean,
    default: true,
  },
});

// Auto Increment ID
UserSchema.plugin(autoIncrement, {
  model: 'User',
  startAt: 1,
});

module.exports = mongoose.model('User', UserSchema);
