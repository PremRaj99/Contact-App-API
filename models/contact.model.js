import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    phoneNumber: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
    },
    photo: {
      type: String,
      default:
        "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png",
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
