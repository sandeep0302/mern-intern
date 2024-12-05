const express = require("express");
const { seedDatabase } = require("../controllers/initController");

const router = express.Router();

// Route to seed database
router.get("/seed", seedDatabase);

module.exports = router;
