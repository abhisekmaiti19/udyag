import LiveclassCard from "../cards/LiveclassCard";
import { Player } from "@lottiefiles/react-lottie-player";

export default function CourseContent() {
  return (
    <div className=" w-3/4 h-full overflow-hidden rounded-xl p-3">
      <div className="w-full h-[20%] flex justify-between items-end">
        <div className=" flex flex-col gap-2 border-b-2 border-slate-300 pb-2">
          <h1 className=" text-3xl font-black text-slate-600">
            An Important Class
          </h1>
          <h1 className="text-lg text-slate-400">15 December</h1>
        </div>
        <LiveclassCard />
      </div>

      {/* //For now just testing prps soon with Text card and Video card  */}
      <div className="w-full h-[55vh] overflow-x-hidden overflow-y-scroll flex justify-center items-center">
        {/* <p className="p-3 py-10">
          {" "}
          minima itaque ratione in ipsa eaque, nihil officia reiciendis deserunt
          magni ex explicabo. Ea voluptatibus molestiae laborum voluptatum?
          Repellendus nam natus provident ab adipisci ipsum nihil minima quidem
          libero veniam, excepturi debitis, tenetur harum voluptas consectetur
          ea velit? Adipisci voluptates ad vitae facilis quasi in soluta, magnam
          eligendi.{" "}
        </p> */}

        <Player
          src="https://lottie.host/43d4f558-8315-4ca7-8566-9b0c7522ab46/JElMdQaXRp.json"
          className="w-[200px]"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
