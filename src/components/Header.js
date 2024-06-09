import React from "react";
import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(UserContext);




  return (
    <div className="flex flex-wrap justify-between bg-pink-200 sm:bg-yellow-200 lg:bg-green-200 font-[500]">
      <div className="logo-container">
        <Link to="/">
          <img   className="w-16 mx-6 mt-2"src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center ">
      <ul className="flex p-4 m-4">
         <li className="px-4">
            Online Status :{onlineStatus ?"🟢" :"🔴" }
          </li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about" >About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
                className="loginBtn"
            onClick={() => {
              if (
                btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")
              );
            }}
          >
            {btnName}
          </button>
        </ul>
        <li className="px-4">{loggedInUser} </li>
      </div>
    </div>
  );
};

export default Header;
