import React from "react";
import { Link } from "react-router-dom";

export default function DefaultDropdown({ user }) {
  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };
  return (
    <div>
      <div className="w-3 border-t-2 h-3 border-l-2  top-[74px] z-10 right-[46px] border-gray-300 rotate-45 bg-white absolute text-center"></div>
      <div className="flex flex-col absolute right-7 top-20 pt-0 py-4 pb-0 rounded-sm bg-white border-2 border-gray-300 ">
        <div className="flex flex-col px-4 border-b border-gray-300 py-3 cursor-pointer">
          <p className="font-medium ">Hello&nbsp;{user.name}!</p>
          <p className="font-medium ">{user.email}</p>
        </div>
        <Link to="/orders">
          <p className="hover:bg-gray-300 border-b border-gray-300 cursor-pointer px-4 m-0 align-middle w-full py-3 font-medium">
            Orders
          </p>
        </Link>
        <p
          onClick={logoutHandler}
          className="hover:bg-gray-300 cursor-pointer px-4 m-0 rounded-b-sm py-3 font-medium"
        >
          Logout
        </p>
      </div>
    </div>
  );
}
