import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  studentNumber: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  adminStatus: {
    type: Boolean,
    enum: [true, false],
    default: false,
  },
  role: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
