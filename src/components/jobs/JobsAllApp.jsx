import { useContext } from "react";
import navContext from "../../context/navContext/navContext";
import Job from "../../components/cards/Job";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DB from "../../appwrite/services/db";
import { nanoid } from "nanoid";

export default function JobsAllApp() {
  const { active } = useContext(navContext);
  const [myData, setMyData] = useState([]);
  const slector = useSelector((state) => state.auth.status);
  //retrive user details
  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (slector) {
      DB.getAllJob().then((data) => {
        if (data.documents) {
          setMyData(data.documents);
        }
      });
    }

    if (slector) {
      DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
        if (data) {
          setUserData(data);
        }
      });
    }
  }, [slector]);
  return (
    <>
      <div className="h-[70vh] overflow-y-scroll flex flex-wrap gap-5 overflow-x-hidden mt-5 ">
        {active === "all"
          ? //all jobs
            myData.map((item) => {
              // if (userData.disability != item.disability) {
              // console.log(item.$id);
              let myid = nanoid();
              // console.log(myid);
              return (
                <Job
                  key={myid}
                  data={item}
                  isreco={
                    userData.disability === item.disability ? true : false
                  }
                />
              );
            })
          : // recomended jobs
            myData.map((item) => {
              if (userData.disability === item.disability) {
                // console.log(item.$id);
                return (
                  <Job
                    key={item.id}
                    data={item}
                    isreco={
                      userData.disability === item.disability ? true : false
                    }
                  />
                );
              }
            })}
      </div>
    </>
  );
}
