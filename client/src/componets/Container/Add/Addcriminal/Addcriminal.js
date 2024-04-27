// export default EditProfile

// import "./Addcriminal.css"
import axios from "axios";
import React, { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router";
import Sidebar from "../../../SIdebar/Sidebar";

function Addcriminal(props) {
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
              <h1 className="section__page_title">
                {isEdit ? "Edit " : "Add"} criminal page{" "}
              </h1>

              <div className="edit_inputs ">
                <label htmlFor="name">Firstname</label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <label htmlFor="name">Lastname</label>
                <input
                  type="text"
                  name="lastName"
                  value={editForm.lastName}
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
              <div className="edit_inputs ">
                <label htmlFor="name">Age</label>
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={(e) => setage(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <label htmlFor="name">Crime Type</label>
                <input
                  type="text"
                  name="crimeType"
                  value={crimeType}
                  onChange={(e) => setcrimeType(e.target.value)}
                />
              </div>
              <div className="edit_inputs ">
                <label htmlFor="name">Crime Description</label>
                <input
                  type="text"
                  name="crimeType"
                  value={crimeDescription}
                  onChange={(e) => setCrimeDescription(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <label htmlFor="name">Date of sentence</label>
                <input
                  type="date"
                  name="dateOfSentence"
                  value={dateOfSentence}
                  onChange={(e) => setdateOfSentence(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <label htmlFor="name">Year of Sentence</label>
                <input
                  type="text"
                  name="yearOfSentence"
                  value={yearOfSentence}
                  onChange={(e) => setyearOfSentence(e.target.value)}
                />
              </div>

              <div className="edit_inputs ">
                <button
                  name=""
                  className="sign-btn add__criminal"
                  onClick={handleSubmit}
                >
                  {isEdit ? "Edit" : "Add"} Criminal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addcriminal;
