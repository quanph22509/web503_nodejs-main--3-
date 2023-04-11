import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
  },
  price: {
    type: Number,
  },
  original_price: {
    type: Number
  },
  description: {
    type: String
  }
});

// const productSchema = new Schema({ name: String, price: Number });
export default mongoose.model("Product", productSchema);
