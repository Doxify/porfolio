import EducationCard from "./EducationCard"
import WorkCard from "./WorkCard"
import ProjectCard from "./ProjectCard"

export default function Experience({ projects, works, educations }) {
    return (
        <>
            <div className="conatiner mt-5 mb-5">
                <h4 className="title"><mark>🏫 Education</mark></h4>
                {educations.map(education => (
                    <EducationCard key={education._id} education={education} />
                ))}      
            </div>

            <div className="conatiner mt-5 mb-5">
                <h4 className="title"><mark>📁 Work Experience</mark></h4>
                {works.map(work => (
                    <WorkCard key={work._id} work={work} />
                ))} 
            </div>

            <div className="conatiner mt-5">
                <h4 className="title"><mark>👨🏻‍💻 Notable Projects</mark></h4>
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </>
    )
}