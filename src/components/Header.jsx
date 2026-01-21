import React, { useState } from "react";
import userImg from "../assets/user-img/user-img.png";
import { ChevronDown, Bell, BellDotIcon } from "lucide-react";
export default function Header() {
  const [userOpen, setUserOpen] = useState(false);
  return (
    <div className="text-[#716666] py-6 border-b border-slate-100 px-10 max-[640px]:px-4 flex items-center max-[640px]:justify-end justify-between">
      <span className="text-[20px] leading-6 font-normal max-[640px]:hidden">
        You’re Logged as Administrator.{" "}
      </span>
      {/* right area */}
      <div className="flex items-center gap-3.5">
        {/* user profile setting */}
        <div className="flex items-center gap-2 5">
          <div className="w-7 h-7 rounded-full shadow-sm ring-1 hover:ring-secondary p-0.5">
            <img src={userImg} alt="usr-img" className="w-full h-full" />
          </div>
          <div
            onClick={() => setUserOpen((prev) => !prev)}
            className="relative z-9999 flex items-center cursor-pointer gap-1.5 transition-all duration-300 ease-in-out hover:text-secondary"
          >
            <span className="text-[14px] font-semibold text-[#574242]">
              John Deo
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-all duration-300 ease-in-out ${userOpen ? "rotate-180" : ""}`}
            />
            <ul
              className={`${userOpen ? "flex" : "hidden"} flex-col absolute top-7 right-0 gap-2 w-40 z-99 cursor-pointer bg-slate-100 shadow-sm rounded-sm p-3`}
            >
              <li className="border-b border-slate-100 py-1 transition-all duration-300 ease-in-out  hover:text-black-h4 w-full text-left block">
                User profile
              </li>
              <li className="border-b border-slate-100 py-1 transition-all duration-300 ease-in-out  hover:text-black-h4 w-full text-left block">
                Notificaton
              </li>
              <li className=" py-1 transition-all duration-300 ease-in-out  hover:text-black-h4 w-full text-left block">
                Settings
              </li>
            </ul>
          </div>
        </div>
        {/* Notificatoin area */}
        <div className="relative">
          <BellDotIcon className="w-5 h-5" />
          <span className="absolute -top-2 right-0 w-4 h-4 p-1 rounded-full shadow-sm bg-primary flex items-center justify-center text-white text-xs">
            1
          </span>
        </div>
      </div>
    </div>
  );
}
