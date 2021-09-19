export default function WorkCard({ work }) {
  return (
    <div className="card project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title">{work.name}</span>
          <span className="h6 card-subtitle">{work.start} - {work.end}</span>
        </div>
        <p className="card-subtitle text-muted">{work.title}</p>
        <ul>
          {
            work.bullets.map((bullet) => <li className="card-text" key={bullet}>{bullet}</li>)
          }
        </ul>
      </div>
    </div>
  )
}