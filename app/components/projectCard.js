export default function ProjectCard({ project }) {
  return (
    <div className="card bg-light shadow mb-4">
      {/* <div className="card-header">{project.name}</div> */}
      <img class="card-img-top" src={project.image_link} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">
          {project.desc}
        </p>
        <p className="card-text text-muted small">
          Built with...
          <br />
          {
            project.technologies.map((t) => (
              <small className="technology-item text-dark">{t}</small>
            ))
          }
        </p>
      </div>
      <div className="card-footer">
        {
          project.github_link ?
            <a 
              className="btn btn-sm btn-outline-dark me-2"
              data-toggle="tooltip"
              data-placement="bottom"
              target="_blank"
              title="View source code on GitHub"
              href={project.github_link}

            >
              Source Code <i className="fab fa-github" />
            </a>
          :
            ""
        }
        {
          project.documentation_link ?
            <a 
              className="btn btn-sm btn-outline-primary me-2"
              data-toggle="tooltip"
              data-placement="bottom"
              target="_blank"
              title="View documentation on Google Docs"
              href={project.documentation_link}

            >
              Documentation <i className="fas fa-book" />
            </a>
          :
            ""
        }
        {
          project.demo_link ?
            <a 
              className="btn btn-sm btn-outline-success me-2"
              data-toggle="tooltip"
              data-placement="bottom"
              target="_blank"
              title="View Application"
              href={project.demo_link}

            >
              Demo <i className="fas fa-cloud" />
            </a>
          :
            ""
        }
      </div>
    </div>
  )
}