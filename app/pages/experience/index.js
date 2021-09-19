import Head from "next/head";

import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

import Loading from '../../components/partials/Loading';
import Layout from '../../components/partials/Layout';
import ProjectCard from '../../components/ProjectCard';
import EducationCard from '../../components/EducationCard';
import WorkCard from '../../components/WorkCard';


export default function Experience() {
  const { data, loading, error } = useQuery(gql`
    query {
      projects {
        _id
        name 
        active
        area_of_development
        bullets
        demo_link
        github_link
        desc
        documentation_link
        end_date
        start_date
        technologies       
      }
      educations {
        _id
        active
        degree
        end
        gpa
        name
        start
      }
      works {
        _id
        active
        bullets
        end
        name
        start
        title
      }
    }
  `);

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return (
      <Loading /> // TODO: Handle this
    )
  }


  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Experience</title>
      </Head>
      <div className="conatiner mb-3">
        <h3 className="title"><mark>🏫 Education</mark></h3>
        {data.educations.map(education => (
          <EducationCard key={education._id} education={education} />
        ))}      
      </div>

      <div className="conatiner mb-3">
        <h3 className="title"><mark>📁 Work Experience</mark></h3>
        {data.works.map(work => (
          <WorkCard key={work._id} work={work} />
        ))} 
      </div>

      <div className="conatiner mb-3">
        <h3 className="title"><mark>👨🏻‍💻 Notable Projects</mark></h3>
        {data.projects.map(project => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </Layout>
  )
}