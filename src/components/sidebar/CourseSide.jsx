import { ArrowRight2 } from "iconsax-react";

export default function CourseSide() {
  const listdata = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="w-1/4 border-2 border-slate-200 h-[74vh] rounded-lg">
      {/* Top section  */}
      <div className=" relative w-full h-[25%] rounded-lg p-4 border-b-2 bg-gradient-to-br from-brand-blue to-brand-blue/60 flex flex-col gap-3 shadow-lg">
        <h1 className="font-bold text-white text-xl py-1 px-2">
          Enrolled Courses
        </h1>
        <select
          name=""
          id=""
          className="w-full h-[40%] px-4 py-1 rounded text-sm font-semibold text-slate-500 border-2 border-slate-200 outline-none "
        >
          <option value="Your Own Course"> Your Own Course</option>
          <option value="Course One"> Course One</option>
          <option value="Course One"> Course One</option>
          <option value="Course One"> Course One</option>
          <option value="Course One"> Course One</option>
          <option value="Course One"> Course One</option>
        </select>
      </div>
      {/* Below section  */}
      <ul className="flex w-full h-[70%] flex-col gap-2 p-3 overflow-y-scroll">
        {listdata.map((it) => (
          <li
            key={it}
            className="border-b rounded-xl p-2 w-full border-slate-300 text-slate-500 duration-100 ease-in-out hover:font-semibold hover:cursor-pointer hover:bg-slate-100 hover:shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div className="w-[70%]">
                <h1 className="text-sm  ">15 December</h1>
                <h1 className="text-lg   ">An Important Class</h1>
              </div>
              <ArrowRight2 size="30" className="px-1" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
