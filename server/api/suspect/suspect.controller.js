import prisma from "../../config/prisma.js";

const suspectController = {
  updateSuspect: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id, "id");
      const { status } = req.body;

      // Update the status of the suspect with the given ID
      const updatedSuspect = await prisma.suspect.update({
        where: { Suspect_ID: parseInt(id) },
        data: { Status: status },
        include: {
          // Include related data such as FIR, criminal, etc.
          FIR: true,
          Criminal: true,
        },
      });
      console.log("updatedSuspect", updatedSuspect);

      // Check if the status changed to "arrested"
      if (status === "arrested") {
        // Check if the suspect already has a linked criminal record
        if (updatedSuspect.criminal_id) {
          res.status(200).json({
            message: "Suspect already has a linked criminal record",
            suspect: updatedSuspect,
          });
        } else {
          // Extract relevant information from the suspect
          const {
            Name,
            Age,
            Gender,
            Address,
            Height,
            PhoneNo,
            Nationality,
            Religion,
          } = updatedSuspect;

          // Create a new entry in the criminal table
          const newCriminal = await prisma.criminal.create({
            data: {
              Name,
              Age,
              Gender,
              Address,
              Height,
              PhoneNo,
              Nationality,
              Religion,
              Status: "arrested",
              Arrest_date: new Date(),
            },
          });

          // Update the suspect to link it to the new criminal record
          const updatedSuspectWithCriminal = await prisma.suspect.update({
            where: { Suspect_ID: parseInt(id) },
            data: { criminal_id: newCriminal.Criminal_ID },
          });

          res.status(200).json({
            message:
              "Suspect updated successfully, data entered into the criminal table",
            suspect: updatedSuspectWithCriminal,
            newCriminal: newCriminal,
          });
        }
      } else {
        // If the status is not "arrested", respond with only the updated suspect data
        res.status(200).json({
          message: "Suspect updated successfully",
          suspect: updatedSuspect,
        });
      }
    } catch (error) {
      console.error("Error updating suspect:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteSuspect: async (req, res) => {
    try {
      const { id } = req.params;

      // Delete the suspect with the given ID
      await prisma.suspect.delete({
        where: { id: parseInt(id) },
      });

      res.status(200).json({ message: "Suspect deleted successfully" });
    } catch (error) {
      console.error("Error deleting suspect:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getSuspectById: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the suspect with the given ID
      const suspect = await prisma.suspect.findUnique({
        where: { id: parseInt(id) },
      });

      if (!suspect) {
        return res.status(404).json({ message: "Suspect not found" });
      }

      res.status(200).json({ message: "Suspect found", suspect });
    } catch (error) {
      console.error("Error fetching suspect:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllSuspects: async (req, res) => {
    try {
      // Fetch all suspects
      const suspects = await prisma.suspect.findMany();

      res.status(200).json({ suspects });
    } catch (error) {
      console.error("Error fetching suspects:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default suspectController;
