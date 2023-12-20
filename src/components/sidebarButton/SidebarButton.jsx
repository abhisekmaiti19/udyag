/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Home, Briefcase, Play, BrushSquare, Magicpen } from "iconsax-react";
export default function SidebarButton({ buttontext, where }) {
  const icon =
    buttontext == "Home" ? (
      <Home variant="Bold" size="25px" />
    ) : buttontext == "Jobs" ? (
      <Briefcase variant="Bold" size="25px" />
    ) : buttontext == "Courses" ? (
      <Play variant="Bold" size="25px" />
    ) : buttontext == "Create" ? (
      <BrushSquare variant="Bold" size="25px" />
    ) : buttontext == "Create Course" ? (
      <Magicpen variant="Bold" size="25px" />
    ) : (
      <></>
    );
  return (
    <button className="w-full h-fit transition-all border shadow-slate-200 shadow rounded text-[18px] items-center font-semibold hover:opacity-70 duration-300 ease-in-out ">
      <NavLink
        className={({ isActive }) =>
          `flex gap-4 py-2 px-4  pr-12 rounded duration-300 ease-in-out ${
            isActive ? "text-white bg-brand-blue" : "text-slate-700"
          } items-center`
        }
        to={where}
        end
      >
        {icon}
        {buttontext}
      </NavLink>
    </button>
  );
}
