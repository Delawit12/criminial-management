import jwt from "jsonwebtoken";
import prisma from "../../config/prisma.js";
import adminSchema from "./admin.schema.js";
import bcrypt from "bcrypt";

// Controller function to handle admin registration
const adminController = {
  adminLogin: async (req, res) => {
    try {
      // Implement admin login logic here
      const { username, email, password } = req.body;

      // Example: Check if username and password match an admin in the database
      const userData = await prisma.user.findUnique({
        where: { email },
        include: { Role: true },
      });
      console.log(userData);

      if (!userData || !(await bcrypt.compare(password, userData.password))) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Generate JWT token for authentication
      const token = jwt.sign(
        {
          id: userData.user_id,
          username: userData.username,
          role_id: userData.role_id,
        },
        process.env.JWT_SECRET
      );

      res.status(200).json({ auth: true, token: token, userData: userData });
    } catch (error) {
      console.error("Error logging in admin:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  registerUserByAdmin: async (req, res) => {
    try {
      // Authenticate the admin user (example: check if they're logged in)
      const isAdmin = req.user && req.user.role_id === 1;
      if (!isAdmin) {
        // If not authenticated as admin, return an error
        return res.status(403).json({ message: "Unauthorized access" });
      }
      // Validate request body against admin schema
      adminSchema.registration.parse(req.body);

      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Create the new user using Prisma

      const newUser = await prisma.user.create({
        data: {
          username: req.body.username,
          password: hashedPassword,
          email: req.body.email,
          role_id: req.body.role_id,
        },
      });

      // Send a success response
      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateUserByAdmin: async (req, res) => {
    try {
      // Authenticate the admin user
      const isAdmin = req.user && req.user.role_id === 1;
      if (!isAdmin) {
        return res.status(403).json({ message: "Unauthorized access" });
      }

      // Validate request body against admin schema
      adminSchema.update.parse(req.body);

      // Extract user details from request body
      const { email, username, role_id } = req.body;

      // Find the user to update
      const existingUser = await prisma.user.findUnique({
        where: { email: email },
      });
      // console.log("existingUser", existingUser);
      const userId = existingUser.user_id;
      // If user not found, return error
      if (existingUser === null) {
        return res.status(404).json({ message: "User not found" });
      } else {
        // Update user details
        const updatedUser = await prisma.user.update({
          where: { user_id: userId },
          data: {
            username: username,
            role_id: role_id,
          },
        });
        // Send a success response
        res.status(200).json({
          message: "User details updated successfully",
          user: updatedUser,
        });
      }
    } catch (error) {
      // Handle errors
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteUserByAdmin: async (req, res) => {
    try {
      // Authenticate the admin user
      const isAdmin = req.user && req.user.role_id === 1;
      if (!isAdmin) {
        return res.status(403).json({ message: "Unauthorized access" });
      }

      // Extract username and email from request parameters
      const userId = req.params.userId; // Changed from req.params to req.params.userId
      const user_id = parseInt(userId);
      // Find the user to delete
      const existingUser = await prisma.user.findUnique({
        where: { user_id: user_id },
      });

      // If user not found, return error
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("existingUser", existingUser);

      // Delete the user
      await prisma.user.delete({
        where: { user_id: user_id },
      });

      // Send a success response
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      // Authenticate the admin user
      const isAdmin = req.user && req.user.role_id === 1;
      if (!isAdmin) {
        return res.status(403).json({ message: "Unauthorized access" });
      }

      // Fetch all users from the database
      const users = await prisma.user.findMany({
        include: {
          Role: true, // Include the Role object associated with each user
        },
      });

      // Send a success response with the list of users
      res.status(200).json({ status: "success", users });
    } catch (error) {
      // Handle errors
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default adminController;
