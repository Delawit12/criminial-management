import express from "express";
import criminalController from "./criminal.controller.js";
// import auth from "../../middleware/auth.js";

const criminalRoute = express.Router();

criminalRoute.get("/getAllCriminals", criminalController.getAllCriminals);
criminalRoute.get("/getCriminalById/:id", criminalController.getCriminalById);
criminalRoute.get("/getCriminalsByName", criminalController.getCriminalsByName);

export default criminalRoute;
