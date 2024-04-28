// export default EditProfile

// import "./Addcriminal.css"
import axios from "axios";
import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router";
import Sidebar from "../../../SIdebar/Sidebar";

function Addcriminal(props) {
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
  let path;
  let id = null;
  let fName = props?.selectedCriminal?.name?.split(" ")[0];
  let lName = props?.selectedCriminal?.name?.split(" ")[1];

  const [isEdit, setIsEdit] = useState(props.edit);
  const [editForm, setEditForm] = useState({});

  const [firstName, setfirstName] = useState(fName);
  const [lastName, setlastName] = useState(lName);
  const [age, setage] = useState(props?.selectedCriminal?.age);
  const [crimeType, setcrimeType] = useState(
    props?.selectedCriminal?.crimeType
  );
  const [crimeDescription, setCrimeDescription] = useState(
    props?.selectedCriminal?.crimeDescription
  );
  const [dateOfSentence, setdateOfSentence] = useState(
    new Date(props?.selectedCriminal?.dateOfSentence)
  );
  const [yearOfSentence, setyearOfSentence] = useState(
    props?.selectedCriminal?.yearOfSentence
  );
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const Navigate = useNavigate();

  if (isEdit) {
    id = props?.selectedCriminal?.id;
    path = `http://localhost:8080/admin/updateCriminal/${id}`;
  }
  if (!isEdit) {
    path = "http://localhost:8080/admin/addCriminal";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(path, {
        name: `${firstName} ${lastName}`,
        age,
        crimeType,
        crimeDescription,
        dateOfSentence,
        yearOfSentence,

        user: { role: "superAdmin" },
      });
      const data = response?.data;

      if (data.status == "fail") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setErrorMsg(data.message);
      }
      if (data.status == "success") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setErrorMsg(data.message);
        Navigate("/viewall");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms">
              <h1 className="section__page_title">Add Criminal</h1>

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
                  <input type="number" name="phoneNumber" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="relationshipWithSuspect">
                    Relationship with Suspect
                  </label>
                  <input type="text" name="relationshipWithSuspect" />
                </div>
              </div>

              <div className="form-row">
                <button className="sign-btn add__criminal">Add Criminal</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addcriminal;
