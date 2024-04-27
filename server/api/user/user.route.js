// userRoutes.js

import express from "express";
import userController from "./user.controller.js";
import auth from "../../middleware/auth.js";

const userRoute = express.Router();

// User login route
userRoute.post("/login", userController.login);
userRoute.post("/insertProfile", auth, userController.insertProfile);
userRoute.post("/updateProfile", auth, userController.updateProfile);
userRoute.get("/getProfile", auth, userController.getProfile);

export default userRoute;
