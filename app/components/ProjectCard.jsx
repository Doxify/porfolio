export default function ProjectCard({ project }) {
  if(!project.active) {
    return ""
  }

  return (
    <div className="card project-card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <span className="h5 card-title">{project.name}</span>
          {// Show a demo link if available or github source if not
            project.demo_link !== "undefined" 
            ? <a 
                className="h6"
                data-toggle="tooltip"
                data-placement="bottom"
                target="_blank"
                rel="noreferrer"
                title="View Application"
                href={project.demo_link}
              >
                Try Now
              </a>
            : <a 
                className="h6"
                data-toggle="tooltip"
                data-placement="bottom"
                target="_blank"
                rel="noreferrer"
                title="View source code on GitHub"
                href={project.github_link}
              >
                Learn more
              </a>
          }
        </div>
        <p className="card-subtitle text-muted">{project.desc}</p>
        {/* <ul>
          {
            project.bullets.map((bullet) => <li className="card-text" key={bullet}>{bullet}</li>)
          }
        </ul> */}
      </div>
    </div>
  )
}
