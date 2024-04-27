import React from "react";
import { redirect } from "react-router-dom";
function Protected({ auth, children }) {
//   const navigate = useNavigate();
  console.log(auth,'aaaa')
  if (!auth) {
    redirect("/login");
    return
  }
  return children;
}
export default Protected;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// function Protected({ auth, children }) {
//   const navigate = useNavigate();
//   console.log(auth,'aaaa')
//   console.log('dddd')
//   if (!auth) {
//     return navigate("/login");
//   }
//   return children;
// }
// export default Protected;