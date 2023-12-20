/* eslint-disable react/prop-types */
import SidebarButton from "../sideBarButton/SidebarButton.jsx";
import logo from "../../assets/logo.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import DB from "../../appwrite/services/db";

export default function Sidebar() {
  const slector = useSelector((state) => state.auth.status);
  //retrive user details
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (slector) {
      DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
        if (data.isAdmin) {
          setUserData(data.isAdmin);
        }
      });
    }
  }, [slector]);

  // kichu ekta
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
  ];

  if (userData === true) {
    buttonDetails.push({
      text: "Create",
      where: "createjob",
    });
  }

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
