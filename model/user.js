const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  video: {
    type: String,
  },
  pdf : {
    type: String,
  },
  cloudinary_id_img: {
    type: String,
  },
  cloudinary_id_vid: {
    type: String,
  },
  cloudinary_id_pdf: {
    type: String,
  }
});

module.exports = mongoose.model("User", userSchema);
