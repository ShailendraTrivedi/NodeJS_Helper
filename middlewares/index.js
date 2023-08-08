const fs = require("fs");

// Middleware to log incoming requests and outgoing responses
const requestResponseLogger = (file_name) => {
  return (req, res, next) => {
    // Create a log message with timestamp, request method, and URL
    const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}`;
    
    // Append the log message to the specified log file
    fs.appendFile(file_name, logMessage + "\n", (err) => {
      if (err) {
        console.error("Error writing to log file:", err);
      }
      next();
    });
  };
};

// Export the requestResponseLogger middleware
module.exports = { requestResponseLogger };
