const express = require("express");
const { dbConfig } = require("./configs/dbConfig.js");
const { requestResponseLogger } = require("./middlewares");
const userRouter = require("./routes/userRouter.js");
require("dotenv").config();

const app = express();
const PORT = 5000;
const databaseUrl = process.env.DATABASE_URL;

// Connect to MongoDB
dbConfig(`${databaseUrl}/nodejs_practice`).then(() =>
  console.log("MongoDB Connected...")
);

// Use middlewares
app.use(express.urlencoded({ extended: false }));
app.use(requestResponseLogger("log.txt"));

// Use user routes
app.use("/api/users", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server successfully running on port: ${PORT}`);
});
