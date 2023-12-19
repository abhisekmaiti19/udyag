import Indication from "../indication/Indication";

export default function Course() {
  return (
    <div className="w-fit h-fit rounded-xl border-2 border-slate-300">
      <div className="flex flex-col gap-5">
        <div className="w-72 h-40 relative rounded-xl overflow-hidden flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/4047462/pexels-photo-4047462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className=""
          />
          <div className="absolute w-full h-3/4 bg-gradient-to-t from-brand-blue to-transparent bottom-0 flex items-end overflow-hidden ">
            <h1 className="text-ellipsis overflow-hidden px-5 py-2 text-xl font-bold text-white">
              Swimimng Course & Othres
            </h1>
          </div>
          <div className="absolute top-0 right-0 p-2 overflow-hidden">
            <Indication />
          </div>
        </div>
      </div>
    </div>
  );
}
