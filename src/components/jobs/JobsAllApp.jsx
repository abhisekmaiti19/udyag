import { useContext } from "react";
import navContext from "../../context/navContext/navContext";
import Job from "../../components/cards/Job";

export default function JobsAllApp() {
  //   const { active } = useContext(navContext);
  return (
    <>
      <div className="h-[70vh] overflow-y-scroll flex flex-wrap gap-5 overflow-x-hidden mt-5 ">
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
        <Job />
      </div>
    </>
  );
}
