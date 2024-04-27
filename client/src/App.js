import "./App.css";
import SectionContainer from "./componets/Container/Section/SectionContainer";
import Viewall from "./componets/Container/Viewall/Viewall";
import Footer from "./componets/Footer/Footer";
import Login from "./componets/login/Login";
import Navbar from "./componets/Navbar/Navbar";
import Sidebar from "./componets/SIdebar/Sidebar";

function App() {
  return (
    <div className="w-[100%]">
      <Navbar />
      <SectionContainer />
      {/* <Sidebar /> */}
      <Footer />

      {/* <Footer /> */}

      {/* <Login />  */}

      {/* <Login />  */}
    </div>
  );
}

export default App;
