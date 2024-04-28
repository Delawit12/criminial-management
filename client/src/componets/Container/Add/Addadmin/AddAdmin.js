import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillWarning } from "react-icons/ai";
import Sidebar from "../../../SIdebar/Sidebar";
import { useNavigate } from "react-router";
// import axios from "axios";

function AddAdmin() {
  const [passType, setPassType] = useState("password");
  const [show, setShow] = useState(<AiFillEyeInvisible />);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const [username, setUserName] = useState("");
  // const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const [user, setUser] = useState("");
  const [role, setRole] = useState("Officer");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState({
    name: "",
    user: "",
    password: "",
  });
  const Navigate = useNavigate();
  // const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  // const passRegex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // const ageRegex = /^[1-9][0-9]?$|^120$/;

  // const checkMatchPassword = (msg) => {
  //   setFormError((prev) => ({ ...prev, password: msg }));
  // };
  // const checkStrength = (msg) => {
  //   setFormError((prev) => ({ ...prev, password: msg }));
  // };

  // const isValidAge = (msg) => {
  //   setFormError((prev) => ({ ...prev, age: msg }));
  // };

  // useEffect(() => {
  //   try {
  //     if (!emailRegex.test(user)) {
  //       console.log("hello", user);
  //       console.log(formError);
  //       setFormError((prev) => ({ ...prev, user: "please input valid email" }));
  //     } else {
  //       setFormError((prev) => ({ ...prev, user: "" }));
  //     }

  //     if (password !== confirmPassword) {
  //       checkMatchPassword("Password must match");
  //     } else {
  //       checkMatchPassword(" ");
  //     }

  //     if (!passRegex.test(password)) {
  //       checkStrength("Password does not match");
  //     } else {
  //       checkStrength(" ");
  //     }

  //     if (!ageRegex.test(age)) {
  //       const minus = age.trim().split("")[0];
  //       console.log("minus", minus);
  //       if (minus === "-") {
  //         console.log("helo minus");
  //         isValidAge("Age must not be negative");
  //       }
  //       // else if(minus === 'undefined'){

  //       isValidAge("Age must be between 18 and 120");
  //       // }

  //       //   else {
  //       //   isValidAge(" ")

  //       // }
  //     }
  //   } catch (err) {}
  // }, [user, password, confirmPassword, age]);

  // useEffect(() => {}, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " http://localhost:8888/api/admin/registerUserByAdmin",
        {
          username,
          password,
          email: user,
          role_id: role === "Officer" ? 2 : 1,
        },
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      const data = response?.data;

      if (data.status === "fail") {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setErrorMsg(data.message);
      }
      if (data.message == "User registered successfully") {
        setSuccessMsg(data.message);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        alert(data.message);
        setErrorMsg(data.message);
        Navigate("/viewAdmin");
      }
    } catch (err) {
      console.log(err);
    }
  };
  //show or hide password
  const showPass = (e) => {
    e.preventDefault();
    if (passType === "password") {
      setPassType("text");
      setShow(<AiFillEye />);
      // Navigate("/viewAdmin", { replace: true });
    } else {
      setPassType("password");
      setShow(<AiFillEyeInvisible />);
    }
  };

  return (
    <div className="sectionContainer">
      <div className="section">
        <div className="contents-x">
          <div className="container-xP-edit-a">
            <div className="container__profile_addCr">
              <form className="edit_inputForms">
                <h1 className="section__page_title">Add User </h1>
                {error && (
                  <div className="error__credential">
                    <AiFillWarning />
                    <p>{errorMsg}</p>
                  </div>
                )}

                <div className="edit_inputs ">
                  <label htmlFor="name">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                {/* <div className="edit_inputs ">
                  <label htmlFor="name">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    size={10}
                  />
                  <p className="text-red-800">{formError.age}</p>
                </div> */}

                {/* <div className="edit_inputs ">
                  <label htmlFor="name">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder=" +251"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    min={10}
                  />
                </div> */}

                {/* <div className="edit_inputs ">
                  <label htmlFor="name">Address</label>
                  <inputsuperadmin
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div> */}

                <div className="edit_inputs ">
                  <label htmlFor="name">Email </label>
                  <p className="text-red-800 capitalize pl-2">
                    {formError.user}
                  </p>
                  <input
                    type="text"
                    name="email"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>

                <div className="edit_inputs ">
                  <label htmlFor="name">Role</label>
                  <select
                    name="role_id"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Admin</option>
                    <option>Officer</option>
                  </select>
                </div>

                <div className="edit_inputs pswd__area  ">
                  <label htmlFor="name">Password</label>
                  <input
                    type={passType}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pswd__area"
                  />

                  <button className="show__pswd" onClick={showPass}>
                    {" "}
                    {show}{" "}
                  </button>
                  {/* <p className="text-red-800">{formError.password}</p> */}

                  <ul className="p-4 text-gray-600">
                    {/* <li>
                  Contains at least one special character (@$!%*?&)

                  </li>
                  <li>
                  Contains at least one digit

                  </li>
                  <li>

                  Contains at least one uppercase letter
                  </li> */}
                    <li>Has a minimum length of 8 characters</li>
                  </ul>
                </div>

                {/* <div className="edit_inputs pswd__area">
                  <label htmlFor="name">Confirm Password</label>

                  <input
                    type={passType}
                    name="confirmPassword"
                    value={confirmPassword}
                    disabled={password ? false : true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pswd__area"
                  />
                  <p className="text-red-800">{formError.password}</p>

                  <button className='show__pswd' onClick={showPass}>  {show } </button>
                </div> */}

                <div className="edit_inputs ">
                  <button
                    name=""
                    className="sign-btn add__criminal"
                    onClick={handleSubmit}
                  >
                    {isEdit ? "Edit" : "Add"} User
                  </button>
                  {successMsg && (
                    <div className="success__message">
                      <p>{successMsg}</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin;
