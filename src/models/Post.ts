import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    images: {type: [String], default: []},
    createAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", PostSchema);
