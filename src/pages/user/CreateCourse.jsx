import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DB from "../../appwrite/services/db";

function CreateCourse() {
  const navigate = useNavigate();
  const [pos, setPos] = useState();
  const [location, setLocation] = useState();
  //   const [pack, setPack] = useState();
  const [disability, setDisability] = useState();
  //   const [skills, setSkills] = useState([]);
  const [joblink, setJoblink] = useState("");

  const slector = useSelector((state) => state.auth.status);
  async function clickhandle() {
    let createdBy = JSON.parse(localStorage.user).name;

    if (slector) {
      return await DB.createJob({
        createdBy,
        pos,
        location,
        pack,
        disability,
        skills,
        joblink,
      });
    }
  }

  const mydis = [
    "What type of disability you have",
    "Blindness",
    "leprosy",
    "hearing",
    "locomotor",
    "dwarfism",
    "intellectual",
    "mental",
    "autism",
    "spectrum",
    "cerebral",
    "dyslexia",
  ];

  return (
    <>
      <ToastContainer />
      <div className="w-full h-full border-2 border-black flex flex-col gap-10 items-center">
        <div className="w-full h-fit flex justify-center items-center">
          <h1 className="font-black text-3xl bg-gradient-to-br from-brand-green  to-green-500 border-2 border-black p-5 rounded text-slate-700 shadow-xl">
            Create a Job
          </h1>
        </div>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <input
            type="text"
            placeholder="Course Name"
            className="border-2 border-black w-[500px] h-[60px] rounded-xl bg-slate-100 p-5"
            value={pos}
            onChange={(e) => {
              setPos(e.target.value);
            }}
          />

          <select
            id="disability"
            name="disability_tag"
            placeholder="What type of disability you have"
            className="border-2 border-black w-[500px] h-[60px] rounded-xl bg-slate-100 p-2 pl-5"
            value={disability}
            onChange={(e) => {
              setDisability(e.target.value);
            }}
          >
            {mydis.map((item) =>
              item === "What type of disability you have" ? (
                <option key={item} value={null}>
                  {item}
                </option>
              ) : (
                <option key={item} value={`${item}`}>
                  {item}
                </option>
              )
            )}
          </select>

          <input
            type="text"
            placeholder="Job link"
            value={joblink}
            onChange={(e) => {
              setJoblink(e.target.value);
            }}
            className="border-2 border-black w-[500px] h-[60px] rounded-xl bg-slate-100 p-5"
          />
          <input
            type="text"
            placeholder="Location"
            className="border-2 border-black w-[230px] h-[60px] rounded-xl bg-slate-100 p-5"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />

          <button
            type="text"
            placeholder="What is the position"
            className="border-2 text-xl border-black w-[250px] h-[60px] rounded-xl bg-brand-green font-black shadow-xl"
            onClick={async () => {
              toast.promise(clickhandle(), {
                pending: {
                  render() {
                    return "☺ Please Wait! ";
                  },
                  icon: false,
                },
                success: {
                  render() {
                    navigate("");
                    return "Succefully created";
                  },
                },
                error: {
                  render({ data }) {
                    // When the promise reject, data will contains the error
                    return `Error : Internal${data}`;
                  },
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateCourse;
