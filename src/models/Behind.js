import mongoose from "mongoose";

const behindSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    context: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["behind", "history"],
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Behind = mongoose.model("Behind", behindSchema);
export default Behind;
