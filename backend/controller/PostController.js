import cloudinary from "../lib/cloudinary.config.js";
import { Posts } from "../schema/PostScgena.js";

// Create Posts
export const createPost = async (req, res) => {
  try {
    // If the post is exist
    const existPost = await Posts.findOne({ text: req.body.text });
    if (existPost) {
      return res.status(409).json({
        message: "This post is already exist.",
      });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
    const newCreatePoste = await new Posts({
      ...req.body,
      post: cloudinaryResponse.secure_url,
    }).save();
    return res.status(201).json({
      message: "Successfully post created.",
      data: newCreatePoste,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// Get all posts
export const getAllPosts = async (req, res) => {
  try {
    const getPosts = await Posts.find();

    return res.status(200).json({
      message: "Get all posts",
      data: getPosts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// get single post
export const getPostById = async (req, res) => {
  try {
    const getSinglePost = await Posts.findById(req.params.id);
    
    if(!getSinglePost){
        return res.status(404).json({
            message:"Data is not available. Please input your data."
        })
     }
    return res.status(200).json({
      message: "Successfully fetch single post.",
      data: getSinglePost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// update  post
export const updatePostById = async (req, res) => {
  try {
    if (req.file) {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        req.file.path
      );
      const updatepost = await Posts.findOneAndUpdate(req.params.id, {
        ...req.body,
        post: cloudinaryResponse.secure_url,
        new: true,
      });
      if (!updatepost) {
        return res.status(404).json({
          message: "Your post not found.",
        });
      }
    }

    const updatepost = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!updatepost){
        return res.status(404).json({
            message:'Post is not found'
        })
    }
    return res.status(200).json({
      message: "Your post updated successfully.",
      data: updatepost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};

// delete single post
export const deletePostById = async (req, res) => {
  try {
    const deletePost = await Posts.findByIdAndDelete(req.params.id);

    if (!deletePost) {
      return res.status(404).json({
        message: "your post is not found",
      });
    }
    return res.status(200).json({
      message: "Your Post deleted Successfully.",
      data: deletePost,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
    });
  }
};
