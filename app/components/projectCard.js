import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <div className="card bg-light shadow mb-4">
      {/* <div className="card-header">{project.name}</div> */}
      <Image
        className="card-img-top"
        src={project.image_link} 
        alt="Card image cap"
        quality="100"
        height={300}
        width={500}
      />
      <div className="card-body">
        <p className="card-text">
          {project.desc}
        </p>
      
        <small className="card-subtitle text-muted">Date:</small>
        <p className="card-text small">{project.start_date} - {project.end_date}</p>

        <small className="card-subtitle text-muted">Built with:</small>
        <p className="card-text text-muted small">
          {
            project.technologies.map((t, i) => (
              <small key={i} className="technology-item text-dark">{t}</small>
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
              rel="noreferrer"
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
              rel="noreferrer"
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
              rel="noreferrer"
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