import express from "express";
const appRoute = express.Router();

// all route
import adminRoute from "../api/admin/admin.route.js";
import userRoute from "../api/user/user.route.js";
import FIRroute from "../api/firForm/firForm.route.js";
import suspectRoute from "../api/suspect/suspect.route.js";
import criminalRoute from "../api/criminal/criminal.route.js";

// adding middleware
appRoute.use("/admin", adminRoute);
appRoute.use("/user", userRoute);
appRoute.use("/form", FIRroute);
appRoute.use("/suspect", suspectRoute);
appRoute.use("/criminal", criminalRoute);

export default appRoute;
