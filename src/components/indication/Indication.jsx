/* eslint-disable react/prop-types */
export default function Indication({ text }) {
  return (
    <div className="relative bg-yellow-400 rounded text-sm px-2 py-1 font-bold overflow-hidden">
      {`specially for ${text}`}
      <div className=" bg-gradient-to-t from-white/70 to-transparent blur-sm h-full absolute left-0 bottom-0 px-3 -skew-x-6 glossy"></div>
    </div>
  );
}
