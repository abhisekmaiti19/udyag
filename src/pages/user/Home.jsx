import Hero from "../../components/hero/Hero";
import Jobs from "../../components/jobs/Jobs";
import Courses from "../../components/courses/Courses";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 pb-14 ">
      <Hero />
      <Courses />
      <Jobs />
    </div>
  );
}
