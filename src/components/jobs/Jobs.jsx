import Job from "../cards/Job";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DB from "../../appwrite/services/db";

export default function Jobs() {
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

  // console.log(myData);

  return (
    <>
      <div className="shadow-sm rounded-xl border-2 border-slate-200 ">
        <div className="rounded-xl p-5 flex flex-col gap-5">
          <h1 className="text-xl font-bold text-slate-700">Recomended Jobs</h1>
          <div className="overflow-x-auto w-full gap-6 flex overflow-y-hidden">
            {myData.map((item) => {
              if (userData.disability === item.disability) {
                // console.log(item.$id);
                return <Job key={item.id} data={item} isreco={true} />;
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
