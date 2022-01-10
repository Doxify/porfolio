// import Image from 'next/image';

export default function ProjectCard({ project }) {
  if(!project.active) {
    return ""
  }

  return (
    <div className="card shadow-sm detailed-project-card">
      {/* The Image component stretches the image and im too tried to fix it */}
      <img src={project.image_link} className="card-img-top" alt="Project image" layout='fill' />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="h5 card-title">{project.name}</h5>
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
      </div> 
    </div>
  )
}
