const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  body: { type: String },
  email: { type: String },
  id: { type: Number },
  name: { type: String },
  postId: { type: Number },
});

module.exports = mongoose.model("UserTest", userSchema);
