import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import TopBar from "../components/topbar/TopBar";
import { useParams } from "react-router";

export default function Dashboard() {
  const { type } = useParams();
  return (
    <div className="w-screen h-screen flex overflow-hidden relative">
      <Sidebar usertype={type} />
      <div className="w-screen flex flex-col">
        <TopBar />
        <div className="h-screen overflow-y-auto p-10  flex justify-center ">
          {/* <Jobdetails show={true} /> */}
          <div className="max-w-[76vw] w-full relative">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
