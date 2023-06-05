import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
export const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
