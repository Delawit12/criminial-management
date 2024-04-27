import prisma from "../../config/prisma.js";
import firSchema from "./firForm.schema.js"; // Import the FIR schema

const firController = {
  insertFIR: async (req, res) => {
    try {
      firSchema.createFIR.parse(req.body); // Validate the request body using the FIR schema

      //   if (error) {
      //     // If validation fails, respond with a 400 Bad Request status and the validation error message
      //     return res.status(400).json({ message: error.message });
      //   }
      console.log("req.body.FIR_Number", req.body.FIR_Number);
      // Extract user ID from the token or wherever it's stored
      const userUser_id = req.user.id;

      const {
        FIR_Number,
        fir_form_fill_Date,
        District,
        PoliceStation,
        InformationReceivedDate,
        InformationReceivedTime,
        Written,
        Oral,
        Status,
        Incidents,
        Complainants,
        Suspects,
        Exhibits,
        CaseOfficers,
      } = req.body;

      const newFIR = await prisma.FIR.create({
        data: {
          FIR_Number,
          fir_form_fill_Date: new Date(fir_form_fill_Date),
          District,
          PoliceStation,
          InformationReceivedDate: new Date(InformationReceivedDate),
          InformationReceivedTime,
          Written,
          Oral,
          Status,
          Incidents: {
            create: Incidents.map((incident) => ({
              ...incident,
              Date_of_incident: new Date(incident.Date_of_incident),
            })),
          },
          Complainants: { create: Complainants },
          Suspects: {
            create: Suspects.map((suspect) => ({
              ...suspect,
              Release_date: new Date(suspect.Release_date),
            })),
          },
          Exhibits: { create: Exhibits },
          CaseOfficers: {
            create: CaseOfficers.map((officer) => ({
              ...officer,
              Assigned_Date: new Date(officer.Assigned_Date),
              userUser_id: userUser_id,
            })),
          },
        },
        include: {
          Incidents: true,
          Complainants: true,
          Suspects: true,
          Exhibits: true,
          CaseOfficers: true,
        },
      });

      res
        .status(201)
        .json({ message: "FIR inserted successfully", FIR: newFIR });
    } catch (error) {
      console.error("Error inserting FIR:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getFIRById: async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id);
      const FIR_ID = parseInt(id);
      console.log("FIR_ID", FIR_ID);

      // Query the database for the FIR entry with the specified ID
      const fir = await prisma.FIR.findUnique({
        where: {
          FIR_ID: FIR_ID, // Assuming id is a numeric identifier
        },
        include: {
          // Include related data such as Incidents, Complainants, Suspects, etc.
          Incidents: true,
          Complainants: true,
          Suspects: true,
          Exhibits: true,
          CaseOfficers: true,
        },
      });

      if (!fir) {
        return res.status(404).json({ message: "FIR not found" });
      }

      res.status(200).json({ message: "FIR found", FIR: fir });
    } catch (error) {
      console.error("Error fetching FIR:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  // to make able to see an office the fir forms he inserted before
  getFIRsByUserId: async (req, res) => {
    try {
      const userId = req.user.id; // Assuming userId found from token

      // Query CaseOfficers table to get FIR IDs associated with the user
      const caseOfficers = await prisma.caseOfficer.findMany({
        where: {
          userUser_id: userId,
        },
        select: {
          FIR_ID: true,
        },
      });

      // Extract FIR IDs from the result
      const firIds = caseOfficers.map((officer) => officer.FIR_ID);

      // Query FIR table to fetch FIR forms using the retrieved FIR IDs
      const firForms = await prisma.FIR.findMany({
        where: {
          FIR_ID: {
            in: firIds,
          },
        },
        include: {
          Incidents: true,
          Complainants: true,
          Suspects: true,
          Exhibits: true,
          CaseOfficers: true,
        },
      });

      res.status(200).json({ FIRs: firForms });
    } catch (error) {
      console.error("Error fetching FIRs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default firController;
