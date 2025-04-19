import cloudinary from "../lib/cloudinary.config.js";
import { BlogSingle } from "../schema/BlogSingleSchema.js";

// CRUD Operations for Blog Single
// 1) Create 
export const createBlogSingle = async (req, res) => {
    try {
        // check if title is already taken or not
        const blogSingleExists = await BlogSingle.findOne({ title: req.body.title });
        if (blogSingleExists) {
            return res.status(400).json({
                message: "Blog title already exists, please choose another one",
            });
        }

        // upload the image in cloudinary and get the url
        // handle the image upload before saving to database
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newBlogSingle = await new BlogSingle({
            ...req.body,
            image: cloudinaryResponse.secure_url,
        }).save();
        return res.status(201).json({
            message: "Blog single created successfully",
            data: newBlogSingle,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 2) Read all blog singles
export const getAllBlogSingles = async (req, res) => {
    try {
        const allBlogSingles = await BlogSingle.find();
        // check if blog singles exist or not
        if (allBlogSingles.length === 0) {
            return res.status(404).json({
                message: "No blog singles found",
            });
        }
        return res.status(200).json({
            message: "Blog singles fetched successfully",
            data: allBlogSingles,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 3) Read by id
export const getBlogSingleById = async (req, res) => {
    try {
        const singleBlogSingle = await BlogSingle.findById(req.params.id);
        // check if blog single exists or not
        if (!singleBlogSingle) {
            return res.status(404).json({
                message: "Blog single not found",
            });
        }
        return res.status(200).json({
            message: "Blog single fetched successfully",
            data: singleBlogSingle,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 4) Update by id
export const updateBlogSingleById = async (req, res) => {
    try {
        // if image is uploaded then handle the image upload part
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

            const updatedBlogSingle = await BlogSingle.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body,
                    image: cloudinaryResponse.secure_url,
                },
                { new: true }
            );

            // if blog single not found while doing update operation
            if (!updatedBlogSingle) {
                return res.status(404).json({
                    message: "Blog single not found",
                });
            }
            return res.status(200).json({
                message: "Blog single updated successfully",
                data: updatedBlogSingle,
            });
        }

        // if image is not uploaded then update the blog single without image
        const updatedBlogSingle = await BlogSingle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        // if blog single not found while doing update operation
        if (!updatedBlogSingle) {
            return res.status(404).json({
                message: "Blog single not found",
            });
        }
        return res.status(200).json({
            message: "Blog single updated successfully",
            data: updatedBlogSingle,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}

// 5) Delete by id
export const deleteBlogSingleById = async (req, res) => {
    try {
        const deletedBlogSingle = await BlogSingle.findByIdAndDelete(req.params.id);
        // if blog single not found while doing delete operation
        if (!deletedBlogSingle) {
            return res.status(404).json({
                message: "Blog single not found",
            });
        }
        return res.status(200).json({
            message: "Blog single deleted successfully",
            data: deletedBlogSingle,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        })
    }
}