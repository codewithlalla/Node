// project-root/src/controllers/user.controller.js
const { getAllUsers, addUser } = require('../services/user.service');

const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = { getUsers, createUser };