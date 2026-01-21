import React from "react";

export default function UserLogin() {
  return (
    <div className="text-primary">
      <h4 className="mb-12.75">Account Details</h4>
      <div className="flex flex-col gap-5 max-w-md">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="First Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            id="First Name"
            placeholder="enter first name.."
            className="ring-1 ring-slate-100 rounded-sm text-slate-400 text-sm font-normal p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="First Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            id="First Name"
            placeholder="enter first name.."
            className="ring-1 ring-slate-100 rounded-sm text-slate-400 text-sm font-normal p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="First Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            id="First Name"
            placeholder="enter first name.."
            className="ring-1 ring-slate-100 rounded-sm text-slate-400 text-sm font-normal p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="First Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            First Name
          </label>
          <input
            type="text"
            name="First Name"
            id="First Name"
            placeholder="enter first name.."
            className="ring-1 ring-slate-100 rounded-sm text-slate-400 text-sm font-normal p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          />
        </div>
      </div>
      <div className="mt-12.75 flex items-center justify-between">
        <button className="px-4 py-2.5 text-sm rounded-sm bg-primary text-white hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out capitalize cursor-pointer">
          Register now
        </button>
        <button className="px-4 py-2.5 text-sm rounded-sm bg-secondary text-white hover:bg-primary hover:text-white transition-all duration-300 ease-in-out capitalize cursor-pointer">
          Cancel
        </button>
      </div>
    </div>
  );
}
