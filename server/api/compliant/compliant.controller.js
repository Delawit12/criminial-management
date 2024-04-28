import prisma from "../../config/prisma.js";
import compliantSchema from "./compliant.schema.js";

const complaintController = {
  addComplaint: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming user_id is present in the token payload

      const {
        description,
        dateReceived,
        status,
        firstName,
        fatherName,
        motherName,
        dateOfBirth,
        nationality,
        religion,
        occupation,
        nationalID,
        address,
        phoneNumber,
        relationshipWithSuspect,
      } = req.body;

      // Check if any required field is missing
      if (
        !description ||
        !dateReceived ||
        !status ||
        !firstName ||
        !dateOfBirth ||
        !nationality ||
        !religion ||
        !nationalID ||
        !address ||
        !phoneNumber ||
        !relationshipWithSuspect
      ) {
        return res
          .status(400)
          .json({
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
        return res.status(404).json({ error: "User not found." });
      }

      // Insert new complaint into the database
      const newComplaint = await prisma.compliant.create({
        data: {
          compliant_description: description,
          date_received: dateReceived,
          status: status,
          compliant_first_name: firstName,
          compliant_father_name: fatherName,
          compliant_mother_name: motherName,
          compliant_date_of_birth: dateOfBirth,
          compliant_nationality: nationality,
          compliant_religion: religion,
          compliant_occupation: occupation,
          compliant_national_id: nationalID,
          compliant_address: address,
          compliant_phone_number: phoneNumber,
          relationship_with_suspect: relationshipWithSuspect,
          added_by: userId, // Use the user ID obtained from the token
        },
      });

      res.status(200).json({
        message: "Complaint add successfully",
        complaint: newComplaint,
      });
    } catch (error) {
      console.error("Error adding complaint:", error);
      res
        .status(500)
        .json({
          error: "An error occurred while adding complaint.",
          message: "Internal server error",
        });
    }
  },
};

export default complaintController;
