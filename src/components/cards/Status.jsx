/* eslint-disable react/prop-types */
import { StatusUp, ArrowRight } from "iconsax-react";

export default function Status({ type, data }) {
  return (
    <div
      className={`relative ${
        type === "job" ? "bg-brand-green" : "bg-yellow-400"
      } w-fit rounded border-2 border-white`}
    >
      <div className="flex flex-col justify-between px-4 gap-1 py-2">
        <div className="w-full flex gap-2 items-center text-sm font-semibold ">
          <StatusUp size="20" />
          <h1>{`${type === "job" ? "Eligble Jobs" : "Pending Courses"}`}</h1>
        </div>
        <div className="flex justify-evenly items-center">
          <h1 className="text-3xl font-black text-slate-500 stroke-slate-700 ">
            {data}
          </h1>
          <ArrowRight size="30" color="black" />
        </div>
      </div>
      <div className="p-2 w-fit rounded-full bg-white shadow-lg -top-2 -left-2 absolute"></div>
      <div className="p-2 w-fit rounded-full bg-white shadow-lg -top-2 -left-2 absolute animate-ping"></div>
    </div>
  );
}
