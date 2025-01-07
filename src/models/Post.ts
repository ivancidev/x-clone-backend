import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    images: { type: [String], default: [] },
    name: { type: String, required: true },
    username: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    createAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export const Post = mongoose.model("Post", PostSchema);
