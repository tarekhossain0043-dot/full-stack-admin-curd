import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function Main() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="my-12 px-5 lg:px-25">
        <Outlet />
      </div>
    </div>
  );
}
