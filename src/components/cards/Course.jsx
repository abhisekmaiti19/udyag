/* eslint-disable react/prop-types */
import Indication from "../indication/Indication";

export default function Course({ data }) {
  return (
    <div className="w-fit h-fit rounded-xl border-2 border-slate-300">
      <div className="flex flex-col gap-5">
        <div className="w-72 h-40 relative rounded-xl overflow-hidden flex  items-center">
          <img
            src="https://www.pexels.com/photo/teacher-asking-a-question-to-the-class-5212345"
            alt=""
            className="w-full "
          />
          <div className="absolute w-full h-3/4 bg-gradient-to-t from-brand-blue to-transparent bottom-0 flex items-end overflow-hidden ">
            <h1 className="text-ellipsis overflow-hidden px-5 py-2 text-xl font-bold text-white">
              {data.name}
            </h1>
          </div>
          <div className="absolute top-0 right-0 p-2 overflow-hidden">
            <Indication text={data.disable} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col">
        <button className="p-5  font-black border-2 px-10 rounded-xl bg-brand-blue text-white shadow-sm m-5">
          {data.courselink}
        </button>
        <button className="p-5  font-black border-2 border-black px-10 rounded-xl bg-brand-green text-black shadow-sm m-5">
          {data.yourlink}
        </button>
      </div>
    </div>
  );
}
