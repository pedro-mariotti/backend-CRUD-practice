import mongoose from "mongoose";
import AutoIncrement from "mongoose-sequence";

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
    select: false,
  },
});


BlogPostSchema.plugin(AutoIncrement(mongoose), { inc_field: "postID" });
const BlogPost = mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
