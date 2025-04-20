import cloudinary from "../lib/cloudinary.config.js";
import { Blogs } from "../schema/BlogSchema.js";

export const createBlogs= async(req , res)=>{
  try {
    console.log(res.files)

    const {image,profile}=req.files;

    const cloudinaryResponse1= cloudinary.uploader.upload(image[0].path);
    const cloudinaryResponse2= cloudinary.uploader.upload(profile[0].path);
    const newBlog= await new Blogs({...req.body,image:(await cloudinaryResponse1).secure_url, profile:cloudinaryResponse2.secure_url}).save();
    return res.status(201).json({
      message:"Blog created successfully.",
      data:newBlog
    })
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Internal Server Error."
    })
    
  }
};



export const getAllBlogs= async(req , res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Internal Server Error."
    })
    
  }
};


export const getBlogById= async(req , res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Internal Server Error."
    })
    
  }
};

export const updateBlogById= async(req , res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Internal Server Error."
    })
    
  }
};

export const deleteBlogById= async(req , res)=>{
  try {
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message:"Internal Server Error."
    })
    
  }
};



