const Rewards = require('../models/Rewards');

exports.post = (req, res) => {
  // console.log(req.body.customerId);
  const reward = new Rewards({
    customerId: req.body.customerId,
    merchantId: req.body.merchantId,
    rewardCode: req.body.rewardCode,
    dateRedeemed: req.body.dateRedeemed,
  });
  reward.save((err, artistCreated) => {
    res.json(artistCreated);
  });
};

exports.list = (req, res) => {
  Rewards.find({}, (err, rewards) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(rewards);
  });
};

exports.get = (req, res) => {
  Rewards.findOne({ rewardCode: req.params.rewardCode }, (err, reward) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.json(reward);
  });
};
