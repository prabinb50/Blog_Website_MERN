import { User } from "../schema/UserSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// CRUD operations for User
// 1) Create or Register user
export const registerUser = async (req, res) => {
    try {
        // 1. Check if user already exists or not
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(409).json({
                message: "User already exists with this email please choose another email"
            });
        }

        // 2. hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        if (!hashedPassword) {
            return res.status(500).json({
                message: "Error hashing password"
            });
        }

        // 3. create a new user
        const newRegisteredUser = await new User({ ...req.body, password: hashedPassword }).save();
        // if user is not created then return error
        if (!newRegisteredUser) {
            return res.status(404).json({
                message: "Could not register user, please register first"
            });
        }
        return res.status(201).json({
            message: "You have been registered successfully",
            data: newRegisteredUser
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// 2) Login user
export const loginUser = async (req, res) => {
    try {
        // 1. Check if user exists or not
        const userExists = await User.findOne({ email: req.body.email });

        // if user does not exist then return error
        if (!userExists) {
            return res.status(404).json({
                message: "User does not exist with this email please register first"
            });
        }

        // 2. if user exists then compare the password using bcrypt
        const isPasswordMatched = await bcrypt.compare(req.body.password, userExists.password);

        // if password does not match
        if (!isPasswordMatched) {
            return res.status(401).json({
                message: "Invalid credentials, please try again"
            });
        }

        // 3. if password matches then create a token using jwt
        // const userToken = jwt.sign({ email: userExists.email, id: userExists._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const userToken = jwt.sign({ email: userExists.email, id: userExists._id }, "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjQ0YTU2Nzk4OTNiNDY4OWY3MDA1NDYzZjgzZDYwYWU3In0.e30.9Xa_DRa9G1dtHaVkxLIWAKSf-vyBAQBXaqK024u6xgcWkoApwFBjjCd3ZgtCDbcyRpq8C4_lf9A4JHy6XzSa8g", { expiresIn: "7d" });

        // if token is not generated
        if (!userToken) {
            return res.status(500).json({
                message: "Could not generate token, please try again"
            });
        }

        // if token is generated then return the user data and token
        return res.status(200).json({
            message: "You have been logged in successfully",
            data: {
                user: userExists,
                token: userToken
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// 3) Get all users
export const getAllUsers = async (req, res) => {
    try {
        // Get all users from the database
        const allUsers = await User.find();

        // if no users found then return error
        if (!allUsers) {
            return res.status(404).json({
                message: "No users found"
            });
        }

        // if users found then return the users
        return res.status(200).json({
            message: "All users fetched successfully",
            data: allUsers
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// 4) Get single user by id
export const getSingleUserById = async (req, res) => {
    try {
        // Get user by id from the database
        const singleUser = await User.findById(req.params.id);

        // if no user found then return error
        if (!singleUser) {
            return res.status(404).json({
                message: "User doesnot exist matching the given id"
            });
        }

        // if user found then return the user
        return res.status(200).json({
            message: "Single user fetched successfully",
            data: singleUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// 5) Update user by id
export const updateUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        // check if user exists or not
        if (!user) {
            return res.status(404).json({
                message: "User does not exist matching the given id"
            });
        }

        // handle the password hashing
        // let newHashedPassword = user.password;
        // if (req.body.password) {
        //     newHashedPassword = bcrypt.hash(req.body.password);
        // }

        // Handle the password hashing properly
        let updatedData = { ...req.body };

        // Only hash password if it's included in the request
        if (req.body.password) {
            const newHashedPassword = await bcrypt.hash(req.body.password, saltRounds);
            updatedData.password = newHashedPassword;
        }

        // Update user by id from the database
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        // update user by id from the database
        // const updatedUser = await User.findByIdAndUpdate(req.params.id, { ...req.body, password: newHashedPassword }, { new: true });

        // if user does not exist then return error
        // if (!updatedUser) {
        //     return res.status(404).json({
        //         message: "User does not exist matching the given id"
        //     });
        // }

        // if user updated then return the user
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

// 6) Delete user by id
export const deleteUserById = async (req, res) => {
    try {
        // check if user exists or not
        const checkUser = await User.findById(req.params.id);
        if (!checkUser) {
            return res.status(404).json({
                message: "User does not exist matching the given id"
            });
        }

        // Delete user by id from the database
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        // if user deleted then return the user
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}