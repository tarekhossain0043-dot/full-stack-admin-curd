import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function Layout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div>
      <div className="flex min-h-screen">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className={`${!openSidebar ? "ml-63.25" : "ml-22"} flex-1`}>
          <Main />
        </div>
      </div>
    </div>
  );
}
