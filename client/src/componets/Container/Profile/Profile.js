import React, { useEffect } from "react";
import "./profile.css";
import AdminPhoto from "./AdminPhoto";
import { MdMail } from "react-icons/md";
import { FaPhone, FaUser } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import Sidebar from "../../SIdebar/Sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const [profile, setProfile] = useState({
    address: "",
    badge_number: "",
    date_of_birth: "",
    department: "",
    full_name: "",
    gender: "",
    hire_date: "",
    person_id: "",
    phone_number: "",
    rank: "",
    user_id: "",
  });
  useEffect(() => {
    // Update profile data if it changes in the local storage
    setData(JSON.parse(localStorage.getItem("userData")));
    setProfile(JSON.parse(localStorage.getItem("userProfile")));
  }, []);

  console.log("data", data);

  return (
    <div className="sectionContainer">
      <div className="section">
        {/* <Sidebar /> */}
        <div className="container-xP-edit-a">
          <div className="profil_cont">
            <div className="container__profile p-5">
              <AdminPhoto />
              <h3 className="adminName">
                {profile ? profile.full_name : data.username}
              </h3>
              <h4 className="adminRole">{data?.Role?.role_name}</h4>

              {/* <div className="basicInfo">
                // full name
                <h3 className="adminName">{profile.full_name}</h3>
                <h4 className="adminRole">{profile.department}</h4>
              </div> */}

              <div className="basicInfo">
                {/* address */}
                <div className="info">
                  <FaLocationArrow /> {profile.address}
                </div>
                {/* phone */}
                <div className="info">
                  <FaPhone /> {profile.phone_number}
                </div>
                {/* email */}
                <div className="info">
                  <MdMail />
                  {data.email}
                </div>
              </div>

              <div className="horizontalLine"></div>

              <div className="otherInfos">
                <div className="otherInfo">
                  <h4 className="label">Badge number</h4>
                  <p>{profile.badge_number}</p>
                </div>
                <div className="otherInfo">
                  <h4 className="label">Department</h4>
                  <p>{profile.department}</p>
                </div>

                {/* <div className="otherInfo">
                  <h4 className="label">Hire date</h4>
                  <p>{profile.hire_date}</p>
                </div> */}
                <Link className="editProfile" to="/editprofile">
                  <button>Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
