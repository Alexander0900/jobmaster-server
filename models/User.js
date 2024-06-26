const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isBlock: { type: Boolean, required: true },
  registrationDate: { type: Number, required: true },
  roles: { type: [String], default: ["user"] },
});

module.exports = model("User", User);
