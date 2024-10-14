export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h4>Assignment Name</h4>
      <input className="form-control mb-3" placeholder="Assignment Name" />

      <textarea
        className="form-control mb-3"
        cols={40}
        rows={10}
        placeholder="Description"
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
          <select id="wd-group" className="form-select">
            <option>ASSIGNMENTS</option>
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
          <select id="wd-display-grade-as" className="form-select">
            <option>Percentage</option>
            <option>Decimal</option>
            <option>Percentile</option>
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
            <select id="wd-submission-type" className="form-select mb-2">
              <option>Online</option>
              <option>In-Person</option>
            </select>
            <strong>Online Entry Options</strong>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="textEntry"
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
              />
              <label className="form-check-label" htmlFor="studentAnnotation">
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="fileUploads"
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
              />
              <label className="form-check-label" htmlFor="restrictUploads">
                Restrict Upload File Types
              </label>
            </div>
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
              value="Everyone"
            />

            <strong>Due</strong>
            <input className="form-control mb-3" type="date" />

            <div className="row">
              <div className="col">
                <strong>Available from</strong>
                <input className="form-control mb-2" type="date" />
              </div>
              <div className="col">
                <strong>Until</strong>
                <input className="form-control mb-2" type="date" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
