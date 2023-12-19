import Heroo from "../../assets/hero.png";
import Status from "../cards/Status";

export default function Hero() {
  return (
    <div className="w-full py-24  rounded-xl relative bg-brand-blue/80">
      <div className="absolute p-5 w-full h-full top-0 left-0 overflow-hidden flex flex-col justify-betwen">
        <h1 className="min-[1370px]:text-[40px] text-2xl text-white flex  flex-wrap gap-4 min-[1370px]:flex-row  ">
          <span className="font-black py-2 opacity-40 ">
            You will be the next
          </span>
          <span className="font-black bg-brand-blue px-5 -skew-x-12 shadow-lg w-fit py-3 ">
            Proud
          </span>
        </h1>
        <div className="flex gap-5 mt-4">
          <Status type={"job"} data={"128"} />
          <Status type={"course"} data={"5"} />
        </div>
      </div>
      <img
        className="absolute w-60 rounded-xl right-0 bottom-0 "
        src={Heroo}
        alt=""
      />
    </div>
  );
}
