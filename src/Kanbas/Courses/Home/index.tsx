import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex ps-5" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>

      <div className="d-none d-md-block ps-5">
        <CourseStatus />
      </div>
    </div>
  );
}
