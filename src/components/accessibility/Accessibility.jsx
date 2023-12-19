import { useState } from "react";

export default function Accessibility() {
  const [click, setClick] = useState(true);

  return (
    <div
      className="relative  rounded flex transition-all duration-500 items-center hover:cursor-pointer "
      onClick={() => {
        setClick(!click);
      }}
    >
      <div className="px-12 py-5 "></div>
      {click ? (
        <>
          <div className="px-12 py-5 absolute rounded transition-all duration-500 bg-slate-400/20"></div>
          <h1 className="absolute left-3 font-bold transition-all duration-500">
            Do It
          </h1>
        </>
      ) : (
        <>
          <div className="px-12 py-5 absolute rounded bg-brand-blue/10 transition-all duration-500"></div>
          <h1 className="absolute font-bold left-10 transition-all duration-500">
            Magic
          </h1>
        </>
      )}
      <button
        className={`px-4 py-4 absolute rounded transition-all duration-500 shadow-sm shadow-slate-900 ${
          click ? "right-1 bg-slate-400" : "left-1 bg-brand-blue"
        }`}
      ></button>
    </div>
  );
}
