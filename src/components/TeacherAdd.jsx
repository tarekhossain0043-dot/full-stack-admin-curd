import React from "react";
import _importImg from "../assets/import_cvc.png";
import student_img from "../assets/student_img.png";
import { ChevronRight } from "lucide-react";
export default function TeacherAdd() {
  return (
    <div>
      {/* head */}
      <div className="flex items-center justify-between mb-5">
        <h4>Information Details</h4>
        <div className="flex items-center gap-4">
          <button className="px-3.5 py-3 rounded-sm inline-block shadow-sm text-slate-200 font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            Export CSV
          </button>
          <button className="px-3.5 py-3 rounded-sm flex items-center gap-2.5 shadow-sm text-secondary font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            <img src={_importImg} alt="img-csv" />
            Import CSV
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-9">
        {/* profile */}
        <div className="flex flex-col gap-2.5">
          <label htmlFor="profile_picture">
            <div className="w-17.5 h-18.25 bg-[#D9D9D9] rounded-sm flex items-center justify-center pt-2 pb-4 px-2.5">
              <div className="w-12.50 h-12.50 p-1.5">
                <img
                  src={student_img}
                  alt="student-img"
                  className="w-full h-full"
                />
                <input
                  type="file"
                  name="profile_picture"
                  id="profile_picture"
                  className="hidden"
                />
              </div>
            </div>
            <span className="text-[10px] font-medium text-[#8A8A8A]">
              Profile picture
            </span>
          </label>
        </div>
        {/* profile */}
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
            htmlFor="Last Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Last Name
          </label>
          <input
            type="text"
            name="Last Name"
            id="Last Name"
            placeholder="enter last name.."
            className="ring-1 ring-slate-100 rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="Last Name"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="ring-1 ring-slate-100 rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all flex items-center justify-center outline-none focus:ring-primary w-full"
          >
            <option value="Gender" disabled>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="mt-8.75 flex items-center justify-between gap-9">
        <div className="flex flex-col gap-2 w-full relative">
          <label
            htmlFor="Phone number"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Phone number
          </label>
          <div className="relative">
            <input
              type="number"
              name="Phone number"
              id="Phone number"
              placeholder="enter Phone number"
              className="ring-1 ring-slate-100 pl-17 overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
            />
            <span className="absolute overflow-hidden rounded-bl-sm rounded-tl-sm top-0 left-0 w-15 flex items-center justify-center h-full bg-slate-100 shadow-sm text-black text-sm font-medium">
              <select
                name="country"
                id="country"
                className="outline-none cursor-pointer transition-all duration-300 ease-in-out h-full"
              >
                <option value="+880">+880</option>
                <option value="+880">+880</option>
                <option value="+880">+880</option>
                <option value="+880">+880</option>
                <option value="+880">+880</option>
              </select>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="Class Assign"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Class Assign
          </label>
          <select
            name="Class Assign"
            id="Class Assign"
            className="ring-1 ring-slate-100 overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          >
            <option value="Chemistry">Chemistry</option>
            <option value="French">French</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Social studies">Social studies</option>
            <option value="Home economics">Home economics</option>
            <option value="Pschology ">Pschology</option>
            <option value="Physic ">Physic</option>
            <option value="Accounting ">Accounting</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="Department"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Department
          </label>
          <select
            name="Department"
            id="Department"
            className="ring-1 ring-slate-100  overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          >
            <option value="Chemistry">Chemistry</option>
            <option value="French">French</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Social studies">Social studies</option>
            <option value="Home economics">Home economics</option>
            <option value="Pschology ">Pschology</option>
            <option value="Physic ">Physic</option>
            <option value="Accounting ">Accounting</option>
          </select>
        </div>
      </div>
      {/* another row */}
      <div className="mt-8.75 flex items-center justify-between gap-9">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="Country"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Country
          </label>
          <select
            name="Country"
            id="Country"
            className="ring-1 ring-slate-100 overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          >
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakisthan">Pakisthan</option>
            <option value="England">England</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="subject"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Subject
          </label>
          <select
            name="subject"
            id="subject"
            className="ring-1 ring-slate-100  overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          >
            <option value="Chemistry">Chemistry</option>
            <option value="French">French</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Social studies">Social studies</option>
            <option value="Home economics">Home economics</option>
            <option value="Pschology ">Pschology</option>
            <option value="Physic ">Physic</option>
            <option value="Accounting ">Accounting</option>
          </select>
        </div>
      </div>
      <div className="mt-8.75 flex items-start justify-between gap-9">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="City"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            City
          </label>
          <select
            name="City"
            id="City"
            className="ring-1 ring-slate-100  overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full"
          >
            <option value="Bogura">Bogura</option>
            <option value="Chittagong">Chittagong</option>
            <option value="JamalPur">Dhaka</option>
            <option value="Kustia">Rajshahi</option>
            <option value="Social studies">Borisal</option>
            <option value="Home economics">Cumilla</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="address"
            className="text-[14px] font-medium text-[#8A8A8A] capitalize cursor-pointer transition-all duration-300 ease-in-out"
          >
            Address
          </label>
          <textarea
            name="address"
            placeholder="user address.."
            id="address"
            className="ring-1 ring-slate-100 overflow-hidden rounded-sm text-sm font-normal text-slate-400 p-4 cursor-pointer transition-all outline-none focus:ring-primary w-full h-20"
          ></textarea>
        </div>
      </div>
      <button className="pl-6 pr-2 py-3 text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out hover:text-primary rounded-sm bg-secondary text-center flex items-center gap-2">
        Next <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
