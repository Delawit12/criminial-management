import React from "react";
import axios from "axios";
import { useState } from "react";
import { AiFillWarning } from "react-icons/ai";
import { useNavigate } from "react-router";
import Sidebar from "../../../SIdebar/Sidebar";

export default function AddSuspect() {
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

  // let path;
  // let id = null;
  // let fName = props?.selectedCriminal?.name?.split(" ")[0];
  // let lName = props?.selectedCriminal?.name?.split(" ")[1];

  // const [isEdit, setIsEdit] = useState(props.edit);
  // const [editForm, setEditForm] = useState({});

  // const [firstName, setfirstName] = useState(fName);
  // const [lastName, setlastName] = useState(lName);
  // const [age, setage] = useState(props?.selectedCriminal?.age);
  // const [crimeType, setcrimeType] = useState(
  //   props?.selectedCriminal?.crimeType
  // );
  // const [crimeDescription, setCrimeDescription] = useState(
  //   props?.selectedCriminal?.crimeDescription
  // );
  // const [dateOfSentence, setdateOfSentence] = useState(
  //   new Date(props?.selectedCriminal?.dateOfSentence)
  // );
  // const [yearOfSentence, setyearOfSentence] = useState(
  //   props?.selectedCriminal?.yearOfSentence
  // );
  // const [error, setError] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  // const Navigate = useNavigate();

  // if (isEdit) {
  //   id = props?.selectedCriminal?.id;
  //   path = `http://localhost:8080/admin/updateCriminal/${id}`;
  // }
  // if (!isEdit) {
  //   path = "http://localhost:8080/admin/addCriminal";
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(path, {
  //       name: `${firstName} ${lastName}`,
  //       age,
  //       crimeType,
  //       crimeDescription,
  //       dateOfSentence,
  //       yearOfSentence,

  //       user: { role: "superAdmin" },
  //     });
  //     const data = response?.data;

  //     if (data.status == "fail") {
  //       setError(true);
  //       setTimeout(() => {
  //         setError(false);
  //       }, 5000);
  //       setErrorMsg(data.message);
  //     }
  //     if (data.status == "success") {
  //       setError(true);
  //       setTimeout(() => {
  //         setError(false);
  //       }, 5000);
  //       setErrorMsg(data.message);
  //       Navigate("/viewall");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="sectionContainer">
      <div className="section">
        <Sidebar />
        <div className="container-xP-edit-a">
          <div className="container__profile_addCr">
            <form className="edit_inputForms">
              <h1 className="section__page_title">Add Suspect</h1>

              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="suspectName">Suspect Name</label>
                  <input type="text" name="name" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectAge">Suspect Age</label>
                  <input type="number" name="age" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectGender">Suspect Gender</label>
                  <select name="gender">
                    <option value="male">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectHeight">Suspect Height</label>
                  <input type="text" name="height" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectPhoneNumber">
                    Suspect Phone Number
                  </label>
                  <input type="number" name="phoneNumber" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectNationality">
                    Suspect Nationality
                  </label>
                  <input type="text" name="nationality" />
                </div>
              </div>

              <div className="form-row">
                <div className="edit_inputs">
                  <label htmlFor="suspectAddress">Suspect Address</label>
                  <input type="text" name="address" />
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectReligion">Suspect Religion</label>
                  <select name="religion">
                    {religions.map((religion, index) => (
                      <option key={index} value={religion}>
                        {religion}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="edit_inputs">
                  <label htmlFor="suspectStatus">Suspect Status</label>
                  <select name="status">
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
                    <input type="datetime-local" name="arrestedDateTime" />
                  </div>
                </div>

                <div className="edit_inputs">
                  <label htmlFor="suspectedReason">Suspected Reason</label>
                  <select name="reason">
                    {suspectedReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-row">
                  <div className="edit_inputs">
                    <label htmlFor="suspectDescription">
                      Suspect Description
                    </label>
                    <textarea
                      name="description"
                      placeholder="Enter the description of the suspect"
                    ></textarea>
                  </div>
                  <div className="edit_inputs">
                    <label htmlFor="releasedJustification">
                      Released Justification
                    </label>
                    <textarea
                      name="releasedJustification"
                      placeholder="Enter the justification for the release of the suspect"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <button className="sign-btn add__criminal">Add Suspect</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
