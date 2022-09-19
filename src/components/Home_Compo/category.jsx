import React from "react";
import Pattern from '../assets/images/pattern.png'

export default function category() {
  return (
    <div className=" Categ_main">
    <div className=" w-[85%] my-10 mx-auto sm:w-[90%] ">
    <h1 className=" text-center text-xl my-6 font-semibold text-gray-700">Features</h1>
      <div className=" grid grid-cols-4 gap-4 sm:grid-cols-1 pb-4">
        
          <div className="Cat_shadow text-center py-20 rounded-full bg-green-300 hover:bg-green-400">
            <h1 className=" text-xl font-semibold">Project Uploading</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-purple-300 hover:bg-purple-400">
            <h1 className=" text-xl font-semibold">Paper Uploading</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-red-300 hover:bg-red-400">
            <h1 className=" text-xl font-semibold">All Course</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-gray-300 hover:bg-gray-400">
            <h1 className=" text-xl font-semibold">Follow & Like Posts</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-teal-300 hover:bg-teal-400">
            <h1 className=" text-xl font-semibold">Filter your projects better</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-orange-300 hover:bg-orange-400">
            <h1 className=" text-xl font-semibold">Who View My Projects</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-rose-300 hover:bg-rose-400">
            <h1 className=" text-xl font-semibold">Verified Accounts Security</h1>
          </div>

          <div className="Cat_shadow text-center py-20 rounded-full bg-[#BEF264] hover:bg-[#84CC16]">
            <h1 className=" text-xl font-semibold">Block Users</h1>
          </div>
      </div>
    </div></div>
  );
}
