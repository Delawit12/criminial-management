import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Route, Router, Routes } from "react-router";
import Profile from "./componets/Container/Profile/Profile";
import { BrowserRouter } from "react-router-dom";
import TheApp from "./componets/TheApp";
import SearchBar from "./componets/Container/searchBar/SearchBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TheApp />);

// ReactDOM.createRoot(document.getElementById("root")).render(
// <BrowserRouter>
{
  /* <Router>
   <Routes>
     <Route path='/' element={<TheApp />} />
    
   </Routes>
   
  </Router> */
}
//   </BrowserRouter>

//  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
