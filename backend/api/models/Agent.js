const mongoose = require("mongoose");

const AgentSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true, unique: false },
    surname: { type: String, required: true, unique: false },
    address: { type: String, required: true, unique: true },
    city: { type: String, required: true, unique: false },
    state: { type: String, required: true, unique: false },
    country: { type: String, required: true, unique: false },
    PhoneNumber: { type: String, required: true, unique: true },
    linkedin: { type: String, required: true, unique: true },
    Twitter: { type: String, required: true, unique: true },
    Email: { type: String, required: true, unique: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: String, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Agent", AgentSchema);
