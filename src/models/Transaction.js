const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  dateOfSale: { type: String, required: true },
  sold: { type: Boolean, required: true },
});

module.exports = mongoose.model("Transaction", TransactionSchema);
