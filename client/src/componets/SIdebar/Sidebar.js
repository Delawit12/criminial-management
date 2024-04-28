import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    const userDataFound = JSON.parse(localStorage.getItem("userData"));

    const role = userDataFound.role_id;
    setUserRole(role);
  }, []);
  return (
    <div className="sideBar__container bg-gray-800">
      <div className="sideBar__contents">
        <div className="container__content">
          <Link to="/profile">
            <a href="#" className="side__elements">
              <FaUserCircle className="side__icons" />
              Profile
            </a>
          </Link>
        </div>

        <div className="container__content">
          <Link to="/viewall">
            <a href="#" className="side__elements">
              <FaListAlt className="side__icons" />
              View criminals
            </a>
          </Link>
        </div>
        <div className="container__content">
          <Link to="/viewSuspect">
            <a href="#" className="side__elements">
              <FaListAlt className="side__icons" />
              View Suspect
            </a>
          </Link>
        </div>
        <div className="container__content">
          <Link to="/search">
            <a href="#" className="side__elements">
              <FaListAlt className="side__icons" />
              Search
            </a>
          </Link>
        </div>
        <div className="container__content">
          <Link to="/profile">
            <a href="#" className="side__elements">
              <FaUserCircle className="side__icons" />
              Profile
            </a>
          </Link>
        </div>
        {userRole != 2 ? (
          <div className="container__content">
            <Link to="/viewAdmin">
              <a href="#" className="side__elements">
                <FaListAlt className="side__icons" />
                View users
              </a>
            </Link>
          </div>
        ) : null}
        {userRole != 2 ? (
          <div className="container__content">
            <Link to="/addUser">
              <a href="#" className="side__elements">
                <FaUserPlus className="side__icons" />
                Add Users
              </a>
            </Link>
          </div>
        ) : null}
        {userRole === 2 ? (
          <div className="container__content">
            <Link to="/addcriminal">
              <a href="#" className="side__elements">
                <FaUserPlus className="side__icons" />
                Add Criminal
              </a>
            </Link>
          </div>
        ) : null}
        {userRole === 2 ? (
          <div className="container__content">
            <Link to="/addcompliant" className="side__elements">
              <FaUserPlus className="side__icons" />
              Add Compliant
            </Link>
          </div>
        ) : null}
        {userRole === 2 ? (
          <div className="container__content">
            <Link to="/addsuspect" className="side__elements">
              <FaUserPlus className="side__icons" />
              Add Suspect
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Sidebar;
