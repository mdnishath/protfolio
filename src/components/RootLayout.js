import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../pages/Profile";

const RootLayout = () => {
  return (
    <>
      <div className=" mb-10 px-1 sm:px-0">
        <Profile />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
