import BlogPost from "../model/blogPost.model.js";
import { saveBlogPost } from "../services/blog.services.js";

const protectedBlogPostSubmit = async (req, res) => {
  console.log("Submitting blog post", req.body);
  if (!req.body.title || !req.body.content) {
    console.log("Error submitting blog post", req.body);
    return res
      .status(400)
      .json({ message: "Please input valid title and content" });
  }
  try {
    await saveBlogPost(req, res); // Await the saveBlogPost function
    res.status(200).json({ message: "Blog post submitted successfully" });
  } catch (error) {
    console.error("Error saving blog post", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const protectedBlogPostGetByUserId = async (req, res) => {
  const { userId } = req.params; // Use userId from req.params
  console.log("Fetching blog posts for user", userId);
  try {
    const blogPosts = await BlogPost.find({ author: userId }).populate(
      "author",
      ["username", "email"]
    );
    res
      .status(200)
      .json({ message: "Blog posts fetched successfully", blogPosts });
  } catch (error) {
    console.error("Error fetching blog posts", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
