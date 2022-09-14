const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    address: { type: String, required: true, unique: true },
    city: { type: String, required: true, unique: false },
    state: { type: String, required: true, unique: false },
    country: { type: String, required: true, unique: false },
    PropertyType: { type: String, required: true, unique: true },
    Bedroom: { type: Number, required: true, unique: false },
    View1: { type: String, default: "" },
    View2: { type: String, default: "" },
    View3: { type: String, default: "" },
    View4: { type: String, default: "" },
    description: { type: String, required: true, unique: false },

    price: { type: Number, required: true, unique: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);
