import { IoIosAdd } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <IoIosAdd className="fs-2" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
