import Head from 'next/head'
import Hero from '../../components/hero'
import Layout from '../../components/layout'

import { getSortedProjectsData } from '../../lib/projects';

export async function getStaticProps() {
  const allProjectsData = await getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    }
  }
}


export default function Projects({ allProjectsData }) {
  console.log(allProjectsData)
  return (
    <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <div className="hero">
          <div className="container">
            {/* {
              allProjectsData ? allProjectsData.map(project => (
                <div key={project.id} className="project">
                  <h2>{project.name}</h2>
                  <p>{project.description}</p>
                </div>
              ))
              : null
            } */}
          </div>
        </div>
    </Layout>
  )
}
