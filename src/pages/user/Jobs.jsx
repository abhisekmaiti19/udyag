import InnerNav from "../../components/inner/InnerNav";
import JobsAllApp from "../../components/jobs/JobsAllApp";
import NavContextProvider from "../../context/navContext/NavContextProvider";
export default function Jobs() {
  return (
    <div className="relative flex flex-col  mb-14">
      <NavContextProvider>
        <InnerNav />
        <JobsAllApp />
      </NavContextProvider>
    </div>
  );
}
