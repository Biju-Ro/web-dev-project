import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import Plusmark from "./Plussign";
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3 fs-5 cursor-pointer icon-hover"
      />
      <FaTrash
        onClick={() => deleteModule(moduleId)}
        className="text-danger me-3 fs-5 cursor-pointer icon-hover"
      />
      <GreenCheckmark />
      <Plusmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
