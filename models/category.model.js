import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    categoryName: {
        type: String,
        require: true
    },
    categoryImage: {
      type: String,
      default: "https://cdn4.iconfinder.com/data/icons/eldorado-user/40/friends-512.png"
    }
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
