import { MdDoNotDisturb } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
{
  /* Find more icons */
}
export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>

      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturb className="me-2 fs-5" />
            Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish{" "}
          </button>
        </div>
      </div>
      <br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <IoMdHome className="me-2 fs-5" /> Choose Home Page{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdBarChart className="me-2 fs-5" /> View Course Stream{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BsMegaphone className="me-2 fs-5" /> New Announcement{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <MdBarChart className="me-2 fs-5" /> New Analytics{" "}
      </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> View Course Notifications{" "}
      </button>
    </div>
  );
}
