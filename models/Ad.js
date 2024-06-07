const { Schema, model } = require("mongoose");

const Ad = new Schema({
  city: { type: String, required: true },
  mobile: { type: Number, required: true },
  requirements: { type: String, required: true },
  salary: { type: String, required: true },
  username: { type: String, required: true },
  adTitle: { type: String, required: true },
  email: { type: String, required: true },
  created: Schema.Types.Mixed,
});

module.exports = model("Ad", Ad);
