import { string } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  role: {
    type: String,
    default: "member",
  },
});

export default mongoose.model("User", userSchema);
