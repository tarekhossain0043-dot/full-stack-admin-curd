import React, { useEffect, useState } from "react";
import { ChevronsLeft } from "lucide-react";
import { sidebarData } from "../assets/data/data";
import logout from "../assets/sidebar-img/logout.png";
import { NavLink } from "react-router-dom";
export default function Sidebar({ openSidebar, setOpenSidebar }) {
  const [isAcive, setIsActive] = useState(sidebarData[0].label);

  const handleMenuActive = (label) => {
    setIsActive(label);
  };
  useEffect(() => {
    if (window.innerWidth < 640) {
      setOpenSidebar(true);
    } else {
      setOpenSidebar(false);
    }
    window.addEventListener("resize", () => {});
  }, [setOpenSidebar]);

  return (
    <div
      className={`${openSidebar ? "w-20" : "w-60"} bg-secondary py-8 px-5 min-h-screen transition-all duration-500 ease-in-out fixed top-0 left-0 overflow-y-scroll`}
    >
      {/* sidebar head */}
      <div className="pb-10">
        <div
          className={`flex items-center ${openSidebar ? "px-1" : "px-3"}  lg:gap-10 gap-4 justify-between cursor-pointer transition-all duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r from-primary to-purple-600`}
        >
          <span
            className={`text-[24px] ${openSidebar ? "hidden" : "flex"} font-semibold text-white capitalize cursor-pointer transition-all duration-300 ease-in-out hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r from-primary to-purple-600`}
          >
            Assistant.
          </span>
          <ChevronsLeft
            onClick={() => setOpenSidebar((prev) => !prev)}
            className={`w-7 h-7 ${openSidebar ? "rotate-180" : "0"} cursor-pointer transition-all duration-100 ease-in-out hover:text-primary text-white`}
          />
        </div>
      </div>

      {/* sidebar menu */}
      <aside className="flex flex-col gap-5">
        <ul className="flex-1 h-screen flex flex-col gap-4.5">
          {sidebarData.map((menu, index) => (
            <NavLink
              to={`${menu.to}`}
              key={index}
              onClick={() => handleMenuActive(menu.label)}
              className={`${openSidebar ? "px-2" : "px-4"} py-1.75 rounded-sm cursor-pointer transition-all truncate whitespace-nowrap overflow-x-scroll duration-300 ease-in-out ${isAcive === menu.label ? "bg-primary" : "hover:bg-primary/60"} flex items-center gap-3`}
            >
              <img src={menu.icon} className="w-6.25 h-6.25" alt={menu.label} />
              <span className={`${openSidebar ? "hidden" : "block"}`}>
                {menu.label}
              </span>
            </NavLink>
          ))}
        </ul>
        {/* logout btn */}
        <div className="flex items-center justify-center gap-3 border border-[#AAA7A7] rounded-sm cursor-pointer transition-all duration-300 py-3 ease-in-out hover:border-primary">
          <img src={logout} alt="logout-img" className="w-6.25 h-6.25" />
          {!openSidebar ? "Logout" : ""}
        </div>
      </aside>
    </div>
  );
}
