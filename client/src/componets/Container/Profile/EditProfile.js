// export default EditProfile

// import "./Addcriminal.css"
import React, { useEffect, useState } from "react";
import Sidebar from "../../SIdebar/Sidebar";
import { useNavigate } from "react-router";
import axios from "axios";

function EditProfile() {
  const [editForm, setEditForm] = useState({
    firstName: "Robera",
    lastName: "Insarmu",
    age: 12,
    crimeType: "murdering",
    crimeDescription: "lorem shshs sh",
    dateofSentence: "",
    yearOfSentence: 4,
  });
  const [full_name, setfullName] = useState("");
  const [date_of_birth, setdate_of_birth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [badge_number, setBadgeNumber] = useState("");
  const [rank, setRank] = useState("");
  const [hire_date, setHireDate] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isEdit, setIsEdit] = useState(false); // Set to false initially
  const [profileId, setProfileId] = useState(null);
  const Navigate = useNavigate();

  useEffect(() => {
    const checkProfileExistence = async () => {
      try {
        const existingProfileResponse = await axios.get(
          "http://localhost:8888/api/user/getProfile",
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        const profileExist = existingProfileResponse.data.message;
        if (profileExist === "Profile exists") {
          setIsEdit(true);
        }
      } catch (error) {
        console.error("Error checking profile existence:", error);
      }
    };
    checkProfileExistence();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !full_name ||
      !date_of_birth ||
      !gender ||
      !address ||
      !phone_number ||
      !department ||
      !badge_number ||
      !rank ||
      !hire_date
    ) {
      setError("Please fill out all fields.");
      return;
    }
    try {
      let response;
      // const existingProfileResponse = await axios.get(
      //   "http://localhost:8888/api/user/getProfile"
      // );
      // const profileExist = existingProfileResponse.message;
      // if (profileExist == "Profile exists") {
      //   setIsEdit(true);
      // }
      if (isEdit) {
        // Update profile if already exists
        response = await axios.post(
          `http://localhost:8888/api/user/updateProfile`,
          {
            full_name,
            full_name,
            date_of_birth,
            gender,
            address,
            phone_number,
            department,
            badge_number,
            rank,
            hire_date,
          },
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        // Store profile data in local storage
        localStorage.setItem(
          "userProfile",
          JSON.stringify(response.data.profile)
        );
        setSuccessMessage("Profile updated successfully");
      } else {
        // Insert new profile if not exists
        response = await axios.post(
          "http://localhost:8888/api/user/insertProfile",
          {
            full_name,
            date_of_birth,
            gender,
            address,
            phone_number,
            department,
            badge_number,
            rank,
            hire_date,
          },
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        // Extract the inserted profile ID from the response
        const { profile } = response.data;
        if (profile) {
          setProfileId(profile.id);
        }
        // Store profile data in local storage
        localStorage.setItem(
          "userProfile",
          JSON.stringify(response.data.profile)
        );
        setSuccessMessage("Profile inserted successfully");
      }
      console.log("response", response);
      const data = response.data;

      if (data.status === "fail") {
        // Handle failure
      }

      if (
        data.message == "Profile inserted successfully" ||
        data.message == "Profile updated successfully"
      ) {
        // Handle success
        setIsEdit(true);
        Navigate("/profile");
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sectionContainer ">
      <div className="section w-72">
        {/* <Sidebar /> */}
        <div className="container__profile_addCr m-10">
          <form className="edit_inputForms">
            <h1 className="section__page_title">
              {isEdit ? "Edit" : "Add"} Profile
            </h1>

            <div className="edit_inputs ">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={full_name}
                onChange={(e) => setfullName(e.target.value)}
              />
            </div>

            {/* <div className="edit_inputs ">
              <label htmlFor="name">Lastname</label>
              <input
                type="text"
                name="lastName"
                value={editForm.lastName}
                onChange={(e) => setlastName(e.target.value)}
              />
            </div> */}
            <div className="edit_inputs ">
              <label htmlFor="date">Date of Birth</label>
              <input
                type="date"
                name="date_of_birth"
                value={date_of_birth}
                onChange={(e) => setdate_of_birth(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="edit_inputs">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={phone_number}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                name="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="badge_number">Badge Number</label>
              <input
                type="text"
                name="badge_number"
                value={badge_number}
                onChange={(e) => setBadgeNumber(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="rank">Rank</label>
              <input
                type="text"
                name="rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
              />
            </div>

            <div className="edit_inputs">
              <label htmlFor="hire_date">Hire Date</label>
              <input
                type="date"
                name="hire_date"
                value={hire_date}
                onChange={(e) => setHireDate(e.target.value)}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            {successMessage && (
              <div className="success-message text-xl text-lime-500 ">
                {successMessage}
              </div>
            )}

            <div className="edit_inputs ">
              <button
                name=""
                className="sign-btn add__criminal"
                onClick={handleSubmit}
              >
                {isEdit ? "Edit" : "Add"} Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
