// criminal.controller.js
import prisma from "../../config/prisma.js";

const criminalController = {
  getAllCriminals: async (req, res) => {
    try {
      const criminals = await prisma.criminal.findMany();
      res.status(200).json({ criminals });
    } catch (error) {
      console.error("Error fetching all criminals:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getCriminalById: async (req, res) => {
    try {
      const { id } = req.params;
      const criminal = await prisma.criminal.findUnique({
        where: { Criminal_ID: parseInt(id) },
      });
      if (!criminal) {
        res.status(404).json({ message: "Criminal not found" });
      } else {
        res.status(200).json({ criminal });
      }
    } catch (error) {
      console.error("Error fetching criminal by ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getCriminalsByName: async (req, res) => {
    try {
      const { name } = req.query;
      const criminals = await prisma.criminal.findMany({
        where: { Name: { contains: name } },
      });
      res.status(200).json({ criminals });
    } catch (error) {
      console.error("Error fetching criminals by name:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default criminalController;
