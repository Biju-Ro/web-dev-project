import { BsGripVertical } from "react-icons/bs";
import { LuFileEdit } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ ModuleControlButtons";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaSearch,
} from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-5">
      <div className="d-flex mb-4 justify-content-between align-items-center">
        <div className="input-group me-3" style={{ width: "250px" }}>
          <span className="input-group-text hi">
            <FaSearch />
          </span>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div>
          <button
            id="wd-add-module-btn"
            className="btn btn-lg btn-secondary me-2"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
          <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </button>
        </div>
      </div>

      <ul className="list-group">
        <li className="wd-module list-group-item p-0 mb-4 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span>ASSIGNMENTS</span>
            </div>
            <span>
              <label
                className="form-label pe-2 ps-2 me-3"
                style={{
                  borderRadius: "50px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                40% of Total
              </label>
              <FaPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </span>
          </div>

          <ul className="wd-assignment-list-item list-group rounded-0">
            {[
              "A1 - ENV + HTML",
              "A2 - CSS + BOOTSTRAP",
              "A3 - JAVASCRIPT + REACT",
            ].map((assignment, index) => (
              <li
                key={index}
                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-2 fs-3" />
                <LuFileEdit className="me-2 fs-4 text-success" />
                <div className="wd-fg-color-gray ps-0 ms-2">
                  <a
                    style={{ color: "black", textDecoration: "none" }}
                    className="fw-bold"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    {assignment}
                  </a>
                  <br />
                  <div className="text-muted">
                    Multiple Modules | Not available until May 6 at 12:00am
                    <br />
                    <b>Due</b> 2024-11-01 12:00 | 75 points
                  </div>
                </div>
                <div className="float-end ms-auto">
                  <GreenCheckmark />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
