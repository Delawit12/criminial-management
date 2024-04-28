import express from "express";
import complaintController from "./compliant.controller.js";
import auth from "../../middleware/auth.js";

const complaintRoute = express.Router();

complaintRoute.post("/addComplaint", auth, complaintController.addComplaint);

export default complaintRoute;
