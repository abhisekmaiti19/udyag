import Course from "../cards/Course";

export default function Courses() {
  return (
    <div className="relative shadow-sm rounded-xl border-2 border-slate-200 ">
      <div className="rounded-xl p-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold text-slate-700">Recomended Courses</h1>
        <div className="overflow-x-auto w-full gap-6 flex overflow-y-hidden">
          <Course />
          <Course />
          <Course />
          <Course />
        </div>
      </div>
    </div>
  );
}
