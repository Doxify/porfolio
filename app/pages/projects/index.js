import Layout from '../../components/layout'
import ProjectCard from '../../components/projectCard'

import { getProjectsData } from '../../lib/projects';

export async function getStaticProps() {
  const allProjectsData = await getProjectsData();
  return {
    props: {
      allProjectsData,
    }
  }
}

export default function Projects({ allProjectsData }) {
  return (
    <Layout>
      {allProjectsData.map((project, i) => (
        <div key={i}>
          <h5 className="card-title text-center">{project.name}</h5>
          <ProjectCard project={project} />
        </div>
      ))}
    </Layout>
  )
}