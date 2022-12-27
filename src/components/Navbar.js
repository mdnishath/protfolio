import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-container px-4">
      <ul className=" flex gap-x-5 text-sm font-semibold text-secondery dark:text-slate-400">
        <li className=" relative py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 before:absolute before:left-0 before:bottom-[-1.5px] before:w-full before:border-b-2  before:border-blue-400 before:content-['']"
                : ""
            }
          >
            About
          </NavLink>
        </li>
        <li className=" relative py-4">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 before:absolute before:left-0 before:bottom-[-1.5px] before:w-full before:border-b-2  before:border-blue-400 before:content-['']"
                : ""
            }
          >
            Skills
          </NavLink>
        </li>
        <li className=" relative py-4">
          <NavLink
            to="/repositories"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 before:absolute before:left-0 before:bottom-[-1.5px] before:w-full before:border-b-2  before:border-blue-400 before:content-['']"
                : ""
            }
          >
            Repositories
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
