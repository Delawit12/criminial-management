import express from "express";
const adminRoute = express.Router();

import adminController from "./admin.controller.js";
import auth from "../../middleware/auth.js";
adminRoute.post("/adminLogin", adminController.adminLogin);
adminRoute.post(
  "/registerUserByAdmin",
  auth,
  adminController.registerUserByAdmin
);
adminRoute.delete(
  "/deleteUserByAdmin/:userId",
  auth,
  adminController.deleteUserByAdmin
); // Changed to DELETE method and added userId param
adminRoute.post("/updateUserByAdmin", auth, adminController.updateUserByAdmin);
adminRoute.get("/getAllUser", auth, adminController.getAllUsers);

export default adminRoute;
