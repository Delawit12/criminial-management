import React from "react";
import Sidebar from "../../../SIdebar/Sidebar";

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
  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms">
              <h1 className="section__page_title">Add Compliant</h1>

              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="fatherName">Father's Name</label>
                  <input type="text" name="fatherName" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="motherName">Mother's Name</label>
                  <input type="text" name="motherName" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="dateOfBirth">Date of Birth</label>
                  <input type="date" name="dateOfBirth" />
                </div>
                <div className="edit_inputs">
                  <label htmlFor="nationality">Nationality</label>
                  <input type="text" name="nationality" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="religion">Religion</label>
                  <select name="religion">
                    {religions.map((religion, index) => (
                      <option key={index} value={religion}>
                        {religion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="occupation">Occupation</label>
                  <input type="text" name="occupation" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="nationalID">National ID</label>
                  <input type="text" name="nationalID" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="address">Address</label>
                  <input type="text" name="address" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="text" name="phoneNumber" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="relationshipWithSuspect">
                    Relationship with Suspect
                  </label>
                  <input type="text" name="relationshipWithSuspect" />
                </div>
              </div>

              <div className="form-row">
                <button className="sign-btn add__criminal">
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
