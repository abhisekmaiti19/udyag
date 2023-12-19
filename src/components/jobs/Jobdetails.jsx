/* eslint-disable react/prop-types */
export default function Jobdetails({ show }) {
  return (
    <div
      className={`absolute w-full top-0 left-0 h-full z-[99999] bg-black/10 ${
        show ? "block" : "hidden"
      }`}
    >
      Jobdetails
    </div>
  );
}
