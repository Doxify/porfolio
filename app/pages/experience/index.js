import Layout from '../../components/layout';
import Head from "next/head";
import ProjectCard from '../../components/projectCard';
import EducationCard from '../../components/educationCard';
import { getProjectsData } from "../../lib/projects";
import { getEducationData } from "../../lib/education";
import { getWorkData } from '../../lib/work';
import WorkCard from '../../components/workCard';

export async function getStaticProps() {
  const allProjectsData = getProjectsData();
  const allEducationData = getEducationData();
  const allWorkData = getWorkData();

  return {
    props: {
      allProjectsData,
      allEducationData,
      allWorkData
    }
  }
}

export default function Experience({ allProjectsData, allEducationData, allWorkData }) {
  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Experience</title>
      </Head>
      <div className="conatiner mb-3">
        <h4 className=""><mark>🏫 Education</mark></h4>
        {allEducationData.map(education => (
          <EducationCard key={education.id} education={education} />
        ))}      
      </div>

      <div className="conatiner mb-3">
        <h4 className="title"><mark>🗂 Work Experience</mark></h4>
        {allWorkData.map(work => (
          <WorkCard key={work.id} work={work} />
        ))} 
      </div>

      <div className="conatiner mb-3">
        <h3 className="title"><mark>👨🏻‍💻 Notable Projects</mark></h3>
        {allProjectsData.map(project => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  )
}