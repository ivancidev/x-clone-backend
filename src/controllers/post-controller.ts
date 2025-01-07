import { Post } from "@models/Post";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error al obtener los posts",
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const { text, images, name, username, avatarUrl } = req.body;

    const newPost = new Post({
      description: text,
      images,
      name,
      username,
      avatarUrl,
    });
    await newPost.save();

    res.status(201).json(newPost);
    console.log("Post creado con éxito");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error al crear el post" });
  }
};
