import Layout from '../components/layout'
import Hero from '../components/hero';
import AboutCard from '../components/aboutCard';
import Head from 'next/head'
// import { getSocialMediaData } from "../lib/socials";
//
// export async function getStaticProps() {
//   const allSocialMediaData = getSocialMediaData();
//   return {
//     props: {
//       allSocialMediaData,
//     }
//   }
// }

export default function Home({ allSocialMediaData }) {
  return (
      <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
        </Head>
        {/*<Hero socialData={allSocialMediaData} />*/}
        <AboutCard />
      </Layout>
  )
}
