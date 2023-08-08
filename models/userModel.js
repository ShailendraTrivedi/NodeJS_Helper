const mongoose = require("mongoose");

// Define the schema for the User collection
const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: Number,
      required: true,
    },
    // User's first name
    first_name: {
      type: String,
      required: true,
    },
    // User's last name
    last_name: {
      type: String,
      required: true,
    },
    // User's email address (must be unique)
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // User's job title
    job_title: {
      type: String,
      required: true,
    },
    // User's gender
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps to documents
);

// Create a User model based on the userSchema
const userModel = mongoose.model("users", userSchema);

// Export the User model
module.exports = userModel;
