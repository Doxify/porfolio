export default function EducationCard({ education }) {
  return (
    <div className="card project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title">{education.name}</span>
          <span className="h6 card-title">{education.start} - {education.end}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="card-subtitle">{education.degree}</span>
          <span className="card-subtitle">GPA: {education.gpa}</span>
        </div>
          {/* <p className="card-text">
            <small className="text-muted">Relevant Courswork: </small>
            {education.courses.join(", ")}
          </p> */}
      </div>
    </div>
  )
}
