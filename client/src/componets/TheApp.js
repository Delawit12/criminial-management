import React, { useState } from "react";
import SearchBar from "./Container/searchBar/SearchBar";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import {
  Route,
  BrowserRouter as Router,
  redirect,
  Routes,
  Navigate,
  Navigator,
  useNavigate,
} from "react-router-dom";

import Login from "./login/Login";
import Viewall from "./Container/Viewall/Viewall";
import Protected from "./Protected/ProtectedRoute";
import AddAdmin from "./Container/Add/Addadmin/AddAdmin";
import ViewAdmin from "./Container/viewAdmin/Admintable/ViewAdmin";
import Profile from "./Container/Profile/Profile";
import EditProfile from "./Container/Profile/EditProfile";
import Addcriminal from "./Container/Add/Addcriminal/Addcriminal";
// import AddFir from "./Container/Add/Addfir/AddFir.js";
// import ViewSinglecriminal from "./Container/Viewall/ViewSinglecriminal";

export default function TheApp() {
  const [auth, setAuth] = useState(false);
  const [selectedCriminal, setSelectedCriminal] = useState({});

  React.useEffect(() => {
    if (localStorage.getItem("auth")) setAuth((prev) => true);
  }, [auth]);

  return (
    <Router>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/login" exact element={<Login />} />
        <Route
          path="/viewall"
          exact
          element={
            <Protected auth={auth}>
              {" "}
              <Viewall setSelectedCriminal={setSelectedCriminal} />{" "}
            </Protected>
          }
        />
        <Route path="/search" exact element={<SearchBar />} />
        <Route
          path="/addUser"
          exact
          element={
            <Protected auth={auth}>
              {" "}
              <AddAdmin />{" "}
            </Protected>
          }
        />
        <Route path="/viewAdmin" exact element={<ViewAdmin />} />
        {/* <Route path="/viewFir" exact element={<AddFir />} /> */}
        <Route path="/getusers" exact element={<AddAdmin />} />
        <Route path="/" element={<Login />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/editprofile" exacts element={<EditProfile />} />
        <Route
          path="viewall"
          element={<Viewall setSelectedCriminal={setSelectedCriminal} />}
        />
        {/* <Route
          path="/addcriminal"
          exact
          element={<Addcriminal edit={false} />}
        /> */}
        {/* <Route
          path="editcriminal"
          exact
          element={
            <Addcriminal edit={true} selectedCriminal={selectedCriminal} />
          }
        /> */}
        {/* <Route path="singlecriminal" element={<ViewSinglecriminal />} /> */}
        {/* <Route path="search" element={<SearchBar />} /> */}
        {/* <Route path="addAdmin" element={<AddAdmin />} /> */}
        {/* <Route path="addcriminal" element={<Addcriminal />} /> */}
        {/* <Route path="profile" exact="true" element={<Profile />} /> */}
        {/* <Route path="viewAdmin" element={<ViewAdmin />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}
