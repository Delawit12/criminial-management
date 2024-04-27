import prisma from "../../config/prisma.js";
import compliantSchema from "./compliant.schema.js";

const complaintController = {
  addComplaint: async (req, res) => {
    try {
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
        addedBy,
      } = req.body;

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
          added_by: addedBy,
        },
      });

      res.json(newComplaint);
    } catch (error) {
      console.error("Error adding complaint:", error);
      res
        .status(500)
        .json({ error: "An error occurred while adding complaint." });
    }
  },
};

export default complaintController;
