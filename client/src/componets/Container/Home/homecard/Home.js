import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../homecard/photo_2024-04-28_08-23-38.jpg"; // Import your background image

const Home = () => {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={sectionStyle} className="text-white min-h-screen">
      <header>
        <div className="container mx-auto py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Criminal Management System for Alazar Police Station
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Welcome to the Criminal Management System. Please log in to access
              the system.
            </p>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
