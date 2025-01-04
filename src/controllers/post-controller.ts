import { Post } from "@models/Post";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error al obtener los posts",
    });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    console.log("Request Body:", req.body);

    const { text, images } = req.body;

    const newPost = new Post({ text, images });
    await newPost.save();

    res.status(201).json(newPost);
    console.log("Post creado con éxito");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error al crear el post" });
  }
};
