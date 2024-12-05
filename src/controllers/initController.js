const axios = require("axios");
const Transaction = require("../models/Transaction");

const seedDatabase = async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );

    // Clear existing data to avoid duplication
    await Transaction.deleteMany();

    // Save data to the database
    await Transaction.insertMany(data);

    res.status(200).json({ message: "Database seeded successfully!" });
  } catch (error) {
    console.error("Error seeding database:", error.message);
    res.status(500).json({ error: "Failed to seed database" });
  }
};

module.exports = { seedDatabase };
