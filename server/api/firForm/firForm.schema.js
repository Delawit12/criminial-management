import z from "zod";

const firSchema = {
  createFIR: z.object({
    FIR_Number: z.string(),
    fir_form_fill_Date: z.string(),
    District: z.string(),
    PoliceStation: z.string(),
    InformationReceivedDate: z.string(),
    InformationReceivedTime: z.string(),
    Written: z.boolean(),
    Oral: z.boolean(),
    Status: z.string(),
    Incidents: z.object({
      Date_of_incident: z.string(),
      Location_of_incident: z.string(),
      Time_of_incident: z.string(),
      Incident_type: z.string(),
      Description: z.string(),
      Investigation_status: z.string(),
    }),
    Complainants: z.object({
      First_Name: z.string(),
      FatherName: z.string(),
      MotherName: z.string(),
      DateOfBirth: z.string(),
      Nationality: z.string(),
      Religion: z.string(),
      Occupation: z.string(),
      NationalId: z.string(),
      Address: z.string(),
      PhoneNo: z.string(),
      Relation_with_the_suspect: z.string(),
    }),
    Exhibits: z.object({
      Description: z.string(),
      Attribute_type: z.string(),
      Value: z.string(),
    }),
    CaseOfficers: z.object({
      Officer_Name: z.string(),
      Rank: z.string(),
      Assigned_Date: z.string(),
      Status: z.string(),
    }),
  }),
};

export default firSchema;
