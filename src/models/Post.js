import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
    unique: true,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;