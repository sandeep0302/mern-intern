const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
// const connectDB = require("./config/db");
const connectDB = require('./config/db')
const initRoutes = require("./routes/initRoutes");



const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to database
connectDB();

// Routes
app.use("/api", initRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
