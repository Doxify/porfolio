import Head from 'next/head'
// import Link from 'next/link'
import Layout from '../components/layout'
import Hero from '../components/hero';
import About from '../components/about';

// import { getSortedProjectsData } from '../lib/projects';

// export async function getStaticProps() {
//   const allProjectsData = await getSortedProjectsData();
//   return {
//     props: {
//       allProjectsData,
//     }
//   }
// }


export default function Home() {

  return (
    <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="title">
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
        </h1>
        <Hero />
        <About />
    </Layout>
  )
}
