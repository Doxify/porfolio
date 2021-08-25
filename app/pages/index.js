import Layout from '../components/layout'
import Hero from '../components/hero';
import About from '../components/about';
import Head from 'next/head'

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Andrei Georgescu - Software Engineer</title>
        </Head>
        <Hero />
        <About />
      </Layout>
  )
}
