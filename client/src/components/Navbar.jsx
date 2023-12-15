import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillSaveFill, BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { BiExit } from "react-icons/bi";
import AccDropDown from "./AccDropdown";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [mode, setMode] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("orders");
    window.location.href = "/";
  };
  // const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.userLoginReducer);
  const { currentUser } = userState;
  const [userClick, setUserClic] = useState(false);
  return (
    <div className="bg-white max-w-[1620px] gap-1 mx-auto flex w-full justify-between items-center p-4 fixed top-0 z-50">
      {/* left side of navbar */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer z-[5]">
          <AiOutlineMenu size={30} />
        </div>
        {/* tailwind is a mobile first approach search on google */}
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl ml-1">
            Eat<span className="font-bold">Classic</span>
          </h1>
        </Link>

        <div
          onClick={() => {
            setMode(!mode);
          }}
          className="hidden lg:flex items-center ml-3 bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer hover:border-2 duration-75 border-black"
        >
          <p
            className={
              mode
                ? "bg-black text-white rounded-full p-2 duration-200"
                : "p-2 duration-200"
            }
          >
            {" "}
            Delivery
          </p>
          <p
            className={
              !mode
                ? "bg-black text-white rounded-full p-2 duration-200"
                : "p-2 duration-200"
            }
          >
            {" "}
            PickUp{" "}
          </p>
        </div>
      </div>

      {/* search space */}
      <div className="bg-gray-200 rounded-full flex items-center pl-2 w-96 lg:w-[480px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent border-0 p-2 w-full rounded-e-full"
          type="text"
          placeholder="search foods"
        />
      </div>

      <div className="flex items-center gap-2">
        {/* Cart Button */}
        <Link to="/cart">
          <button className="bg-black text-white text-center align-middle items-center hidden lg:w-32 md:flex justify-between lg:flex py-2 rounded-xl">
            <BsFillCartFill size={20} className="mr-2" /> Cart
            {cartState.cartItems.length ? (
              <p className="ml-2 rounded-lg text-center align-middle bg-white px-1.5 text-black">
                {cartState.cartItems.length}
              </p>
            ) : (
              <p></p>
            )}
          </button>
        </Link>

        {/* Login/Logout */}
        {currentUser ? (
          <>
            <img
              className="w-14 h-14 rounded-full cursor-pointer"
              alt="user"
              onClick={() => {
                setUserClic(!userClick);
              }}
              src="https://as1.ftcdn.net/v2/jpg/05/60/26/08/1000_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg"
            />
            {userClick && (
              <AccDropDown
                className="shadow-xl shadow-gray-700"
                user={currentUser}
              />
            )}
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-black bg-white hidden md:flex items-center py-2 rounded-lg max-md:text-[4px]">
                Login
              </button>
            </Link>
          </>
        )}
      </div>

      {/** mobile menu */}
      {/** overlay */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute z-5 right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Eat<span className="font-bold">Classic</span>
        </h2>
        <nav>
          <div className="bg-gray-200 font-bold py-2 my-2 mx-0">
            {currentUser ? (
              <div className="flex px-2">
                <img
                  className="w-14 h-14 rounded-full cursor-pointer"
                  alt="user"
                  src="https://as1.ftcdn.net/v2/jpg/05/60/26/08/1000_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg"
                />
                <div className="flex flex-col px-4 py-3 cursor-pointer">
                  <p className="font-medium ">Hello&nbsp;{currentUser.name}!</p>
                  <p className="font-medium ">{currentUser.email}</p>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button
                    onClick={() => setNav(!nav)}
                    className="text-gray-800 border-0 bg-gray-300 mx-auto hidden md:flex items-center py-1 rounded-lg max-md:text-[4px]"
                  >
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
          <ul className="flex flex-col p-4 text-gray-800">
            <Link to="/orders">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <TbTruckDelivery size={25} className="mr-4" />
                Orders
              </li>
            </Link>
            <Link to="/favorites">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <MdFavorite size={25} className="mr-4" />
                Favorites
              </li>
            </Link>
            <Link to="/wallet">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <FaWallet size={25} className="mr-4" />
                Wallet
              </li>
            </Link>
            <Link to="/help">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <MdHelp size={25} className="mr-4" />
                Help
              </li>
            </Link>
            <Link to="/promotions">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <AiFillTag size={25} className="mr-4" />
                Promotions
              </li>
            </Link>
            <Link to="/bestones">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <BsFillSaveFill size={25} className="mr-4" />
                Best Ones
              </li>
            </Link>

            <Link to="/invite">
              <li
                onClick={() => setNav(!nav)}
                className="text-xl py-4 flex cursor-pointer hover:font-bold"
              >
                <FaUserFriends size={25} className="mr-4" />
                Invite Friends
              </li>
            </Link>
            <li
              onClick={() => {
                setNav(!nav);
                logoutHandler();
              }}
              className="text-xl py-4 flex cursor-pointer border-t border-gray-400 hover:font-bold"
            >
              <BiExit size={25} className="mr-4" />
              Logout
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
