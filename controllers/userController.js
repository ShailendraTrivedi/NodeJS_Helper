const { application } = require("express");
const userModel = require("../models/userModel");

// Handle fetching all users
const getAllUsers = async (req, res) => {
  const allDbUsers = await userModel.find({});
  return res.json(allDbUsers);
};

// Handle creating a new user
const createNewUser = async (req, res) => {
  if (!req.body) {
    return res.send({ error: "An error occurred while creating the user." });
  }
  const newUser = await userModel.create(req.body);
  return res.status(201).json({ status: "Created !!!", user: newUser });
};

// Handle fetching a user by ID
const getUserByID = async (req, res) => {
  const requestId = req.params.id;
  const user = await userModel.findOne({ user_id: requestId });
  if (!user) {
    return res.status(404).json({ error: "User Not Found !!!" });
  }
  return res.json(user);
};

// Handle updating a user by ID
const updateUserByID = async (req, res) => {
  const requestId = req.params.id;
  await userModel.findOneAndUpdate({ user_id: requestId }, req.body);
  return res.json({ status: "Updated !!!" });
};

// Handle deleting a user by ID
const deleteUserByID = async (req, res) => {
  const requestId = req.params.id;
  await userModel.findOneAndDelete({ user_id: requestId });
  return res.json({ status: "Deleted !!!" });
};

module.exports = {
  getAllUsers,
  createNewUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
};
