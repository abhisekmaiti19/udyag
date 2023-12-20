/* eslint-disable react/prop-types */
import { More2, LocationTick, Moneys, ShieldTick } from "iconsax-react";
// import { useState } from "react";
// import Jobdetails from "../jobs/Jobdetails";

export default function Job({ data, isreco }) {
  // const [job, setJob] = useState(false);
  // const myskills = data.skills;

  return (
    <>
      <div className=" p-2 h-fit relative rounded-xl border border-slate-300 w-fit text-blue-800 whitespace-break-spaces">
        <div className=" w-80 h-92 overflow-auto">
          <div className=" top-0 left-0 flex flex-col gap-5 p-5">
            {/* Employer Name  */}
            <div className="flex justify-between">
              <h1 className="font-semibold w-1/2 overflow-hidden text-ellipsis whitespace-break-spaces">
                {data.createdBy != null ? data.createdBy : "Udyog Sarthi"}
              </h1>
              <button
                className="flex border-2  w-fit h-fit rounded items-center p-1 px-2 gap-2 hover:cursor-pointer hover:opacity-50"
                // onClick={() => {
                //   setJob(true);
                // }}
              >
                <More2 variant="Bulk" />
                <h1 className="text-sm h-fit">More Info</h1>
              </button>
            </div>
            {/* Location and Money  */}
            <div className="flex  gap-5">
              {/* Location  */}
              <div className="flex gap-2 w-fit items-center rounded-xl text-sm font-bold text-yellow-800">
                <LocationTick size="15" variant="Bold" color="red" />
                <h1 className="overflow-hidden text-ellipsis">
                  {data.location.length != 0 ? data.location : "WFH"}
                </h1>
              </div>
              {/* Money  */}
              <div className="flex gap-2 w-fit items-center rounded-xl text-sm font-bold text-green-800">
                <Moneys size="15" variant="Bold" color="green" />
                <h1 className="overflow-hidden text-ellipsis">
                  {data.pack != null ? data.pack : "no-discloses"}
                </h1>
              </div>
            </div>
            {/* Position  */}
            <div className="flex flex-col gap-2">
              <h1 className="text-slate-500 text-sm">OPEN POSITION</h1>
              <h1 className="text-sm font-semibold text-slate-600 overflow-hidden text-ellipsis">
                {data.pos != null ? data.pos : "After Interview"}
              </h1>
            </div>
            {/* Prfered Skills  */}
            <div className="flex flex-col gap-2">
              <h1 className="text-xs text-slate-800 w-fit font-semibold bg-slate-600/10 rounded-xl px-2 py-1 ">
                {data.disability != null
                  ? `Job for ${data.disability} user`
                  : "this is for all"}
              </h1>

              <div className="flex gap-2">
                {/* {myskills.map((item) => (
                  <h1
                    key={item}
                    className="text-xs text-slate-800 w-fit font-semibold bg-slate-600/10 rounded-xl px-2 py-1 "
                  >
                    {item}
                  </h1>
                ))} */}
              </div>
            </div>
            {/* Eligble or not  */}
            <div
              className={`flex gap-2 ${
                isreco ? `text-green-700` : `text-orange-500`
              } text-xs  font-black`}
            >
              <ShieldTick size="15" />
              <h1 className="overflow-hidden text-ellipsis">
                {isreco ? `We Recomend you to apply` : `You are not eligble`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
