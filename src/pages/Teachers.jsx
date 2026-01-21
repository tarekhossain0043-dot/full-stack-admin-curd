import { Search } from "lucide-react";
import React from "react";
import TeachersList from "../components/TeachersList";
import { useNavigate } from "react-router-dom";
// this is teacher not found page
export default function Teachers() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {/* teacher head */}
        <div
          className={`bg-slate-100 $ flex relative text-[#F3F2F2] rounded-sm border border-slate-100 text-[#C4C4C4]`}
        >
          <div className="bg-white h-full border-r py-3 px-2 rounded-sm">
            <select
              name="student_filter"
              id="student_filter"
              className="outline-none text-slate-400 border-none"
            >
              <option value="Add filter" disabled>
                Add filter
              </option>
              <option value="female">female</option>
              <option value="Male">Male</option>
              <option value="Active">Active</option>
              <option value="InActive">inActive</option>
              <option value="ITE">ITE</option>
              <option value="CS">CS</option>
              <option value="IT">IT</option>
              <option value="SE">SE</option>
              <option value="DS">DS</option>
              <option value="SC">SC</option>
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
          <div className="flex items-center">
            <label htmlFor="searching">
              <Search className="w-6 h-6 ml-4 text-slate-200 cursor-pointer transition-all duration-300 ease-in-out" />
            </label>
            <input
              type="text"
              id="searching"
              className="outline-none pl-6 text-slate-400 cursor-pointer transition-all duration-300 ease-in-out"
              placeholder="Search for a teacher by name or email"
            />
          </div>
        </div>
        {/* tearcher adding top */}
        <div className="mt-6 pb-5 flex items-end justify-end gap-4">
          <button className="px-3.5 py-3 rounded-sm inline-block shadow-sm text-slate-200 font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            Export CSV
          </button>
          <button className="px-3.5 py-3 rounded-sm inline-block shadow-sm text-secondary font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out hover:bg-primary hover:text-white">
            Import CSV
          </button>
          <button
            onClick={() => navigate("/add_teacher")}
            className="px-3.5 py-3 rounded-sm inline-block shadow-sm font-semibold capitalize cursor-pointer transition-all duration-500 ease-in-out bg-primary text-white"
          >
            Add Teachers
          </button>
        </div>
        {/* teachers not found */}
        <div className="flex items-center justify-center flex-col gap-3 w-full h-full min-h-40 border bg-slate-300 border-white rounded-sm">
          <h4>No Teachers at this time</h4>
          <span className="max-[640px]:text-center text-sm font-normal">
            Teachers will appear here after they enroll in your school.{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
