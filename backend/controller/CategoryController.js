import cloudinary from "../lib/cloudinary.config.js";
import { Categories } from "../schema/CategorySchema.js";

// Crud Operations for Categories Page
// 1) Create
export const createCategory = async (req, res) => {
    try {
        // check if name is already taken or not
        const categoryExists = await Categories.findOne({ name: req.body.name });
        if (categoryExists) {
            return res.status(409).json({
                message: "Category name already exists, please choose another one",
            });
        }

        // upload the image in cloudinary and get the url
        // handle the image upload before saving to database
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newCategory = await new Categories({
            ...req.body, image: cloudinaryResponse.secure_url
        }).save();
        return res.status(201).json({
            message: "Category created successfully",
            data: newCategory,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal Server Error."
        })
    }
}

// 2) Read all categories
export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Categories.find();

        // check if categories exist or not
        if (allCategories.length === 0) {
            return res.status(404).json({
                message: "No categories found",
            });
        }
        return res.status(200).json({
            message: "Categories fetched successfully",
            data: allCategories,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

// 3) Read by id
export const getCategoryById = async (req, res) => {
    try {
        const category = await Categories.findById(req.params.id);
        // check if category exists or not
        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }
        return res.status(200).json({
            message: "Category fetched successfully",
            data: category,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

// 4) Update by id
export const updateCategoryById = async (req, res) => {
    try {
        // if image is uploaded then handle the image upload part
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

            const updatedCategory = await Categories.findByIdAndUpdate(req.params.id, {
                ...req.body, image: cloudinaryResponse.secure_url
            }, { new: true });

            // if category is not found while updating
            if (!updatedCategory) {
                return res.status(404).json({
                    message: "Category not found",
                });
            }
            return res.status(200).json({
                message: "Category updated successfully",
                data: updatedCategory,
            });
        }

        // if image is not uploaded then update the category without image
        const updatedCategory = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true });

        // if category is not found while updating
        if (!updatedCategory) {
            return res.status(404).json({
                message: "Category not found",
            });
        }
        return res.status(200).json({
            message: "Category updated successfully",
            data: updatedCategory,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}

// 5) Delete by id
export const deleteCategoryById = async (req, res) => {
    try {
        const deletedCategory = await Categories.findByIdAndDelete(req.params.id);
        // if category is not found while deleting
        if (!deletedCategory) {
            return res.status(404).json({
                message: "Category not found",
            });
        }
        return res.status(200).json({
            message: "Category deleted successfully",
            data: deletedCategory,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
}


