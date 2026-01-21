import React from "react";
import { Search } from "lucide-react";
import _importImg from "../assets/import_cvc.png";
import { list_of_teacher } from "../assets/data/data";
export default function TeachersList() {
  return (
    <div>
      {/* head */}
      <div className="flex items-center justify-between gap-8">
        {/* left area */}
        <div className="flex items-center gap-3">
          <div className="flex items-center pr-3 border border-r-black border-dashed">
            <span className="text-sm text-black font-medium">Show</span>
            <select
              name="number"
              id="number"
              className="text-slate-300 text-sm outline-none cursor-pointer transition-all duration-300 ease-in-out"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="100">100</option>
            </select>
          </div>
          {/* filtering select area */}
          <select
            name="filtering-select"
            id="filtering-select"
            className="w-45 p-4 text-black capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none"
          >
            <option value="All Department">All Department</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Social studies">Social studies</option>
            <option value="Home economics">Home economics</option>
            <option value="Geography">Geography</option>
            <option value="Pschology">Pschology</option>
            <option value="Physic">Physic</option>
            <option value="Accounting">Accounting</option>
          </select>
        </div>
        {/* middle area */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for a students by name or email"
            className="w-full pl-12 pr-4 py-3 bg-slate-100 rounded-sm text-sm font-medium text-black backdrop-blur-sm inset-1 cursor-pointer outline-none focus:ring-1 focus:ring-primary"
          />
          <Search className="w-5 h-5 cursor-pointer text-slate-300 absolute top-1/2 transform -translate-y-1/2 left-4" />
        </div>
        {/* end area */}
        <div className="flex items-center gap-4">
          <button className="px-3.5 py-3 rounded-sm flex items-center gap-2.5 shadow-sm text-secondary font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            <img src={_importImg} alt="img-csv" />
            Import CSV
          </button>
          <button className="px-3.5 py-3 rounded-sm inline-block shadow-sm text-slate-200 font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            <select
              name="add_"
              id="add_"
              className="outline-none h-full text-black"
            >
              <option value="Add Teachers">Add Teachers</option>
              <option value="Add Students">Add Students</option>
            </select>
          </button>
        </div>
      </div>

      {/* // teachers table */}
      <div className="grid grid-cols-1 mt-4 py-3 bg-primary/20 gap-5 lg: grid-cols-12 lg:gap-1">
        <div className="col-span-1 pl-2 text-black font-medium capitalize">
          SL/No
        </div>
        <div className="col-span-1 lg col-span-2 text-black font-medium capitalize">
          Name
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          subject
        </div>
        <div className="col-span-1 lg:col-span-3 text-black font-medium capitalize">
          Email address
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          Department
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          Gender
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          Status
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          Details
        </div>
        <div className="col-span-1 text-black font-medium capitalize">
          Actions
        </div>
      </div>
      {list_of_teacher.map((teacher, index) => (
        <div
          key={index}
          className="grid grid-cols-1 py-3 gap-5 lg: grid-cols-12 lg:gap-1 odd:bg-[#F7FBFF]"
        >
          <div className="col-span-1 pl-2 text-black font-medium capitalize">
            {teacher.id}
          </div>
          <div className="col-span-1 lg col-span-2 text-black font-medium capitalize">
            <div className="flex items-center gap-2">
              <img
                src={teacher.img}
                className="w-5 h-5 rounded-full object-cover"
                alt=""
              />
              <span className="text-sm font-medium text-black">
                {teacher.name}
              </span>
            </div>
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher.subject}
          </div>
          <div className="col-span-1 lg:col-span-3 text-black font-medium capitalize">
            {teacher.mail}
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher.dep}
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher.gender}
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher?.status.map((action) => {
              action === "active" ? "active" : "Inactive";
            })}
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher.view}
          </div>
          <div className="col-span-1 text-black font-medium capitalize">
            {teacher.btn}
          </div>
        </div>
      ))}
    </div>
  );
}
