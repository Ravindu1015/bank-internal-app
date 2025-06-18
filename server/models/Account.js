const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  balance: { type: Number, default: 0 },
  accountType: { type: String, enum: ['checking', 'savings'], required: true },
  status: { type: String, enum: ['active', 'closed', 'suspended'], default: 'active' }
});

module.exports = mongoose.model('Account', AccountSchema);
