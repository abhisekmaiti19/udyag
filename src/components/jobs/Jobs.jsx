import Job from "../cards/Job";

export default function Jobs() {
  return (
    <>
      <div className="shadow-sm rounded-xl border-2 border-slate-200 ">
        <div className="rounded-xl p-5 flex flex-col gap-5">
          <h1 className="text-xl font-bold text-slate-700">Available Jobs</h1>
          <div className="overflow-x-auto w-full gap-6 flex overflow-y-hidden">
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </>
  );
}
