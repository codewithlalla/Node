// project-root/src/services/user.service.js
const User = require('../models/user.model');

const getAllUsers = async () => {
  return await User.find();
};

const addUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

module.exports = { getAllUsers, addUser };