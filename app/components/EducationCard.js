export default function EducationCard({ education }) {
  if (!education.active) {
    return "";
  }

  return (
    <div className="card flex-row flex-wrap project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title">{education.name}</span>
          <span className="h6 card-title">
            {education.start} - {education.end}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="card-subtitle">{education.degree}</span>
          <span className="card-subtitle">GPA: {education.gpa}</span>
        </div>
      </div>
    </div>
  );
}
