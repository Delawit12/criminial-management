import React, { useState } from "react";
import Sidebar from "../../../SIdebar/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";

export default function AddSuspect() {
  const Navigate = useNavigate();
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
  const statuses = [
    "Add the suspect status",
    "Requested",
    "searching",
    "Arrested",
    "Prisoned",
    "Released",
  ];
  const suspectedReasons = [
    "Add the reason of suspection",
    "Robbery",
    "Assault",
    "Burglary",
    "Fraud",
    "Drug Possession",
    "Kidnapping",
    "Homicide",
    "Forgery",
    "Embezzlement",
    "Terrorism",
    "Vandalism",
    "Arson",
    "Stalking",
    "Cybercrime",
    "Human Trafficking",
  ];
  const [setError, setErrorMessage] = useState(null);
  const [setSuccess, setSuccessMessage] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    phoneNumber: "",
    nationality: "",
    address: "",
    religion: "Select Religion",
    status: "Add the suspect status",
    arrestedDateTime: "",
    reason: "Add the reason of suspection",
    description: "",
    releasedJustification: "",
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
      let url = "http://localhost:8888/api/suspect/addSuspect";
      let complaintId = localStorage.getItem("compliantId");
      console.log("complaintId", complaintId);
      if (typeof complaintId == "string") {
        complaintId = parseInt(complaintId);
      }
      if (complaintId) {
        url += `/${complaintId}`;
      }
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      });
      console.log("response", response);
      if (response.data.message === "Suspect inserted successfully") {
        alert("Suspect inserted successfully!");
        setFormData({
          name: "",
          age: "",
          gender: "",
          height: "",
          phoneNumber: "",
          nationality: "",
          address: "",
          religion: "Select Religion",
          status: "Add the suspect status",
          description: "",
          reason: "Add the reason of suspection",
          arrestedDateTime: "",
          releasedJustification: "",
        });
        Navigate("/viewsuspect");
        setSuccessMessage(response.data.message);
        alert(setSuccess);
      } else {
        alert("Failed to add suspect. Please try again later.");
      }
    } catch (error) {
      console.error("Error adding suspect:", error);
      console.log("Error adding suspect:", error);
      setErrorMessage(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms" onSubmit={handleSubmit}>
              <h1 className="section__page_title">Add Suspect</h1>
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
                  <label htmlFor="name">Suspect Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="age">Suspect Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="gender">Suspect Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="edit_inputs">
                  <label htmlFor="height">Suspect Height</label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="phoneNumber">Suspect Phone Number</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="nationality">Suspect Nationality</label>
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="address">Suspect Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="religion">Suspect Religion</label>
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
                <div className="edit_inputs">
                  <label htmlFor="status">Suspect Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    {statuses.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <div className="edit_inputs">
                    <label htmlFor="arrestedDateTime">Arrested Date Time</label>
                    <input
                      type="datetime-local"
                      name="arrestedDateTime"
                      value={formData.arrestedDateTime}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="edit_inputs">
                  <label htmlFor="reason">Suspected Reason</label>
                  <select
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                  >
                    {suspectedReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <div className="edit_inputs">
                    <label htmlFor="description">Suspect Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter the description of the suspect"
                    ></textarea>
                  </div>
                  <div className="edit_inputs">
                    <label htmlFor="releasedJustification">
                      Released Justification
                    </label>
                    <textarea
                      name="releasedJustification"
                      value={formData.releasedJustification}
                      onChange={handleChange}
                      placeholder="Enter the justification for the release of the suspect"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="sign-btn add__criminal">
                  Add Suspect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
