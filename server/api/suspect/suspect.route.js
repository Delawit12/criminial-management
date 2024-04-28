import express from "express";
import suspectController from "./suspect.controller.js"; // Update the path to the correct location
import auth from "../../middleware/auth.js";

const suspectRoute = express.Router();

suspectRoute.post(
  "/addSuspect/:complaintId?",
  auth,
  suspectController.addSuspect
);
suspectRoute.put("/updateSuspect/:id", auth, suspectController.updateSuspect);
// assign as criminal
suspectRoute.put(
  "/updateSuspectStatus/:id",
  auth,
  suspectController.updateSuspectStatus
);
suspectRoute.get("/getSuspectById/:id", auth, suspectController.getSuspectById);
suspectRoute.get("/getAllSuspects", auth, suspectController.getAllSuspects);

export default suspectRoute;

// // Import necessary modules and models
// import express from 'express';
// import { createSuspect, updateSuspect, deleteSuspect, getSuspectById, getAllSuspects, createCriminal, updateCriminal, deleteCriminal, getCriminalById, getAllCriminals } from './controllers/suspectController.js';
// import authMiddleware from './middleware/authMiddleware.js';

// // Initialize Express Router
// const router = express.Router();

// // Suspect Routes
// router.post('/suspects', authMiddleware, createSuspect);
// router.put('/suspects/:id', authMiddleware, updateSuspect);
// router.delete('/suspects/:id', authMiddleware, deleteSuspect);
// router.get('/suspects/:id', authMiddleware, getSuspectById);
// router.get('/suspects', authMiddleware, getAllSuspects);

// // Criminal Routes
// router.post('/criminals', authMiddleware, createCriminal);
// router.put('/criminals/:id', authMiddleware, updateCriminal);
// router.delete('/criminals/:id', authMiddleware, deleteCriminal);
// router.get('/criminals/:id', authMiddleware, getCriminalById);
// router.get('/criminals', authMiddleware, getAllCriminals);

// // Export router
// export default router;
