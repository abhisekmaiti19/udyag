import Course from "../cards/Course";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DB from "../../appwrite/services/db";
import { nanoid } from "nanoid";

export default function Courses() {
  const [myData, setMyData] = useState([]);
  const slector = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (slector) {
      DB.getAllCourse().then((data) => {
        if (data.documents) {
          setMyData(data.documents);
        }
      });
    }
  }, [slector]);
  return (
    <div className="relative shadow-sm rounded-xl border-2 border-slate-200 ">
      <div className="rounded-xl p-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold text-slate-700">Recomended Courses</h1>
        <div className="overflow-x-auto w-full gap-6 flex overflow-y-hidden">
          {myData
            ? myData.map((item) => {
                let id = nanoid();
                return <Course key={id} data={item} />;
              })
            : "Loading ..."}
        </div>
      </div>
    </div>
  );
}
