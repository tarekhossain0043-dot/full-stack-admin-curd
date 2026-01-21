import React from "react";

export default function TeachersList() {
  return (
    <div>
      {/* head */}
      <div className="flex items-center justify-between">
        {/* left area */}
        <div className="flex items-center gap-2.5 border-r border-dashed">
          <h4>Show</h4>
          <select name="number" id="number" className="text-slate-300">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="100">100</option>
          </select>
        </div>
        {/* filtering select area */}
        <select
          name="filtering-select"
          id="filtering-select"
          className="w-64.5 p-4 text-black capitalize cursor-pointer transition-all duration-300 ease-in-out outline-none"
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
    </div>
  );
}
