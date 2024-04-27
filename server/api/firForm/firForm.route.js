import express from "express";
import firController from "./firForm.controller.js"; // Update the path to the correct location
import auth from "../../middleware/auth.js";

const FIRroute = express.Router();

FIRroute.post("/FIR", auth, firController.insertFIR);
FIRroute.get("/getFIRByFirID/:id", auth, firController.getFIRById);
FIRroute.get("/getFIRsByUserId/", auth, firController.getFIRsByUserId);

export default FIRroute;
