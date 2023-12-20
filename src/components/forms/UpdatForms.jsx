import { Smileys } from "iconsax-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DB from "../../appwrite/services/db";
export default function UpdatForms() {
  const [myData, setMyData] = useState("");
  const slector = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (slector) {
      DB.getUser(JSON.parse(localStorage.user).phone.slice(3)).then((data) => {
        if (data) {
          setMyData(data);
        }
      });
    }
  }, [slector]);

  //UPdate profile is pending

  return (
    <div className="w-full h-[40vh] border-2 rounded-xl p-2 flex flex-col gap-2 ">
      <div className="text-lg font-bold text-brand-blue w-fit px-2 flex gap-3 items-center p-2">
        <Smileys size="30" variant="Bulk" />
        <h1 className="text-brand-blue/70">Your Details</h1>
      </div>
      <form
        action=""
        method="post"
        className="w-full h-[80%] overflow-hidden flex flex-col gap-1 p-3"
      >
        <div className="w-full p-1 flex justify-evenly">
          <div className="flex flex-col w-1/3 gap-1 pl-4">
            <label
              htmlFor="Name"
              className="text-sm font-bold text-slate-600 pl-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="input"
              placeholder={`${myData ? myData.name : "loading.."}`}
              id=""
              className="w-3/4 p-4 border-2 border-slate-400 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/3 gap-1 pl-4">
            <label
              htmlFor="Name"
              className="text-sm font-bold text-slate-600 pl-2"
            >
              Email Address
            </label>
            <input
              type="text"
              name="mail"
              placeholder={`${myData ? myData.email : "loading.."}`}
              id=""
              className="w-3/4 p-4 border-2 border-slate-400 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/3 gap-1 pl-4">
            <label
              htmlFor="Name"
              className="text-sm font-bold text-slate-600 pl-2"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="mail"
              placeholder={`${myData ? myData.phone : "loading.."}`}
              id=""
              className="w-3/4 p-4 border-2 border-slate-400 outline-none rounded-lg"
            />
          </div>
        </div>
        <div className="w-full p-1 flex justify-evenly">
          <div className="flex flex-col w-1/3 gap-1 pl-4">
            <label
              htmlFor="Name"
              className="text-sm font-bold text-slate-600 pl-2"
            >
              Parents Phone
            </label>
            <input
              type="text"
              name="input"
              placeholder={`${myData ? myData.parentPh : "loading.."}`}
              id=""
              className="w-3/4 p-4 border-2 border-slate-400 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/3 gap-1 pl-4">
            <label
              htmlFor="Name"
              className="text-sm font-bold text-slate-600 pl-2"
            >
              Your Skills
            </label>
            <input
              type="text"
              name="mail"
              placeholder="Write/Update skills separated by (,)"
              id=""
              className="w-3/4 p-4 border-2 border-slate-400 outline-none rounded-lg"
            />
          </div>
          <div className="flex flex-col w-1/3 gap-1 pl-4 justify-center items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="relative w-fit p-4 rounded-lg  px-7 border-2 shadow-sm bg-gradient-to-br from-yellow-200 to-yellow-600 font-bold hover:opacity-75"
            >
              <div className=" bg-gradient-to-t from-white/20 to-transparent blur-sm h-full absolute left-0 bottom-0 px-5 -skew-x-6 glossy"></div>
              <div className=" bg-gradient-to-t from-white/20 to-transparent blur-sm h-full absolute left-0 bottom-0 px-2 -skew-x-6 glossy"></div>
              Save Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
