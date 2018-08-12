const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rewardsSchema = new Schema({
  customerId: String,
  merchantId: String,
  rewardCode: String,
  dateRedeemed: Date,
});

module.exports = mongoose.model('Rewards', rewardsSchema);
