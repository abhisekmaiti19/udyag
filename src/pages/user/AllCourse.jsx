import Course from "../../components/cards/Course";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DB from "../../appwrite/services/db";
import { nanoid } from "nanoid";

export default function AllCourse() {
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
    <div className="flex flex-wrap">
      {myData
        ? myData.map((item) => {
            let id = nanoid();
            return <Course key={id} data={item} />;
          })
        : "Loading ..."}
    </div>
  );
}
