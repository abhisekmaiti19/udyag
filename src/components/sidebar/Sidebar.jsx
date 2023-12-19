/* eslint-disable react/prop-types */
import SidebarButton from "../sideBarButton/SidebarButton.jsx";
import logo from "../../assets/logo.png";

export default function Sidebar() {
  const buttonDetails = [
    {
      text: "Home",
      where: " ",
    },
    {
      text: "Jobs",
      where: `jobs`,
    },
    {
      text: "Courses",
      where: `courses`,
    },
    {
      text: "Create",
      where: `createjob`,
    },
  ];

  return (
    <div className="right-0 h-screen w-fit px-10 py-5 flex flex-col gap-5 shadow-md shadow-blue-100">
      <img src={logo} alt="" className="w-[120px] mb-5" />
      {buttonDetails.map((item) => (
        <SidebarButton
          key={item.text}
          buttontext={item.text}
          where={item.where}
          icon={item.icon}
        />
      ))}
    </div>
  );
}
