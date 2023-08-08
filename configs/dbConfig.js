const mongoose = require("mongoose");

// Function to establish a connection to MongoDB
const dbConfig = (url) => {
  return mongoose.connect(url);
};

// Export the dbConfig function
module.exports = { dbConfig };
