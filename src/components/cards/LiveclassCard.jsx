import { ArrowRight, Brodcast } from "iconsax-react";

export default function LiveclassCard() {
  return (
    <div className="bg-brand-green w-[200px] h-[95px] rounded-lg shadow-md p-3 flex flex-col items-end border border-black ">
      <div className="w-full flex gap-5 h-1/2  items-center text-xl">
        <div className="relative">
          <Brodcast size="30" className=" animate-ping " color="red" />
          <Brodcast size="30" className=" absolute top-0 " color="red" />
        </div>
        <h1 className="font-black ">Live Class</h1>
      </div>
      <div className="w-2/3 flex gap-5 h-1/2 text-green-600 items-center text-sm font-bold hover:cursor-pointer hover:text-base whitespace-nowrap duration-200 ease-in-out">
        <h1>Join Now</h1>
        <ArrowRight className="" size="30" />
      </div>
    </div>
  );
}
