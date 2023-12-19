import { NotificationBing } from "iconsax-react";
import { useState } from "react";

export default function Notification() {
  const [click, setClick] = useState(false);
  return (
    <div
      className=" flex justify-center items-center relative transition-all duration-500"
      onClick={() => {
        setClick(!click);
      }}
    >
      <div className="px-4 py-4 bg-brand-blue/20 rounded-full"></div>
      <NotificationBing
        className="absolute text-brand-blue duration-200 ease-in-out hover:rotate-12 hover:cursor-pointer"
        variant="Bold"
      />

      {click ? (
        <div className="absolute top-12 right-0 rounded-xl bg-white shadow-lg z-[1000]">
          <div className="px-20 py-20 "></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
