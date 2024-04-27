import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";

import Photo1 from "../Photo/images (8).png";
import Photo2 from "../Photo/sealing-criminal-records-rgb-color-icon-2GF7H62.jpeg";
import { Navigate } from "react-router-dom";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handelVisiblity = this.handelVisiblity.bind(this);
    this.handlesignout = this.handlesignout.bind(this);
    this.state = {
      visibilty: false,
    };
  }

  handelVisiblity() {
    this.setState((pre) => {
      return {
        visibilty: !pre.visibilty,
      };
    });
  }

  handlesignout() {
    localStorage.removeItem("userData");
    localStorage.removeItem("auth");
    console.log("sifjwsejhfweu");

    // window.history.forward();
  }

  navigate() {
    <Navigate to="/viewall" replace={true} />;
  }

  render() {
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="w-full max-w-7xl sm:px-6 ">
            <div className="relative flex h-50 w-full justify-between h-50">
              <div className=" inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-[50px] lg:hidden"
                    src=""
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-auto h-[50px] lg:block"
                    src=""
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex mx-[-35px] py-4">
                    <h1 className="font-lg font-extrabold">
                      <a href="#" className="px-3 py-2 text-xl text-white">
                        Criminal Recording Manangement System{" "}
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>

                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <div className="relative ml-3">
                  <div>
                    <button
                      onClick={this.handelVisiblity}
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src={
                          "data:image/jpeg;base64,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"
                        }
                        alt=""
                      />
                    </button>
                  </div>

                  {this.state.visibilty && (
                    <div className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-gray-700 rounded-md shadow-lg drop dropdown ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700"
                        to="/profile"
                      >
                        <a href="#">Profile</a>
                      </Link>

                      <Link
                        className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-gray-700"
                        to="/"
                        onClick={this.handlesignout}
                      >
                        Sign out
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
