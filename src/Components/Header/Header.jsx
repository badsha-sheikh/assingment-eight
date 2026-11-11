import React, { useState } from "react";
import logo from "../../assets/logo.png";
import gitHubLogo from "../../assets/github-logo.png";
import { NavLink } from "react-router";
const Header = () => {
  
const navLinks = (
  <>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `ml-2 px-3 py-2 ${
          isActive
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-600 hover:text-purple-600"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/apps"
      className={({ isActive }) =>
        `ml-2 px-3 py-2 ${
          isActive
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-600 hover:text-purple-600"
        }`
      }
    >
      Apps
    </NavLink>

    <NavLink
      to="/install"
      className={({ isActive }) =>
        `ml-2 px-3 py-2 ${
          isActive
            ? "text-purple-600 border-b-2 border-purple-600"
            : "text-gray-600 hover:text-purple-600"
        }`
      }
    >
      Installation
    </NavLink>
  </>
);


  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            {" "}
            <img className="h-10 w-10 mx-auto" src={logo}></img> HERO.OI
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <img className="h-6 w-8 mx-auto" src={gitHubLogo}></img> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
