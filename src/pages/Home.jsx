import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-slate-300 w-screen h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="text-2xl font-black text-slate-700">
          We Are under maintainance right now, please access your dashboard by{" "}
        </h1>
        <div className="flex gap-10">
          <Link
            className="w-[220px] h-[100px] text-2xl bg-white rounded-xl flex justify-content items-center"
            to="login"
          >
            Login
          </Link>
          <Link
            className="w-[220px] h-[100px] text-2xl bg-white rounded-xl border-2 border-black shadow-xl hover:shadow flex justify-content items-center"
            to="register"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
