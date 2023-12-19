import CourseContent from "../../components/content/CourseContent";
import CourseSide from "../../components/sidebar/CourseSide";

export default function Courses() {
  return (
    <div className="flex gap-5 pb-14 ">
      <CourseSide />
      <CourseContent />
    </div>
  );
}
