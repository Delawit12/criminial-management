// userController.js

import jwt from "jsonwebtoken";
import prisma from "../../config/prisma.js";
import bcrypt from "bcrypt";
import userSchema from "./user.schima.js";

const userController = {
  login: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      // Find the user in the database
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // If user not found or password is incorrect, return error
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      // Generate JWT token for authentication
      const token = jwt.sign(
        { id: user.user_id, username: user.username, role_id: user.role_id },
        process.env.JWT_SECRET
      );

      res.status(200).json({
        token: token,
        username: username,
        email: email,
        password: password,
      });
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  insertProfile: async (req, res) => {
    try {
      // Extract user ID from request token
      const user_id = req.user.id;
      console.log(user_id);
      // const user_id = parseInt(userId);

      // Validate request body against user profile schema
      const userProfile = userSchema.userProfile.parse(req.body);
      // userProfile.user_id = userId;
      // console.log("userProfile.user_id", userProfile.user_id);

      // Check if the user exists
      const existingUser = await prisma.user.findUnique({
        where: { user_id: user_id },
      });
      console.log("existing user", existingUser);
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
      //Check if the user already has a profile
      const existingProfile = await prisma.person.findFirst({
        where: { user_id: user_id },
      });
      console.log("existingProfile", existingProfile);
      if (existingProfile) {
        return res
          .status(404)
          .json({ message: "Profile already exists for this user ID" });
      }
      // Update user profile in the database
      const insertedProfile = await prisma.Person.create({
        data: {
          // user_id: userId,
          full_name: userProfile.full_name,
          date_of_birth: new Date(userProfile.date_of_birth),
          gender: userProfile.gender,
          address: userProfile.address,
          phone_number: userProfile.phone_number,
          department: userProfile.department,
          badge_number: userProfile.badge_number,
          rank: userProfile.rank,
          hire_date: new Date(userProfile.hire_date),
          // Associate the profile with the user using their ID
          user: { connect: { user_id: existingUser.user_id } },
        },
      });
      // console.log(data.user_id);

      res.status(200).json({
        message: "Profile inserted successfully",
        profile: insertedProfile,
      });
    } catch (error) {
      console.error("Error inserting profile:", error);
      res.status(500).json({ message: error });
    }
  },

  // Update user profile
  updateProfile: async (req, res) => {
    try {
      // Extract user ID from request
      const userId = req.user.id;
      console.log("userId", userId);

      // Validate request body against user profile schema
      const userProfile = userSchema.userProfile.parse(req.body);
      // Check if the user exists
      const existingUser = await prisma.user.findUnique({
        where: { user_id: userId },
      });
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }

      // Find the person associated with the user
      const existingPerson = await prisma.person.findFirst({
        where: { user_id: userId },
      });
      console.log("existing person", existingPerson);
      if (!existingPerson) {
        return res.status(404).json({ message: "Person profile not found" });
      }

      // Update user profile in the database
      const updatedProfile = await prisma.person.update({
        where: { person_id: existingPerson.person_id },
        data: {
          full_name: userProfile.full_name,
          date_of_birth: new Date(userProfile.date_of_birth),
          gender: userProfile.gender,
          address: userProfile.address,
          phone_number: userProfile.phone_number,
          department: userProfile.department,
          badge_number: userProfile.badge_number,
          rank: userProfile.rank,
          hire_date: new Date(userProfile.hire_date),
        },
      });
      res.status(200).json({
        message: "Profile updated successfully",
        profile: updatedProfile,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: error });
    }
  },
  // Get user profile
  getProfile: async (req, res) => {
    try {
      // Extract user ID from request
      const userId = req.user.id;

      // Retrieve user profile from the database
      const userProfile = await prisma.person.findFirst({
        where: { user_id: userId },
      });
      console.log("userProfile", userProfile);

      if (!userProfile) {
        return res.status(404).json({ message: "User profile not found" });
      }

      res.status(200).json({
        message: "Profile exists",
        profile: userProfile,
      });
    } catch (error) {
      console.error("Error fetching profile:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default userController;
