export default function EducationCard({ education }) {
  return (
    <div className="card flex-row flex-wrap project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title text-start">{education.name}</span>
          <span className="h6 card-title text-end d-none d-md-block">
            {education.start} - {education.end}
          </span>
        </div>
        <div className="d-flex justify-content-between">
          <span className="card-subtitle text-start">{education.degree}</span>
          <span className="card-subtitle text-end d-none d-md-block">
            GPA: {education.gpa}
          </span>
        </div>
      </div>
    </div>
  );
}
