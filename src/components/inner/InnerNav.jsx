import { useContext, useState } from "react";
import {} from "iconsax-react";
import navContext from "../../context/navContext/navContext";

export default function InnerNav() {
  const [clicked, setClicked] = useState(true);
  const [clickedtwo, setClickedtwo] = useState(false);
  const { setActive } = useContext(navContext);
  return (
    <div className="w-full border-b-2 flex gap-10 text-lg font-semibold text-slate-400">
      <button
        className={`flex w-fit gap-2 px-5  ${
          clicked
            ? "text-brand-blue font-black border-2 border-slate-300 rounded"
            : ""
        }`}
        onClick={() => {
          setClicked(true);
          setClickedtwo(false);
          setActive("all");
        }}
      >
        All Jobs
      </button>
      <button
        className={`flex w-fit gap-2 px-5 ${
          clickedtwo
            ? "text-brand-blue font-black border-2 border-slate-300 rounded"
            : ""
        }`}
        onClick={() => {
          setClicked(false);
          setClickedtwo(true);
          setActive("app");
        }}
      >
        Applied Jobs
      </button>
    </div>
  );
}
