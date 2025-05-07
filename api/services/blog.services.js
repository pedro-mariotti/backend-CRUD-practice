import BlogPost from "../model/BlogPost.js";
import jwt from "jsonwebtoken";

export const saveBlogPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const savedBlogPost = await BlogPost.create({
      title,
      content,
      author: req.userId,
    });
    console.log("Blog post submitted", savedBlogPost);
    res.status(200).json({ message: "Blog post submitted successfully" });
  } catch (error) {
    console.error("Error saving blog post", error);
    return res
      .status(500)
      .json({ message: `Error submitting blog post:${error}` });
  }
};
