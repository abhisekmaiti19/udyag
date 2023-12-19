//  i have to use useDispatch for [seding value to my store] react/redux
import { useDispatch } from "react-redux";
// importing auth.js for creating object
import Auth from "../appwrite/services/auth";
// importing methods from slices
import { login, logout } from "../store/authSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "../assets/login1.png";
import image2 from "../assets/login2.png";
import myimg from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex justify-center items-center">
      <div
        className="flex flex-col-reverse lg:flex-row max-w-5xl sm:m-10 md:mx-32 lg:mx-5 w-full bg-white sm:rounded-t-xl sm:rounded-b-xl overflow-hidden shadow-lg"
        style={{ minHeight: "600px" }}
      >
        <div className="min-h-full lg:w-1/2 w-full p-16 px-8 sm:px-16">
          <div className="flex flex-col justify-between h-full gap-10 sm:gap-4">
            <div>
              <div className="text-2xl font-semibold text-black">Login 😀</div>
              <div className="text-sm text-black/70">
                Welcome Back ! Lets’s Rock n roll again
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 pb-3">
                <label htmlFor="id" className="font-medium text-sm">
                  Your ID
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="Enter your ID"
                  className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="font-medium text-sm">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="text-sm border-2 border-solid border-black/10 p-3 w-full rounded-md outline outline-4 outline-transparent focus:outline-blue-100 transition-all ease-in-out focus:border-blue-400 focus:border-2"
                />
              </div>
              <Link to="/" className="w-fit">
                <span className="text-blue-500 text-xs">Forgot Password?</span>
              </Link>
            </div>
            <div>
              <button
                className="px-5 py-4 mb-1 text-lg rounded-xl text-white font-semibold w-full bg-left hover:bg-right hover:shadow-inner transition-all duration-200"
                style={{
                  backgroundSize: "120%",
                  backgroundImage:
                    "linear-gradient(89deg, #000 -76.05%, #D9D9D9 105.86%)",
                }}
              >
                Login
              </button>
              <span className="text-sm">
                Don &pos t have an account?
                <Link to="/register">
                  <span className="text-blue-500 text-sm"> Register now.</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div
          className="h-96 sm:h-auto sm:min-h-full lg:w-1/2 relative p-10 sm:p-16  rounded-b-3xl overflow-hidden lg:rounded-none"
          style={{
            background: "linear-gradient(35deg, #000 -25.94%, #FFF 112.02%)",
          }}
        >
          <img
            src={""}
            className="absolute right-0 bottom-0 w-3/5 z-0"
            alt=""
          />
          <div className="bg-neutral-400/80 shadow-lg text-white p-6 sm:p-10 rounded-xl w-full h-full relative z-0">
            <div className="text-xl font-semibold">Oh! Hello👋</div>
            <div className="text-xl font-semibold">
              Welcome back to your dream.
            </div>
            <div className="text-2xl font-bold mt-10">Log In Now</div>

            <img
              src={""}
              className="absolute -right-8 sm:-right-16 lg:-right-7 -bottom-10 sm:-bottom-16 lg:bottom-0 w-3/6 lg:w-4/6 max-h-72 object-contain z-10"
              alt=""
            />
            <div className="shadow-xl absolute -left-6 sm:-left-10 bottom-10 w-20 lg:w-24 h-20 lg:h-24 bg-white z-0 rounded-full p-5">
              <img src={""} className="drop-shadow-md" alt="" />
            </div>
            <div className="shadow-xl absolute -right-6 sm:-right-10 top-16 w-16 h-16 bg-white z-0 rounded-full p-3">
              <img src={""} className="drop-shadow-md" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
