import React from "react";
import Sidebar from "../../../SIdebar/Sidebar";
import { useState, useEffect } from "react";
import Photo from "../../../Photo/images (8).png";

export default function ViewAdmin() {
  const [items, setItems] = useState();
  const [Isloaded, setIsloaded] = useState();
  const [Error, setError] = useState(null);

  const UserDataRow = (props) => {
    console.log("props", props);
    const handleDelete = async () => {
      try {
        const response = await fetch(
          ` http://localhost:8888/api/admin/deleteUserByAdmin/${props.data.user_id}`,
          {
            method: "DELETE",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        console.log("response", response);
        const json = await response.json();
        console.log(json);
        if (json.status == "success") {
          setIsloaded(true);
          setItems(json.users);
        }
        setItems(json.users);
      } catch (error) {
        console.log("error", error);
      }
    };

    return (
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img class="w-8 h-8 rounded-full" src={Photo} alt="Neil image" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {props.data.username}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {props.data.email}
            </p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              {props.data.Role.role_name}
            </p>
          </div>

          <button
            type="submit"
            className="px-5 py-2 border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </li>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          " http://localhost:8888/api/admin/getAllUser",
          {
            method: "GET",
            headers: {
              "content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        const json = await response.json();
        console.log(json);

        if (json.status == "success") setIsloaded(true);
        setItems(json.users);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  if (Error) {
    return (
      <div className="sectionContainer">
        <div className="section">
          <Sidebar />
          <div className="contents-x py-5 w-[70%]">
            <div className="py-5 ">
              <div
                class="p-4 w-[100%] mb-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400"
                role="alert"
              >
                <span class="font-medium">Danger alert!</span> Error:{" "}
                {Error.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (!Isloaded) {
    return (
      <div className="sectionContainer">
        <div className="section">
          {/* <Sidebar /> */}
          <div className="contents-x py-5 w-[70%]">
            <div className="py-5 ">
              <div
                className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-700 dark:text-yellow-300"
                role="alert"
              >
                <span className="font-medium">!</span> Loading...
              </div>
            </div>
            ;
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sectionContainer">
        <div className="section w-72">
          <Sidebar />
          <div className="contents-x">
            <div className="con w-full">
              <div className="con p-8">
                <div class="p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                  <div class="flex items-center justify-between mb-4">
                    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                      Latest officers
                    </h5>
                    <a
                      href="#"
                      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      all
                    </a>
                  </div>
                  <div class="flow-root w-[50rem] h-[50vh] overflow-y-auto">
                    <ul
                      role="list"
                      class="divide-y  divide-gray-200 dark:divide-gray-700"
                    >
                      {items.map((data, index) => (
                        <UserDataRow data={data} index={index} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
