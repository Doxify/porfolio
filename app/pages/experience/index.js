import Head from "next/head";

import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

import Loading from '../../components/partials/Loading';
import Layout from '../../components/partials/Layout';
import ProjectCard from '../../components/ProjectCard';
import EducationCard from '../../components/EducationCard';
import WorkCard from '../../components/WorkCard';
import DetailedProjectCard from '../../components/DetailedProjectCard';


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
        image_link
        desc
        documentation_link
        end_date
        start_date
        technologies
        featured       
      }
      educations {
        _id
        active
        degree
        end
        gpa
        name
        start
        logo
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

  const featuredProjects = data.projects.filter(project => project.featured);
  const regularProjects = data.projects.filter(project => !project.featured);

  if (error) {
    return (
      <div className="text-center p-5 mt-5">
        <p>Internal server error. Please try again later.</p>
      </div>
    )
  }


  return (
    <Layout>
      <Head>
        <title>Andrei Georgescu - Experience</title>
      </Head>
      <div className="conatiner mb-3">
        <h4 className="title"><mark>🏫 Education</mark></h4>
        {data.educations.map(education => (
          <EducationCard key={education._id} education={education} />
        ))}      
      </div>

      <div className="conatiner mb-3">
        <h4 className="title"><mark>📁 Work Experience</mark></h4>
        {data.works.map(work => (
          <WorkCard key={work._id} work={work} />
        ))} 
      </div>

      <div className="conatiner mb-3">
        <h4 className="title"><mark>🥳 Notable Projects</mark></h4>
        
        <div className="row mt-3">
          {featuredProjects.map(project => project.active ? (
            <div className="col-sm-12 col-md-6">
              <DetailedProjectCard key={project._id} project={project} />
            </div>
          ) : null )}
        </div>

        <div className="row mt-3">
          {regularProjects.map(project => (
            project.featured ? <DetailedProjectCard key={project._id} project={project} />
            : <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}