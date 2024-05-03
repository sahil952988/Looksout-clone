import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dropdown: {
      type: String,
      required: true,
    },
    messages: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);