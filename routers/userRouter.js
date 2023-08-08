const express = require("express");
const {
  getAllUsers,
  createNewUser,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../controllers/userController.js");

const userRouter = express.Router();

// Define routes for fetching all users or creating a new user
userRouter.route("/").get(getAllUsers).post(createNewUser);

// Define routes for fetching, updating, or deleting a user by ID
userRouter
  .route("/:id")
  .get(getUserByID)
  .patch(updateUserByID)
  .delete(deleteUserByID);

module.exports = userRouter;
