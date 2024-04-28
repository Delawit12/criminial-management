import prisma from "../../config/prisma.js";

const suspectController = {
  addSuspect: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user_id is present in the token payload

      const {
        name,
        age,
        gender,
        height,
        phoneNumber,
        nationality,
        address,
        religion,
        description,
        status,
        reason,
      } = req.body;

      const compliantId = parseInt(req.params.complaintId); // Get complaint ID from request params
      console.log("compliantId", compliantId);

      // Check if any required field is missing
      if (!description || !status || !reason) {
        return res.status(400).json({
          error: "All fields are required.",
          message: "All fields are required.",
        });
      }

      // Get the user ID from the token and find the user in the database
      const user = await prisma.user.findUnique({
        where: {
          user_id: userId,
        },
      });

      if (!user) {
        return res
          .status(404)
          .json({ error: "User not found.", message: "User not found." });
      }

      // Check if the complaint ID is provided and valid
      if (compliantId) {
        const complaint = await prisma.compliant.findUnique({
          where: {
            compliant_id: compliantId,
          },
        });

        if (!complaint) {
          return res.status(404).json({
            error: "Complaint not found.",
            message: "Complaint not found.",
          });
        }
      }

      // Insert new suspect into the database
      const newSuspect = await prisma.suspect.create({
        data: {
          suspect_name: name,
          suspect_age: age,
          suspect_gender: gender,
          suspect_height: height,
          suspect_phone_number: phoneNumber,
          suspect_nationality: nationality,
          suspect_address: address,
          suspect_religion: religion,
          suspect_description: description,
          suspect_status: status,
          suspected_reason: reason,
          compliant_id: compliantId || null, // Use the provided complaint ID or null if not provided
          added_by: userId, // Use the user ID obtained from the token
        },
      });

      res.status(200).json({
        message: "Suspect inserted successfully",
        suspect: newSuspect,
      });
    } catch (error) {
      console.error("Error adding suspect:", error);
      res
        .status(500)
        .json({ error: "An error occurred while adding suspect." });
    }
  },
  updateSuspect: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id, "id");
      const {
        name,
        age,
        gender,
        height,
        phoneNumber,
        nationality,
        address,
        religion,
        description,
        arrestedDateTime,
      } = req.body;

      // Check if suspect exists
      const existingSuspect = await prisma.suspect.findUnique({
        where: {
          suspect_id: parseInt(id),
        },
      });
      if (!existingSuspect) {
        return res.status(404).json({ error: "Suspect not found." });
      }
      if (
        !name ||
        !age ||
        !gender ||
        !height ||
        !phoneNumber ||
        !nationality ||
        !address ||
        !religion ||
        !description ||
        !arrestedDateTime
      ) {
        return res.status(400).json({
          error: "All fields are required.",
          message: "All fields are required.",
        });
      }

      // Update suspect information
      const updatedSuspect = await prisma.suspect.update({
        where: {
          suspect_id: parseInt(id),
        },
        data: {
          suspect_name: name,
          suspect_age: age,
          suspect_gender: gender,
          suspect_height: height,
          suspect_phone_number: phoneNumber,
          suspect_nationality: nationality,
          suspect_address: address,
          suspect_religion: religion,
          suspect_description: description,
          suspect_status: "arrested", // Change status to "arrested"
          arrested_date_time: arrestedDateTime, // Insert arrest date and time
        },
      });
      console.log("updatedSuspect", updatedSuspect);

      res.status(200).json({
        message: "Suspect updated successfully",
        suspect: updatedSuspect,
      });
    } catch (error) {
      console.error("Error updating suspect:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  // to assign as criminal
  updateSuspectStatus: async (req, res) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      const {
        status,
        releasedJustification,
        crimeType,
        decidedPrisonTerm,
        caseStatus,
      } = req.body;

      // Check if suspect exists
      const existingSuspect = await prisma.suspect.findUnique({
        where: {
          suspect_id: parseInt(id),
        },
      });

      if (!existingSuspect) {
        return res.status(404).json({ error: "Suspect not found." });
      }

      const existingCriminal = await prisma.criminal.findFirst({
        where: {
          derived_from_suspect_id: parseInt(id),
        },
      });
      // Update suspect status
      let updatedSuspect;
      let newCriminal;
      if (!existingCriminal) {
        if (status === "prisoned") {
          // Ensure required fields for prisoned status are provided
          if (!crimeType || !decidedPrisonTerm || !caseStatus) {
            return res.status(400).json({
              error:
                "Crime type, decided prison term, and case status are required for prisoned status.",
            });
          }
          // Move data to criminal table
          updatedSuspect = await prisma.suspect.update({
            where: {
              suspect_id: parseInt(id),
            },
            data: {
              suspect_status: status,
            },
          });

          // Insert into criminal table
          newCriminal = await prisma.criminal.create({
            data: {
              criminal_name: existingSuspect.suspect_name,
              criminal_age: existingSuspect.suspect_age,
              criminal_gender: existingSuspect.suspect_gender,
              criminal_height: existingSuspect.suspect_height,
              criminal_phone_number: existingSuspect.suspect_phone_number,
              criminal_nationality: existingSuspect.suspect_nationality,
              criminal_address: existingSuspect.suspect_address,
              criminal_religion: existingSuspect.suspect_religion,
              criminal_description: existingSuspect.suspect_description,
              crime_type: crimeType,
              case_status: caseStatus,
              decided_prison_term: decidedPrisonTerm,
              compliant_id: existingSuspect.compliant_id || null,
              derived_from_suspect_id: parseInt(id),
              added_by: userId,
            },
          });
        } else if (status === "released") {
          if (!releasedJustification) {
            return res.status(400).json({
              error: "All fields are required.",
              message: "All fields are required.",
            });
          }
          // Update suspect status and store released justification
          updatedSuspect = await prisma.suspect.update({
            where: {
              suspect_id: parseInt(id),
            },
            data: {
              suspect_status: status,
              releasedJustification: releasedJustification,
            },
          });
        } else {
          return res.status(400).json({ error: "Invalid status." });
        }
      } else {
        // Existing criminal record, update the record
        newCriminal = await prisma.criminal.update({
          where: {
            criminal_id: existingCriminal.criminal_id,
          },
          data: {
            crime_type: crimeType || existingCriminal.crime_type,
            case_status: caseStatus || existingCriminal.case_status,
            decided_prison_term:
              decidedPrisonTerm || existingCriminal.decided_prison_term,
          },
        });
      }
      if (status === "released") {
        // Update suspect status and store released justification
        if (!releasedJustification) {
          return res.status(400).json({
            error: "All fields are required.",
            message: "All fields are required.",
          });
        }
        updatedSuspect = await prisma.suspect.update({
          where: {
            suspect_id: parseInt(id),
          },
          data: {
            suspect_status: status,
            releasedJustification: releasedJustification,
          },
        });
      } else {
        return res.status(400).json({ error: "Invalid status." });
      }
      res.status(200).json({
        message: "Suspect updated successfully and criminal created",
        suspect: updatedSuspect,
        criminal: newCriminal,
      });
    } catch (error) {
      console.error("Error updating suspect:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  // deleteSuspect: async (req, res) => {
  //   try {
  //     const { id } = req.params;

  //     // Delete the suspect with the given ID
  //     await prisma.suspect.delete({
  //       where: { id: parseInt(id) },
  //     });

  //     res.status(200).json({ message: "Suspect deleted successfully" });
  //   } catch (error) {
  //     console.error("Error deleting suspect:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // },
  getSuspectById: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the suspect with the given ID
      const suspect = await prisma.suspect.findUnique({
        where: { suspect_id: parseInt(id) },
        include: {
          Compliant: true, // Include associated complaint if exists
        },
      });

      if (!suspect) {
        return res.status(404).json({ message: "Suspect not found" });
      }

      res.status(200).json({ message: "Suspect found", suspect });
    } catch (error) {
      console.error("Error fetching suspect:", error);
      res.status(500).json({
        message: "Internal server error",
        error: "An error occurred while fetching suspect.",
      });
    }
  },

  getAllSuspects: async (req, res) => {
    try {
      // Fetch all suspects
      const suspects = await prisma.suspect.findMany({
        include: {
          Compliant: true, // Include associated complaint if exists
        },
      });
      res.status(200).json({ suspects });
    } catch (error) {
      console.error("Error fetching suspects:", error);
      res.status(500).json({
        message: "Internal server error",
        error: "An error occurred while fetching suspects.",
      });
    }
  },
};

export default suspectController;
