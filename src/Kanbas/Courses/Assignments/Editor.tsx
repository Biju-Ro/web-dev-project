import { useParams, Link, useNavigate } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h4>Assignment Name</h4>
      <input
        className="form-control mb-3"
        placeholder="Assignment Name"
        value={assignment?._id}
      />

      <textarea
        className="form-control mb-3"
        cols={40}
        rows={10}
        placeholder="Description"
        value={assignment?.description}
      ></textarea>

      <div className="row g-3 mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-md-8">
          <input
            id="wd-points"
            className="form-control"
            type="number"
            placeholder="Points"
            value={assignment?.points}
          />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-md-8">
          <select
            id="wd-group"
            className="form-select"
            value={assignment?.assignmentGroup}
          >
            <option value="Assignments">Assignments</option>
            <option value="Exams">Exams</option>
            <option value="Projects">Projects</option>
            <option value="Quizzes">Quizzes</option>
            <option value="Reports">Reports</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-md-8">
          <select
            id="wd-display-grade-as"
            className="form-select"
            value={assignment?.displayGradeAs}
          >
            <option value="Percentage">Percentage</option>
            <option value="Decimal">Decimal</option>
            <option value="Percentile">Percentile</option>
          </select>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-md-8">
          <div className="border rounded p-3">
            <select
              id="wd-submission-type"
              className="form-select mb-2"
              value={assignment?.submissionType}
            >
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </select>
            {assignment?.submissionType === "Online" && (
              <>
                <strong>Online Entry Options</strong>
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="textEntry"
                    checked={assignment?.onlineEntryOptions?.textEntry}
                  />
                  <label className="form-check-label" htmlFor="textEntry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="websiteUrl"
                    checked={assignment?.onlineEntryOptions?.websiteUrl}
                  />
                  <label className="form-check-label" htmlFor="websiteUrl">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mediaRecordings"
                    checked={assignment?.onlineEntryOptions?.mediaRecordings}
                  />
                  <label className="form-check-label" htmlFor="mediaRecordings">
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="studentAnnotation"
                    checked={assignment?.onlineEntryOptions?.studentAnnotation}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="studentAnnotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fileUploads"
                    checked={assignment?.onlineEntryOptions?.fileUploads}
                  />
                  <label className="form-check-label" htmlFor="fileUploads">
                    File Uploads
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="restrictUploads"
                    checked={
                      assignment?.onlineEntryOptions?.restrictUploadFileTypes
                    }
                  />
                  <label className="form-check-label" htmlFor="restrictUploads">
                    Restrict Upload File Types
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-4 text-end">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign
          </label>
        </div>
        <div className="col-md-8">
          <div className="border rounded p-3">
            <strong>Assign to</strong>
            <input
              id="wd-assign-to"
              className="form-control mb-2"
              type="text"
              placeholder="Choose"
              value={assignment?.assignTo}
            />

            <strong>Due</strong>
            <input
              className="form-control mb-3"
              type="date"
              value={assignment?.dueDate?.split(" ")[0]}
            />

            <div className="row">
              <div className="col">
                <strong>Available from</strong>
                <input
                  className="form-control mb-2"
                  type="date"
                  value={assignment?.availableFrom?.split(" ")[0]}
                />
              </div>
              <div className="col">
                <strong>Until</strong>
                <input
                  className="form-control mb-2"
                  type="date"
                  value={assignment?.until}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-5 mb-5" />
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary me-2"
          onClick={() => navigate(`/kanbas/courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            navigate(`/kanbas/courses/${cid}/Assignments`);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
