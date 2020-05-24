'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('Users');

exports.list_all_users = function(req, res) {
    User.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_user = function(req, res) {
  console.log(req.body);
  var new_task = new User(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_user = function(req, res) {
    User.findById(req.params.userId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_user = function(req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_user = function(req, res) {
  console.log(req.params.userId);
    User.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};
