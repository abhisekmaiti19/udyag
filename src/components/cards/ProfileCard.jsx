import { ProfileCircle, MagicStar } from "iconsax-react";
import { useSelector } from "react-redux";
import { useState } from "react";

import DB from "../../appwrite/services/db";

export default function ProfileCard() {
  const [myData, setMyData] = useState("");
  const slector = useSelector((state) => state.auth.status);

  if (slector) {
    DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
      if (data) {
        setMyData(data);
      }
    });
  }

  return (
    <div className="w-full h-[35vh] rounded-xl border-2 border-slate-500 flex justify-between items-center gap-5 bg-gradient-to-br  from-brand-blue to-blue-900">
      <div className="w-[40%] h-full p-3 flex gap-2  overflow-hidden">
        {/* <img src="" className="" alt="" /> */}
        <div className="w-1/2 flex justify-center items-center ">
          <ProfileCircle variant="Bulk" className="text-white" size="200" />
        </div>
        <div className="w-1/2 flex flex-col text-2xl  justify-evenly text-white  ">
          <div className="">
            <h1 className="font-base ">Hello</h1>
            <h1 className="font-black">{myData.name}</h1>
          </div>
          <div className="text-white/60">
            <h1 className="text-base font-semibold ">About</h1>
            <h1 className="text-lg whitespace-nowrap ">
              A common text wont hold myself
            </h1>
          </div>
        </div>
      </div>

      {/* tOP SKILLS  */}
      <div className="w-[50%] h-full p-4 flex flex-col gap-5">
        <div className="w-full h-full flex flex-col justify-center gap-5">
          <div className="w-fit flex gap-5 text-xl font-black text-white ">
            <MagicStar variant="Bulk" size="30" />
            <h1>Your Top Skills</h1>
          </div>
          <div className="w-full overflow-x-scroll overflow-y-hidden flex gap-5">
            {myData ? (
              myData.skills.map((item) => (
                <h1
                  key={item}
                  className="w-fit px-3 py-2 text-sm font-black bg-brand-green shadow-xl shadow-black border border0white rounded-lg whitespace-nowrap"
                >
                  {item}
                </h1>
              ))
            ) : (
              <h1 className="text-white">Loading.....</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
