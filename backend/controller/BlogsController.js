import cloudinary from "../lib/cloudinary.config.js";
import { Blogs } from "../schema/BlogSchema.js";

// CRUD Operations for Blog 
// 1) Create
export const createBlog = async (req, res) => {
  try {
    // console.log(req.files)
    // check if title is already taken or not
    const blogExists = await Blogs.findOne({ title: req.body.title });
    if (blogExists) {
      return res.status(409).json({
        message: "Blog title already exists, please choose another one",
      });
    }

    // upload the image in cloudinary and get the url
    // handle the image upload before saving to database
    const cloudinaryResponse1 = await cloudinary.uploader.upload(req.files.image[0].path);
    const cloudinaryResponse2 = await cloudinary.uploader.upload(req.files.profile[0].path);

    const newBlog = await new Blogs({
      ...req.body, image: cloudinaryResponse1.secure_url, profile: cloudinaryResponse2.secure_url
    }).save();
    return res.status(201).json({
      message: "Blog single created successfully",
      data: newBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// 2) Read all blog singles
export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blogs.find();
    // check if blog singles exist or not
    if (allBlogs.length === 0) {
      return res.status(404).json({
        message: "No blog singles found",
      });
    }
    return res.status(200).json({
      message: "Blog singles fetched successfully",
      data: allBlogs,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// 3) Read by id
export const getBlogById = async (req, res) => {
  try {
    const singleBlog = await Blogs.findById(req.params.id);
    // check if blog single exists or not
    if (!singleBlog) {
      return res.status(404).json({
        message: "Blog single not found",
      });
    }
    return res.status(200).json({
      message: "Blog single fetched successfully",
      data: singleBlog,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// 4) Update by id
export const updateBlogById = async (req, res) => {
  try {
    // if image is uploaded then handle the image upload part
    if (req.file) {
      const { image, profile } = req.files

      // upload the image in cloudinary and get the url
      // handle the image upload before saving to database
      const cloudinaryResponse1 = await cloudinary.uploader.upload(image[0].path);
      const cloudinaryResponse2 = await cloudinary.uploader.upload(profile[0].path);

      const updatedBlog = await Blogs.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          image: cloudinaryResponse1.secure_url,
          profile: cloudinaryResponse2.secure_url
        },
        { new: true }
      );

      // if blog single not found while doing update operation
      if (!updatedBlog) {
        return res.status(404).json({
          message: "Blog single not found",
        });
      }
      return res.status(200).json({
        message: "Blog single updated successfully",
        data: updatedBlog,
      });
    }

    // if image is not uploaded then update the blog single without image
    const updatedBlog = await Blogs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // if blog single not found while doing update operation
    if (!updatedBlog) {
      return res.status(404).json({
        message: "Blog single not found",
      });
    }
    return res.status(200).json({
      message: "Blog single updated successfully",
      data: updatedBlog,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error."
    })

  }
};

// 5) Delete by id
export const deleteBlogById = async (req, res) => {
  try {
    const deletedBlog = await Blogs.findByIdAndDelete(req.params.id);
    // if blog single not found while doing delete operation
    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog single not found",
      });
    }
    return res.status(200).json({
      message: "Blog single deleted successfully",
      data: deletedBlog,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: "Internal Server Error."
    })

  }
};

// 6) Search blog by keyword, title, and description. And also, filter blogs by username only
export const searchBlogs = async (req, res) => {
  try {
    const { query, username, sort } = req.query;

    // Build search query
    let searchQuery = {};

    // Text search in title and description
    if (query) {
      searchQuery = {
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } }
        ]
      };
    }

    // Filter by username if provided
    if (username) {
      searchQuery.username = { $regex: username, $options: 'i' };
    }

    // Prepare sort options
    let sortOptions = {};
    if (sort === 'newest') {
      sortOptions = { date: -1 };
    } else if (sort === 'oldest') {
      sortOptions = { date: 1 };
    } else if (sort === 'title_asc') {
      sortOptions = { title: 1 };
    } else if (sort === 'title_desc') {
      sortOptions = { title: -1 };
    } else {
      // Default sort by newest
      sortOptions = { date: -1 };
    }

    // Execute search
    const searchResults = await Blogs.find(searchQuery).sort(sortOptions);

    return res.status(200).json({
      message: "Search results fetched successfully",
      count: searchResults.length,
      data: searchResults,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
