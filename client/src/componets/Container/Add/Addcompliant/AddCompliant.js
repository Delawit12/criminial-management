import React, { useState } from "react";
import Sidebar from "../../../SIdebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddCompliant() {
  const religions = [
    "Select Religion",
    "Orthodox",
    "Islam",
    "Catholic",
    "protestant",
    "Hinduism",
    "Buddhism",
    "Judaism",
    "Sikhism",
    "Other",
  ];
  // const dateWithSeconds = formData.dateReceived + ":00";
  const [setError, setErrorMessage] = useState(null);
  const [setSuccess, setSuccessMessage] = useState(null);
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    nationality: "",
    religion: "Select Religion",
    occupation: "",
    nationalID: "",
    address: "",
    phoneNumber: "",
    relationshipWithSuspect: "",
    description: "",
    dateReceived: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8888/api/complaint/addComplaint",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("response", response);
      if (response.data.message === "Complaint add successfully") {
        // Handle success
        alert("Complaint added successfully!");
        // Optionally, reset the form after successful submission
        setFormData({
          firstName: "",
          fatherName: "",
          motherName: "",
          dateOfBirth: "",
          nationality: "",
          religion: "Select Religion",
          occupation: "",
          nationalID: "",
          address: "",
          phoneNumber: "",
          relationshipWithSuspect: "",
          description: "",
        });
        setSuccessMessage(response.data.message);
        let compliantId = response.data.complaint.compliant_id;
        localStorage.setItem("compliantId", compliantId);
        Navigate("/addsuspect");
      } else {
        // Handle failure
        alert("Failed to add complaint. Please try again later.");
        console.log("Failed to add complaint. Please try again later");
      }
    } catch (error) {
      console.error("Error adding complaint:", error);
      console.log("Error adding complaint:", error);
      setErrorMessage(error.response.data.message);
      alert("Failed . Please try again later.");
    }
  };
  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms" onSubmit={handleSubmit}>
              <h1 className="section__page_title">Add Compliant</h1>

              {setError && (
                <div className="error-message  text-center text-xl text-red-500 ">
                  {setError}
                </div>
              )}
              {setSuccess && (
                <div className="success-message  text-center text-xl text-lime-500 ">
                  {setSuccess}
                </div>
              )}
              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="fatherName">Father's Name</label>
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="motherName">Mother's Name</label>
                  <input
                    type="text"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="nationality">Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="religion">Religion</label>
                  <select
                    name="religion"
                    value={formData.religion}
                    onChange={handleChange}
                  >
                    {religions.map((religion, index) => (
                      <option key={index} value={religion}>
                        {religion}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="edit_inputs">
                    <label htmlFor="nationalID">National ID</label>
                    <input
                      type="text"
                      name="nationalID"
                      value={formData.nationalID}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="edit_inputs">
                    <label htmlFor="occupation">Occupation</label>
                    <input
                      type="text"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="edit_inputs">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="edit_inputs">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="edit_inputs">
                    <label htmlFor="relationshipWithSuspect">
                      Relationship with Suspect
                    </label>
                    <input
                      type="text"
                      name="relationshipWithSuspect"
                      value={formData.relationshipWithSuspect}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="edit_inputs">
                      <label htmlFor="dateReceived">
                        Complain received Date Time
                      </label>
                      <input
                        type="date"
                        name="dateReceived"
                        value={formData.dateReceived}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="edit_inputs">
                      <label htmlFor="description">
                        The Report Description
                      </label>
                      <textarea
                        name="description"
                        placeholder="Enter the description of the case"
                        value={formData.description}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>

                {setError && (
                  <div className="error-message text-xl text-red-500 ">
                    {setError}
                  </div>
                )}
                <button type="submit" className="sign-btn add__criminal">
                  Add Compliant
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
