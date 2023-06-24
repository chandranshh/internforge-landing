const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

// Connect to MongoDB
require("./connection");

//test
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Mount routes
app.use("/api/jobs", require("./routes/joblisitng"));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
